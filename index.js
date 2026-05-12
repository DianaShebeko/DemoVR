/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var sceneInfoToggleElement = document.querySelector('#sceneInfoToggle');
    
  var guideAudio = null;     // аудио для гида
  var currentSceneWrapper = null;
  
  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
      var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
      if (el) {
          el.addEventListener('click', function () {
              switchScene(scene);
              // On mobile, hide scene list after selecting a scene.
              if (document.body.classList.contains('mobile')) {
                  hideSceneList();
              }
          });
      }
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

    function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);

    if (gAudio) {
        gAudio.pause();
        gAudio = null;
    }
    if (audioBtn) { audioBtn.classList.remove('enabled'); }
    if (audioBar) { audioBar.classList.remove('visible'); }
    if (audioSeek) audioSeek.value = 0;
    if (audioTime) audioTime.textContent = '0:00';

    if (scene.data.audioGuide) {
        gAudio = new Audio(scene.data.audioGuide);
        gAudio.preload = 'metadata';
        gAudio.ontimeupdate = updateTime;
    }

	currentSceneWrapper = scene;
  }


  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }
  
  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    if (hotspot.text) {
		text.innerHTML = hotspot.text;
	}

	  // === ГИБКИЙ КОНТЕНТ ===
	  if (hotspot.content && hotspot.content.length > 0) {
		hotspot.content.forEach(function(block) {
			
			// === ТЕКСТ ===
		  if (block.type === 'text') {
			var textBlock = document.createElement('div');
			textBlock.classList.add('content-block', 'content-text');
			textBlock.innerHTML = block.value;
			text.appendChild(textBlock);
		  }
		  
		  else if (block.type == 'note')  {
			var noteBlock = document.createElement('div');
			noteBlock.classList.add('content-block', 'content-note');
			noteBlock.innerHTML = block.value;
			text.appendChild(noteBlock);			  
		  }
		  
		  // === ОДИНОЧНОЕ ИЗОБРАЖЕНИЕ ===
		  else if (block.type === 'image') {
	      if (!block.images || block.images.length <= 1) {		  
			var imgBlock = document.createElement('div');
			imgBlock.classList.add('content-block', 'content-image');
			
			var img = document.createElement('img');
			img.src = block.images[0];
			img.alt = block.alt || '';

            imgBlock.appendChild(img);
			text.appendChild(imgBlock);
		  }
		      // Если несколько изображений — создаём слайдер
          else  {
              var slider = document.createElement('div');
              slider.className = 'info-hotspot-slider';

              var slides = document.createElement('div');
              slides.className = 'slides';

              block.images.forEach(function (src) {
                  var slide = document.createElement('div');
                  slide.className = 'slide';
                  var img = document.createElement('img');
                  img.src = src;
                  slide.appendChild(img);
                  slides.appendChild(slide);
              });

              var prev = document.createElement('button');
              prev.className = 'slider-btn prev';
              prev.innerHTML = '&#8592;';

              var next = document.createElement('button');
              next.className = 'slider-btn next';
              next.innerHTML = '&#8594;';

              slider.appendChild(slides);
              slider.appendChild(prev);
              slider.appendChild(next);
              text.appendChild(slider);

              // Логика
              var count = block.images.length, cur = 0;
              function go(i) {
                  if (i < 0) i = count - 1;
                  else if (i >= count) i = 0;
                  cur = i;
                  slides.style.transform = 'translateX(' + (-i * 100) + '%)';
              }
              prev.onclick = e => { e.stopPropagation(); go(cur - 1); };
              next.onclick = e => { e.stopPropagation(); go(cur + 1); };
              go(0);
              }
          }

		  else if (block.type === 'video') {
			  var videoBlock = document.createElement('div');
			  videoBlock.classList.add('content-block', 'content-video');

			  // === ЕСЛИ ЭТО EMBED (rutube/youtube) ===
			  if (block.src.includes('rutube.ru') || block.src.includes('youtube.com') || block.src.includes('youtu.be')) {
				
				var iframe = document.createElement('iframe');
				iframe.src = block.src;
				iframe.style.width = '100%';
				iframe.style.height = '400px';
				iframe.style.border = 'none';
				iframe.allowFullscreen = true;
				
				videoBlock.appendChild(iframe);

			  } 
			  // === ЕСЛИ ЭТО ОБЫЧНЫЙ MP4 ===
			  else {
				var video = document.createElement('video');
				video.src = block.src;
				if (block.poster) video.poster = block.poster;
				video.controls = true;
				video.style.maxWidth = '100%';
				video.style.height = 'auto';
				video.style.maxHeight = '400px';
				video.style.margin = '10px auto';
				video.style.display = 'block';

				videoBlock.appendChild(video);
			  }

			  text.appendChild(videoBlock);
			}
		});
	  }
	  
    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);
	
    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }
  
  //* ===== FLOORMAP ======= *
var floorPoints = document.querySelectorAll('.floor-point');

floorPoints.forEach(function(point) {
  point.addEventListener('click', function() {
    var sceneId = point.getAttribute('data-scene');
    var scene = findSceneById(sceneId);

    if (scene) {
      switchScene(scene);
      hideSceneList(); // закрываем панель после перехода
    }
  });
});

/*========= НИЖНЕЕ МЕНЮ ==========*/
var menuBtn = document.getElementById('btnMenuHidden');
var hiddenMenu = document.getElementById('hiddenMenu');
var audioOnOffBtn = document.getElementById('audioOnOff');

// 4. Скрытое меню (Открыть/Закрыть)
if (menuBtn && hiddenMenu) {
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        hiddenMenu.classList.toggle('open');
        menuBtn.classList.toggle('enabled');
    });

    // Закрытие при клике в пустоту
    document.addEventListener('click', function (e) {
        if (!menuBtn.contains(e.target) && !hiddenMenu.contains(e.target)) {
            hiddenMenu.classList.remove('open');
            menuBtn.classList.remove('enabled');
        }
    });
}

// 5. Глобальный вкл/выкл звука (в меню)
if (audioOnOffBtn) {
    audioOnOffBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (gAudio) { gAudio.muted = !gAudio.muted; }
        this.classList.toggle('enabled');
    });
}

    // === АУДИОГИД ===
var gAudio = null;
var audioBtn = document.getElementById('audioBtn');
var audioBar = document.getElementById('audioBar');
var audioSeek = document.getElementById('audioSeek');
var audioTime = document.getElementById('audioTime');
var isMuted = false; 

function updateTime() {
  if (gAudio && gAudio.duration && audioSeek && audioTime) {
    audioSeek.value = (gAudio.currentTime / gAudio.duration) * 100;
    var m = Math.floor(gAudio.currentTime/60), s = Math.floor(gAudio.currentTime%60);
    audioTime.textContent = m + ':' + (s<10?'0':'') + s;
  }
}

// Функция для применения muted состояния к текущему аудио
function applyMutedState() {
    if (gAudio) {
        gAudio.muted = isMuted;
    }
    // Обновляем визуальное состояние кнопки
    if (audioOnOffBtn) {
        if (isMuted) {
            audioOnOffBtn.classList.add('enabled');
        } else {
            audioOnOffBtn.classList.remove('enabled');
        }
    }
}

// Обработчик кнопки глобального mute (в меню)
if (audioOnOffBtn) {
    audioOnOffBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        isMuted = !isMuted;  // Переключаем глобальный флаг
        applyMutedState();    // Применяем к текущему аудио
    });
}

if (audioBtn) {
    audioBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!gAudio) return;

        if (gAudio.paused) { gAudio.play(); }
        else { gAudio.pause(); }

        this.classList.toggle('enabled');
    });
}

// Перемотка
if (audioSeek) {
  audioSeek.oninput = function() {
    if (gAudio && gAudio.duration) {
      gAudio.currentTime = (audioSeek.value / 100) * gAudio.duration;
    }
  };
}


// === КНОПКА ИНФОРМАЦИИ О СЦЕНЕ → МОДАЛЬНОЕ ОКНО ===
var sceneInfoToggle = document.getElementById('sceneInfoToggle');
var sceneInfoModal = document.getElementById('sceneInfoModal');
var sceneInfoTitle = document.getElementById('sceneInfoTitle');
var sceneInfoText = document.getElementById('sceneInfoText');
var sceneInfoClose = document.querySelector('#sceneInfoModal .scene-info-close-wrapper');

	function renderSceneInfoContent() {
	  const container = document.getElementById('sceneInfoText');
	  if (!container) return;
	  
	  container.innerHTML = ''; // Очищаем
	  
	  const content = currentSceneWrapper.data.sceneInfo.content;
	  if (!content) return;
	  
	  content.forEach(item => {
		
		// === ТЕКСТ ===
		if (item.type === 'text') {
		  const p = document.createElement('p');
		  p.className = 'scene-info-paragraph';
		  p.textContent = item.text;
		  container.appendChild(p);
		}
		
		// === КАРТИНКА ===
		else if (item.type === 'image') {
		  const img = document.createElement('img');
		  img.src = item.src;
		  img.className = 'scene-info-image'; // класс для CSS (отступы, размер)
		  container.appendChild(img);
		}		
		
		// === ЗАМЕТКА (по центру курсивом) ===
		else if (item.type === 'note') {
		  const p = document.createElement('p');
		  p.className = 'scene-info-note';
		  p.textContent = item.text;
		  container.appendChild(p);
		}
				
	  });
	}

	if (sceneInfoToggle) {
	  sceneInfoToggle.addEventListener('click', function(e) {
		e.stopPropagation();
		
		if (currentSceneWrapper && currentSceneWrapper.data.sceneInfo) {
		  if (sceneInfoTitle) sceneInfoTitle.textContent = currentSceneWrapper.data.sceneInfo.title || 'О сцене';
		  
		  // Вызываем рендеринг без параметров
		  renderSceneInfoContent();
		  
		  sceneInfoModal.classList.add('visible');
		}
	  });
	}

	// Закрытие модального окна (крестик)
	if (sceneInfoClose) {
	  sceneInfoClose.addEventListener('click', function() {
		sceneInfoModal.classList.remove('visible');
	  });
	}

	// Закрытие по клику вне контента
	if (sceneInfoModal) {
	  sceneInfoModal.addEventListener('click', function(e) {
		if (e.target === sceneInfoModal) {
		  sceneInfoModal.classList.remove('visible');
		}
	  });
	}


// === ПЕРЕОПРЕДЕЛЕНИЕ switchScene (аудио + инфо) ===
var originalSwitchScene = switchScene;
switchScene = function (scene) {
    // 1. Сначала вызываем оригинальную логику Marzipano
    originalSwitchScene(scene);

    // 2. АУДИО: сброс старого трека
    if (gAudio) { gAudio.pause(); gAudio = null; }
    if (audioBar) audioBar.classList.remove('visible');
    if (audioBtn) {
        // Показываем кнопку только если у сцены есть аудио
        audioBtn.style.display = scene.data.audioGuide ? 'flex' : 'none';
        audioBtn.classList.add('enabled');
        if (audioBar) audioBar.style.display = scene.data.audioGuide ? '' : 'none';
    }

    if (audioSeek) audioSeek.value = 0;
    if (audioTime) audioTime.textContent = '0:00';

    // 3. АУДИО: загрузка новогоs трека, если есть
    if (scene.data.audioGuide) {
        gAudio = new Audio(scene.data.audioGuide);
        gAudio.preload = 'metadata';
        gAudio.ontimeupdate = updateTime;
        gAudio.muted = isMuted;

        gAudio.play();
        gAudio.onended = function () {
            if (audioBtn) audioBtn.classList.remove('enabled');
            if (audioSeek) audioSeek.value = 0;
            if (audioTime) audioTime.textContent = '0:00';
        };
    }

    // 4. ИНФО-КНОПКА: показать/скрыть
    if (sceneInfoToggle) {
        var hasInfo = scene.data.sceneInfo && scene.data.sceneInfo.content;
        sceneInfoToggle.style.display = hasInfo ? 'block' : 'none';
        document.body.classList.toggle('scene-info-enabled', hasInfo);
    }
};

  // Display the initial scene.
  switchScene(scenes[0]);

// === ПЕРЕКЛЮЧАТЕЛЬ ЭТАЖЕЙ ===
(function initFloorToggle() {
  var floorBtns = document.querySelectorAll('.floor-btn');
  var floorPoints = document.querySelectorAll('.floor-point');
  var currentFloor = '1';

  function showFloor(floor) {
    currentFloor = floor;
    
    floorBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.floor === floor);
     });
    
    floorPoints.forEach(function(point) {
      if (point.dataset.floor === floor) {
        point.classList.add('visible');
      } else {
        point.classList.remove('visible');
      }
    });
  }

  floorBtns.forEach(function(btn) {
      btn.addEventListener('click', function (e) {
      e.preventDefault();         
      showFloor(this.dataset.floor);
    });
  });

  // Инициализация — показываем 1 этаж
  showFloor('1');
})();

// === Кнопка "ДОМАШНЯЯ СТРАНИЦА"" ===
(function initHomeButton() {
    var homeBtn = document.getElementById('sceneHome');
    if (!homeBtn) return;

    var HOME_SCENE_ID = '0-image';

    homeBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Ищем сцену по ID и переключаемся
        var homeScene = scenes.find(function (s) { return s.data.id === HOME_SCENE_ID; });
        switchScene(homeScene);
    });
})();

    if (viewer.scene().id === '0-image') {
        document.getElementById('prologue').classList.add('visible');
    }


})();
