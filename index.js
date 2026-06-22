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
// Список элементов из DOM.
var panoElement = document.querySelector('#pano');
var sceneNameElement = document.querySelector('#titleBar .sceneName');
var sceneListElement = document.querySelector('#sceneList');
var sceneElements = document.querySelectorAll('#sceneList .scene');
var sceneListToggleElement = document.querySelector('#sceneListToggle');
var autorotateToggleElement = document.querySelector('#autorotateToggle');
var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

var currentSceneWrapper = null;
// Определение тач-устройств
document.body.classList.add('no-touch');
window.addEventListener('touchstart', function() {
document.body.classList.remove('no-touch');
document.body.classList.add('touch');
});
// Инициализация Marzipano
var viewerOpts = {
controls: {
mouseViewMode: data.settings.mouseViewMode
}};
// Создание просмотрщика
    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Инициализация сцен и загрузка панорам
var scenes = data.scenes.map(function (data) {
   var urlPrefix = "tiles";
        var source = Marzipano.ImageUrlSource.fromString(
            urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
            { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
        var geometry = new Marzipano.CubeGeometry(data.levels);
        var baseLimiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
        var limiter = Marzipano.util.compose(
            baseLimiter,
            Marzipano.RectilinearView.limit.pitch(-Math.PI / 2, Math.PI / 6)
        );
        var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);
    var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
    });

// Генерация стрелок переходов
data.linkHotspots.forEach(function(hotspot) {
    var element = createLinkHotspotElement(hotspot);
    scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
});

// Генрация иформационных точек
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
// Параметры автоповорота
var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
});
if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
}
// Привязка события к кнопке автоповорота
autorotateToggleElement.addEventListener('click', toggleAutorotate);

// Привязка события к кнопке открытия навигации
sceneListToggleElement.addEventListener('click', toggleSceneList);

// Выбор локации из списка залов
scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    if (el) {
        el.addEventListener('click', function () {
            switchScene(scene);
    // On mobile, hide scene list after selecting a scene.
    if (document.body.classList.contains('mobile')) {
        hideSceneList();
}});}});

//  Элементы управлением обзора панорам
var viewUpElement = document.querySelector('#viewUp');
var viewDownElement = document.querySelector('#viewDown');
var viewLeftElement = document.querySelector('#viewLeft');
var viewRightElement = document.querySelector('#viewRight');
var viewInElement = document.querySelector('#viewIn');
var viewOutElement = document.querySelector('#viewOut');

var velocity = 0.7;
var friction = 3;

// Методы управления для элементов управления обзором панорам
var controls = viewer.controls();
controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

// Автоматическое открытие информационного окна в стартовой сцене
function autoOpenSceneInfo() {
    if (scenes[0]) {
        currentSceneWrapper = scenes[0];
    if (sceneInfoTitle) {
        sceneInfoTitle.textContent = scenes[0].data.sceneInfo.title;
    }
    renderSceneInfoContent();
    sceneInfoModal.classList.add('visible');
}}
//setTimeout(autoOpenSceneInfo, 500); // Автозапуск через 500мс

function switchScene(scene) {   /*Оригинальная логика переключения залов */
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
    currentSceneWrapper = scene;
}

function sanitize(s) {
   return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
}

function updateSceneName(scene) { //ОБновление текстового заголовка зала
    sceneNameElement.innerHTML = sanitize(scene.data.name);
}
  
function updateSceneList(scene) { //Изменение класса сцен в боковом меню
    for (var i = 0; i < sceneElements.length; i++) {
        var el = sceneElements[i];
    if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
        } else {el.classList.remove('current');}
            }
}
function hideSceneList() { /*Скрыть навигационное окно*/
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
}
function toggleSceneList() { //Переключить состояние видимости навигационного окна
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
}
function startAutorotate() { //Старт автоповорота
    if (!autorotateToggleElement.classList.contains('enabled')) {return;}
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
}
function stopAutorotate() { //Остановка автоповорота
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
}

function toggleAutorotate() { //Переключение автоповорота по кнопке
    if (autorotateToggleElement.classList.contains('enabled')) {
        autorotateToggleElement.classList.remove('enabled');
        stopAutorotate();
    } else {
        autorotateToggleElement.classList.add('enabled');
        startAutorotate();
      }
}

/* Интерактивные маркеры переходов  */
function createLinkHotspotElement(hotspot) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot', 'link-hotspot');

    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Поворот стрелки
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Переход на длругую локацию при клике
    wrapper.addEventListener('click', function() {
        switchScene(findSceneById(hotspot.target));
    });
    //Исключение конфликта клика по маркеру и панорамы
    stopTouchAndScrollEventPropagation(wrapper);
    // Создание всплывающего названия зала при наведении
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
    }

//Информационные точки 
function createInfoHotspotElement(hotspot) {
// Сборка элементов контента (текст, слайдер, видео, 3д-модель)
function createContentNodes() {
var textContainer = document.createElement('div');
textContainer.classList.add('info-hotspot-text');
if (hotspot.content && hotspot.content.length > 0) {
for (var i = 0; i < hotspot.content.length; i++) {
var block = hotspot.content[i];

if (block.type === 'text') { /* текст */
var textBlock = document.createElement('div');
textBlock.classList.add('content-block', 'content-text');
textBlock.innerHTML = block.text;
textContainer.appendChild(textBlock);
}
else if (block.type === 'note') { /* подпись рисунка */
var noteBlock = document.createElement('div');
noteBlock.classList.add('content-block', 'content-note');
noteBlock.innerHTML = block.text;
textContainer.appendChild(noteBlock);
}
else if (block.type === 'image') { /* изображения */
if (!block.images || block.images.length <= 1) {
var imgBlock = document.createElement('div');
imgBlock.classList.add('content-block', 'content-image');
var img = document.createElement('img');
img.src = block.images ? block.images[0] : block.src;
imgBlock.appendChild(img);
textContainer.appendChild(imgBlock);
} else {
var slider = createSlider(block.images);
textContainer.appendChild(slider);
}} 
else if (block.type === 'model') { /* 3d-модель  */
var modelBlock = document.createElement('div');
modelBlock.classList.add('content-block', 'content-model');
var modelViewer = document.createElement('model-viewer');
modelViewer.setAttribute('src', block.src);
modelViewer.setAttribute('camera-controls', '');
modelViewer.setAttribute('auto-rotate', '');
modelViewer.setAttribute('touch-action', 'pan-y');
modelBlock.appendChild(modelViewer);
textContainer.appendChild(modelBlock);
}
else if (block.type === 'video') { /* видео */
var videoBlock = document.createElement('div');
videoBlock.classList.add('content-block', 'content-video');
var video = document.createElement('video');
video.src = block.src;
if (block.poster) video.poster = block.poster;
video.controls = true;
videoBlock.appendChild(video);
textContainer.appendChild(videoBlock);
} }}
return textContainer;
}
// Сборка шапки информационного окна
function createHeaderNode() {
var header = document.createElement('div');
header.classList.add('info-hotspot-header');

var iconWrapper = document.createElement('div');
iconWrapper.classList.add('info-hotspot-icon-wrapper');
var icon = document.createElement('img');
icon.src = 'img/info.png';
icon.classList.add('info-hotspot-icon');
iconWrapper.appendChild(icon);

var titleWrapper = document.createElement('div');
titleWrapper.classList.add('info-hotspot-title-wrapper');
var title = document.createElement('div');
title.classList.add('info-hotspot-title');
title.innerHTML = hotspot.title;
titleWrapper.appendChild(title);

var closeWrapper = document.createElement('div');
closeWrapper.classList.add('info-hotspot-close-wrapper');
var closeIcon = document.createElement('img');
closeIcon.src = 'img/close.png';
closeIcon.classList.add('info-hotspot-close-icon');
closeWrapper.appendChild(closeIcon);

header.appendChild(iconWrapper);
header.appendChild(titleWrapper);
header.appendChild(closeWrapper);
return header;
}

// Модальное окно для компьютеров
var wrapper = document.createElement('div');
wrapper.classList.add('hotspot', 'info-hotspot');
var desktopHeader = createHeaderNode(false);
var desktopText = createContentNodes(false);
wrapper.appendChild(desktopHeader);
wrapper.appendChild(desktopText);

// Модальное окно для мобильных устройств
var modal = document.createElement('div');
modal.classList.add('info-hotspot-modal');
var modalHeader = createHeaderNode(true);
var modalText = createContentNodes(true);
modal.appendChild(modalHeader);
modal.appendChild(modalText);
document.body.appendChild(modal);

// Переключение видимости окна
var toggle = function () {
wrapper.classList.toggle('visible');
modal.classList.toggle('visible');
};

desktopHeader.addEventListener('click', toggle);
modalHeader.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

stopTouchAndScrollEventPropagation(wrapper);
stopTouchAndScrollEventPropagation(modal);

return wrapper;
}
// Галерея (слайдер)
function createSlider(images) {
var slider = document.createElement('div');
slider.classList.add('info-hotspot-slider');
var slides = []; //массив ссылок изображенний
var currentIndex = 0; //индекс текущего отображаемого слайда

for (var i = 0; i < images.length; i++) {
    var slide = document.createElement('div');
    slide.classList.add('slide');

    if (i !== 0) { //скрытие всех слайдов кроме первого
        slide.style.display = 'none';
    }

    var img = document.createElement('img');
    img.src = images[i];
    slide.appendChild(img);
    slider.appendChild(slide);
    slides.push(slide);
}
//кнопка "Назад"
var prevBtn = document.createElement('button'); 
prevBtn.classList.add('slider-btn', 'prev');
prevBtn.innerHTML = '&#8592;';
//кнопка "Вперед"
var nextBtn = document.createElement('button');
nextBtn.classList.add('slider-btn', 'next');
nextBtn.innerHTML = '&#8594;';
slider.appendChild(prevBtn);
slider.appendChild(nextBtn);

function showSlide(index) { //Функция переключения слайда
    if (index < 0) {index = slides.length - 1;}
    if (index >= slides.length) {index = 0;}
    slides[currentIndex].style.display = 'none'; //скрытие активного слайда
    currentIndex = index;
    slides[currentIndex].style.display = 'block'; //отображение цслайда
}

prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    showSlide(currentIndex + 1);
});
return slider;
}

// Ограничение кликов вне зоны окна при открытом модальном окне
function stopTouchAndScrollEventPropagation(element, eventList) {
var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel', 'mousewheel' ];
for (var i = 0; i < eventList.length; i++) {
element.addEventListener(eventList[i], function(event) {
event.stopPropagation();
}); } }
function findSceneById(id) { //Поиск сцены по строковому ID
for (var i = 0; i < scenes.length; i++) {
if (scenes[i].data.id === id) {
return scenes[i]; } }
return null; }
function findSceneDataById(id) {  //Поиск данных из data.js
for (var i = 0; i < data.scenes.length; i++) {
if (data.scenes[i].id === id) {
return data.scenes[i];
}} 
	return null;
}

//* Навигационная карта - обрработка точек на карте *
var floorPoints = document.querySelectorAll('.floor-point');
floorPoints.forEach(function(point) {
point.addEventListener('click', function() {
var sceneId = point.getAttribute('data-scene');
var scene = findSceneById(sceneId);
if (scene) {
switchScene(scene);
hideSceneList(); // закрытие панели после перехода
}
}); });
/* Нижнее меню (настройки) */
var menuBtn = document.getElementById('btnMenuHidden');
var hiddenMenu = document.getElementById('hiddenMenu');

if (menuBtn && hiddenMenu) { //  Скрытое меню (Открыть/Закрыть)
menuBtn.addEventListener('click', function (e) {
e.preventDefault();
e.stopPropagation();
hiddenMenu.classList.toggle('open');
menuBtn.classList.toggle('enabled');
}); }
//Аудиогид и звук
var gAudio = null; //объект текущего аудио
var isMuted = false;  //глобальное состояние звука
var audioBtn = document.getElementById('audioBtn');
var audioBar = document.getElementById('audioBar');
var audioSeek = document.getElementById('audioSeek');
var audioTime = document.getElementById('audioTime');
var audioOnOffBtn = document.getElementById('audioOnOff');
//Обновление прогресс-бара и текстового таймера
function updateTime() {
    if (gAudio && gAudio.duration && audioSeek && audioTime) {
        audioSeek.value = (gAudio.currentTime / gAudio.duration) * 100;
        var m = Math.floor(gAudio.currentTime/60), s = Math.floor(gAudio.currentTime%60);
        audioTime.textContent = m + ':' + (s<10?'0':'') + s;
}}
// Mute звука
function applyMutedState() {
    if (gAudio) { gAudio.muted = isMuted; }
    if (audioOnOffBtn) {
        audioOnOffBtn.classList.toggle('enabled', isMuted);
    }
}
// Обработчик кнопки Mute
if (audioOnOffBtn) {
    audioOnOffBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        isMuted = !isMuted;  // Переключение глобального флага
        applyMutedState();    // Применение к текущему аудио
});}

//Управление воспроизведением (Play/Pause)
if (audioBtn) {
    audioBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!gAudio) return;
    if (gAudio.paused) { gAudio.play(); }
    else { gAudio.pause(); }
    this.classList.toggle('enabled');
});}
// Перемотка аужио через ползунок
if (audioSeek) {
    audioSeek.oninput = function() {
    if (gAudio && gAudio.duration) {
        gAudio.currentTime = (audioSeek.value / 100) * gAudio.duration;
		}
	};
}

// Модальное окно "О сцене"
var sceneInfoModal = document.querySelector('#sceneInfoModal');
var sceneInfoTitle = document.querySelector('#sceneInfoTitle');
var sceneInfoText = document.querySelector('#sceneInfoText');
var sceneInfoClose = document.querySelector('#sceneInfoModal .scene-info-close-wrapper');
function renderSceneInfoContent() {
    var container = document.getElementById('sceneInfoText');
    if (!container) return;
    container.innerHTML = '';
	  
    var content = currentSceneWrapper.data.sceneInfo.content;
    if (!content) return;
	  
    content.forEach(function (item) {
        if (item.type === 'text') { //Текст
        var p = document.createElement('p');
        p.className = 'scene-info-paragraph';
        p.innerHTML = item.text;
        container.appendChild(p);
    }
    else if (item.type === 'image') { //Изображение
        const img = document.createElement('img');
        img.src = item.src;
        img.className = 'scene-info-image';
    }		
    else if (item.type === 'note') { //Подпись
        const p = document.createElement('p');
        p.className = 'scene-info-note';
        p.textContent = item.text;
        container.appendChild(p);
        }
    });
}

if (sceneInfoToggle) { //Отображение окна при клике на значок "i"
    sceneInfoToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentSceneWrapper && currentSceneWrapper.data.sceneInfo) {
            if (sceneInfoTitle) sceneInfoTitle.textContent = currentSceneWrapper.data.sceneInfo.title;  
            renderSceneInfoContent();  	  
            sceneInfoModal.classList.add('visible');
        }
    });
}

if (sceneInfoClose) { // Закрытие модального окна (крестик)
sceneInfoClose.addEventListener('click', function() {
sceneInfoModal.classList.remove('visible');
});
}

// Декоратор switchScene()
var originalSwitchScene = switchScene; //оригинальная логика switchScene
switchScene = function (scene) { 
    originalSwitchScene(scene); //вызов оригинальной логики
    //остановка видео-элементов из предыдущей сцены
    document.querySelectorAll('video').forEach(function (video) { video.pause(); });
    // Закрытие всех модальных окон
    document.querySelectorAll('.info-hotspot-modal.visible').forEach(function (m) {m.classList.remove('visible'); });

    // Аудио: сброс старого трека
    if (gAudio) { gAudio.pause(); gAudio = null; }
    if (audioBar) audioBar.classList.remove('visible');
    if (audioBtn) {
        // Показ кнопки только если у сцены есть аудио
        audioBtn.style.display = scene.data.audioGuide ? 'flex' : 'none';
        audioBtn.classList.add('enabled');
        if (audioBar) audioBar.style.display = scene.data.audioGuide ? '' : 'none';
    }
    if (audioSeek) audioSeek.value = 0;
    if (audioTime) audioTime.textContent = '0:00';

    // Аудио: загрузка и старт нового трека, если есть
    if (scene.data.audioGuide) {
        gAudio = new Audio(scene.data.audioGuide);
        gAudio.preload = 'metadata';
        gAudio.ontimeupdate = updateTime;
        gAudio.muted = isMuted;
        gAudio.play();
        gAudio.onended = function () { //конец трека - обнуление параметров
            if (audioBtn) audioBtn.classList.remove('enabled');
            if (audioSeek) audioSeek.value = 0;
            if (audioTime) audioTime.textContent = '0:00';
        };
    }
        // Информация о сцене: показать/скрыть
        if (sceneInfoToggle) {
            var hasInfo = scene.data.sceneInfo && scene.data.sceneInfo.content;
            sceneInfoToggle.style.display = hasInfo ? 'block' : 'none';
            document.body.classList.toggle('scene-info-enabled', hasInfo);
        }
};

switchScene(scenes[0]); //запуск стартовой сцены

// Переключатель этажей карты
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
}}); }

floorBtns.forEach(function(btn) {
btn.addEventListener('click', function (e) {
e.preventDefault();         
showFloor(this.dataset.floor);
});
});

showFloor('1'); //При старте отображается 1-ый этаж
})();

    // Кнопка "Домашняя страница"
    (function initHomeButton() {
        var homeBtn = document.getElementById('sceneHome');
        if (!homeBtn) return;

        homeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // 1. Показываем стартовый экран обратно
            var intro = document.getElementById('intro-screen');
            if (intro) {
                intro.classList.remove('fade-out'); // Убираем скрытие → обложка плавно всплывает
            }

            // 2. Глушим текущий аудиогид, чтобы звук не накладывался на стартовое окно
            if (gAudio) {
                gAudio.pause();
                gAudio = null;
                // Сбрасываем визуальное состояние кнопки аудио, если она есть
                var audioBtn = document.getElementById('audioBtn');
                if (audioBtn) audioBtn.classList.remove('enabled');
            }

            // 3. Закрываем боковое меню навигации, если оно было открыто
            var sceneList = document.getElementById('sceneList');
            if (sceneList) {
                sceneList.classList.remove('enabled');
            }
        });

    })();

    // Функция запуска тура при клике на обложку
    function startTour() {
        var intro = document.getElementById('intro-screen');
        if (intro) intro.classList.add('fade-out');

        setTimeout(function () {
           switchScene(scenes[0]);
        }, 800);
    }
    // Находим кнопку на стартовой обложке и вешаем на нее клик
    var introBtn = document.querySelector('.intro-button');
    if (introBtn) {
        introBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            startTour(); // Запускаем нашу функцию
        });
    }

    // VR включение - выключение
    var vrBtn = document.getElementById('vrBtn');
    async function enableVR() {
        var sceneId = null;
        sceneId = currentSceneWrapper.data.id; //Определение ID сцены
        var currentImgSrc = 'VRimg/' + sceneId + '.jpg';  //Путь к панораме
        var panoEl = document.getElementById('pano');
        if (panoEl) panoEl.style.display = 'none'; //скрыть оригиналььное окно Marzipano
        // В VR-контейнер собирается сцена с нужной картинкой
        var vrContainer = document.getElementById('vr-container');
        if (vrContainer) {
            vrContainer.style.display = 'block';

            vrContainer.innerHTML = `
                <span id="close-vr-btn">Выйти из VR</span> 
                <a-scene webxr="optionalFeatures: squeezedetect, hit-test" embedded style="height: 100vh; width: 100vw;">
                <a-sky src="${currentImgSrc}" rotation="0 -90 0"></a-sky>
                <a-entity camera look-controls>
                <a-cursor fuse="true" fuse-timeout="1200" color="white"></a-cursor>
                </a-entity> </a-scene>`;
            // Логика кнопки выхода
            var closeBtn = document.getElementById('close-vr-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    vrContainer.innerHTML = ''; //очистить VR-сцену
                    vrContainer.style.display = 'none'; //скрыть VR-сцену
                    if (panoEl) { // Возврат Marzipano
                        panoEl.style.display = 'block';
    }}); } } }
    //Кнопка включения VR сцены
    if (vrBtn) {
        vrBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        e.stopPropagation();
        await enableVR();
        });
    }
    //Срабатывает после полной загрузки компонентов.
    window.onload = function () {
        setTimeout(function () {
            var loader = document.getElementById("preloader");
            if (loader) { loader.style.display = "none"; }
        }, 400);
    };

})();
