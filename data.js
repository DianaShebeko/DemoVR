var APP_DATA = {
  "scenes": [
    {
        "id": "0-image",
        "name": "Пролог",
        "audioGuide": "audio/prolog.mp3",
          "sceneInfo": {
              "title": "Виртуальная экскурсия по Чесменскому дворцу",
              "content": [
                  {
                      "type": "text",
                      "text": TXTS.prolog
                  }

              ]
          },
        "levels": [
            {
                "tileSize": 256,
                "size": 256,
                "fallbackOnly": true
            },
            {
                "tileSize": 512,
                "size": 512
            },
            {
                "tileSize": 512,
                "size": 1024
            }
        ],
        "faceSize": 1024,
        "initialViewParameters": {
            "yaw": -2.1163153196731663,
            "pitch": -0.025189127392902577,
            "fov": 1.391813623840451
        },
          "linkHotspots": [
              {
                  "yaw": -2.0,
                  "pitch": 0.11827129524185054,
                  "rotation": 12.566370614359176,
                  "target": "0--"
              }
          ],
        "infoHotspots": []
    },
        {
            "id": "0--",
            "name": "Исторический вход",
            "audioGuide": "audio/0--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.istiricheskiyVhod
                    },
                    {
                        "type": "image",
                        "src": "content/0--/Ekaterina.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Портрет Екатерины II. Худ. И.С. Саблуков. 1770-е гг. Нижегородский художественный музей"
                    },
                    {
                        "type": "image",
                        "src": "content/0--/Kulibin_I_P.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Павел Веденецкий. Портрет Ивана Петровича Кулибина. 1818. Государственный Эрмитаж"
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.05570199740407311,
                "pitch": -0.09210531334238858,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.677162097301566,
                    "pitch": 0.10541109816073657,
                    "rotation": 0,
                    "target": "1--"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "1--",
            "name": "Главный вход",
            "audioGuide": "audio/1--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.glavniyVhod
                    },
                    {
                        "type": "image",
                        "src": "content/1--/IMG_3.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Аллея к замку в стиле английских поместий"
                    },
                    {
                        "type": "image",
                        "src": "content/1--/IMG_2.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Эскиз Чесменского дворца. Ю.М. Фельтен"
                    },
                    {
                        "type": "image",
                        "src": "content/1--/IMG_1.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Планы замков (слева - замок Лонгфорд, справа - Чесменский дворец)"
                    }

                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.11883092779535964,
                "pitch": -0.04861113759736746,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 0.20654018072955829,
                    "pitch": 0.08941640565605624,
                    "rotation": 0,
                    "target": "2--"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "2--",
            "name": "Главная лестница",
            "audioGuide": "audio/2--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.lestnica
                    },
                    {
                        "type": "image",
                        "src": "content/0--/Kulibin_I_P.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Павел Веденецкий. Портрет Ивана Петровича Кулибина. 1818. Государственный Эрмитаж"
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.08886709893697642,
                "pitch": 0.01417152537791111,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 0.3709182028492233,
                    "pitch": 0.25934059555380706,
                    "rotation": 0.7853981633974483,
                    "target": "3-----2-"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "3-----2-",
            "name": "Главная лестница - 2 этаж",
            "audioGuide": "audio/3-----2-.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -2.1120292573259007,
                "pitch": -0.022412952895733085,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -1.878579775512124,
                    "pitch": 0.29830232980075877,
                    "rotation": 6.283185307179586,
                    "target": "4---1"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -2.7890039565628335,
                    "pitch": -0.101153581700963,
                    "title": "Чесменский дворец",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.LESTNICA2
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                }
            ]
        },
        {
            "id": "4---1",
            "name": "Читальный зал (1)",
            "audioGuide": "audio/4---1.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.ChitZ
                    },
                    {
                        "type": "image",
                        "src": "content/4---1/IMG_E2507.JPG"
                    },
                    {
                        "type": "note",
                        "text": "Портреты английского королевского дома: короля Георга, королевы Софии-Шарлотты, Георга, принца Уэльского, и его брата Федерика. Худ. Н. Данс. 1774-1777 гг. Государственный эрмитаж"
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 1.4044993463922175,
                "pitch": 0.056178156543049695,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.332427687653004,
                    "pitch": 0.2605667619947454,
                    "rotation": 0,
                    "target": "5---2"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.6202129262496836,
                    "pitch": -0.2433396083283519,
                    "title": "Чесменский ансамбль",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ1I1
                        },
                        {
                            "type": "image",
                            "images": ["content/4---1/Ansambl.jpg", "content/4---1/Ansambl_2.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "1 - Чесменский дворец. 2 - Чесменская церковь"
                        },
                    ]
                },
                {
                    "yaw": -0.22570344675832033,
                    "pitch": -0.28677371736958435,
                    "title": "Архитектор Юрий Матвеевич Фельтен",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ1I2
                        },
                        {
                            "type": "image",
                            "images": ["content/4---1/Felten.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Ю.М. Фельтен. Худ. К.Л. Христинек. 1765 г. Государственный Русский музей"
                        }
                    ]
                },
                {
                    "yaw": -1.1713061630095858,
                    "pitch": -0.22795474632023982,
                    "title": "Императрица Екатерина II",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ1I3
                        },
                        {
                            "type": "image",
                            "images": ["content/4---1/Ekaterina2.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Выезд Екатерины II на соколиную охоту. Худ. В.А. Серов."
                        },
                        {
                            "type": "image",
                            "images": ["content/4---1/Ekaterina1.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Автограф Екатерины II"
                        }

                    ]
                },
                {
                    "yaw": 2.6915515524187654,
                    "pitch": -0.30895803830891033,
                    "title": "Чесменская военная богадельня",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ1I4
                        },
                        {
                            "type": "image",
                            "images": ["content/4---1/Bogadelnya_12.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "План реконструкции Чесменского дворца. Арх. А.Е. Штауберт"
                        }
                    ]
                }
            ]
        },
        {
            "id": "5---2",
            "name": "Читальный зал (2)",
            "audioGuide": "audio/5---2.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.23200015849720756,
                "pitch": 0.028729231690995505,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.5968046362028154,
                    "pitch": 0.2012906502813312,
                    "rotation": 0,
                    "target": "6---3"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 2.75592941636235,
                    "pitch": -0.29458192783864057,
                    "title": "Орден Святого Георгия",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ2I1
                        },
                        {
                            "type": "image",
                            "images": ["content/5---2/noteInfo11.jpg"],
                        }
                    ]
                },
                {
                    "yaw": 0.2662901611038322,
                    "pitch": -0.2563321796969369,
                    "title": "Русско-Турецкая война 1768-1774 годов",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ2I2
                        },
                        {
                            "type": "image",
                            "images": ["content/5---2/IMG_E2546.JPG"]
                        },
                        {
                            "type": "note",
                            "text": "Карта Европы 1770 г."
                        },
                        {
                            "type": "image",
                            "images": ["content/5---2/IMG_E2548.JPG"]
                        },
                        {
                            "type": "note",
                            "text": "Итоги Первой русско-турецкой войны"
                        },
                        {
                            "type": "image",
                            "images": ["content/5---2/IMG_E2547.JPG"]
                        },
                        {
                            "type": "note",
                            "text": "Маршрут Первой Архипелагской экспедиции"
                        }
                    ]
                },
                {
                    "yaw": 0.8643229251522584,
                    "pitch": -0.19300853476285873,
                    "title": "Чесменская победа",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ2I3
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/5---2/IMG_E2550.JPG"
                            ],
                        },
                        {
                            "type": "note",
                            "text": "Гюйс"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/5---2/IMG_E2552.JPG"
                            ],
                        },
                        {
                            "type": "note",
                            "text": "Экспозиция музея Чесменской битвы"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/5---2/IMG_E2553.JPG"
                            ],
                        },
                        {
                            "type": "note",
                            "text": "Чесменский зал. Большой Петергофский дворец"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/5---2/IMG_E2554.JPG"
                            ],
                        },
                        {
                            "type": "note",
                            "text": "Памятная настольная медаль с планом Чесменского сражения"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/5---2/IMG_E2555.JPG"
                            ],
                        },
                        {
                            "type": "note",
                            "text": "План сражения в Чесменской бухте"
                        },
                    ]
                }
            ]
        },
        {
            "id": "6---3",
            "name": "Читальный зал (3)",
            "audioGuide": "audio/6---3.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 1.4292758663279832,
                    "pitch": 0.2316964152237624,
                    "rotation": 0,
                    "target": "7-"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -2.8230326855011434,
                    "pitch": -0.2624448451095418,
                    "title": "Сервиз с зеленой лягушкой",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ3I1
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/6---3/Serviz_1.jpg",
                                "content/6---3/Serviz_2.jpg",
                                "content/6---3/Serviz_3.jpg",
                                "content/6---3/Serviz_4.jpg"                            ],
                        }
                    ]
                },
                {
                    "yaw": 2.0576057385071955,
                    "pitch": -0.24920156657447912,
                    "title": "'Достопамятности' Чесменского дворца",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ3I2
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                },
                {
                    "yaw": -0.08262489196043354,
                    "pitch": -0.3234316399584074,
                    "title": "Граф А.Г. Орлов-Чесменский",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ3I3
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/6---3/Orlov.jpg"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Портрет графа А.Г. Орлова-Чесменского. Неизвестный художник. 1787 г. Государственный эрмитаж"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/6---3/Orlov_77.jpg"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "А.Г. Орлов-Чесменский на Свирепом орловской верховой породы. Худ. П.Д. Невзоров"
                        },
                        {
                            "type": "image",
                            "images": [
                                "content/6---3/Orlov_8.jpg"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Порода кур орловская-ситцевая"
                        }

                    ]
                },
                {
                    "yaw": 0.7783918508995011,
                    "pitch": -0.25172246268246035,
                    "title": "Герои Чесменской битвы",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.ChZ3I4
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                }
            ]
        },
        {
            "id": "7-",
            "name": "Холл",
            "audioGuide": "audio/7-.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.VostB
                    },
                    {
                        "type": "image",
                        "src": "content/7-/IMG_E2498.JPG"
                    },
                    {
                        "type": "note",
                        "text": "Екатерина II в образе богини мудрости Минервы. Ск. М.И. Козловский. 1785 г. Государственный Русский музей"
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.5750235509072255,
                "pitch": -0.06939136119241596,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -1.3783574382320953,
                    "pitch": 0.1649805822582735,
                    "rotation": 0,
                    "target": "8--"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.832139260413765,
                    "pitch": -0.23893132195425437,
                    "title": "История Чесменского дворца",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.VBashnia1
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                },
                {
                    "yaw": 0.34827327237748484,
                    "pitch": -0.21233828262869459,
                    "title": "История Чесменского дворца",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.VBashnia2
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                },
                {
                    "yaw": 1.3022132495444279,
                    "pitch": -0.2136684905032311,
                    "title": "История Чесменского дворца",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.VBashnia3
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                },
                {
                    "yaw": -3.1072497004235533,
                    "pitch": -0.21667627191147076,
                    "title": "История Чесменской победы",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.VBashnia4
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                },
                {
                    "yaw": -2.0639343398552903,
                    "pitch": -0.2563546122645448,
                    "title": "История Чесменской победы",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.VBashnia5
                        },
                        {
                            "type": "image",
                            "images": ["content/3-----2-/noteInfo11.jpg", "content/3-----2-/noteInfo12.jpg"],
                        }
                    ]
                }
            ]
        },
        {
            "id": "8--",
            "name": "Георгиевский зал",
            "audioGuide": "audio/8--0.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.GeorgZ
                    },
                    {
                        "type": "image",
                        "src": "content/8--/IMG_E2500.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Тронный зал Большого Петергофского дворца"
                    },
                    {
                        "type": "image",
                        "src": "content/8--/IMG_E25000.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Рисунок паркета в Тронном зале Петергофского дворца"
                    },
                    {
                        "type": "image",
                        "src": "content/8--/IMG_3.jpg"
                    },
                    {
                        "type": "note",
                        "text": "Чесменская чернильница. Государственный Эрмитаж"
                    },
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.8334131027094234,
                "pitch": -0.45684401318527357,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -0.8150617520198757,
                    "pitch": 0.25155084639913206,
                    "rotation": 0,
                    "target": "9-_1"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -2.990210518800705,
                    "pitch": -0.09826286315023225,
                    "title": "Портрет адмирала Г.А. Спиридова",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/Spiridov.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Портрет адмирала Григория Андреевича Спиридова. Художник А.Г.  2013"
                        }

                    ]
                },
                {
                    "yaw": 1.2048977732143058,
                    "pitch": -0.09347896497178354,
                    "title": "Портрет графа А.Г. Орлова-Чесменского",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/Orlov.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Портрет графа А.Г. Орлова-Чесменского. Художник А.Г. Николаева-Берг. 2013"
                        }

                    ]

                },
                {
                    "yaw": -0.3036003496455102,
                    "pitch": -0.14173745989768882,
                    "title": "Церемония награждения 'Орденом Георгия Победоносца'",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/Kartina2.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Церемония награждения 'Орденом Георгия Победоносца' в Георгиевском зале"
                        }

                    ]
                },
                {
                    "yaw": -1.3946202895268627,
                    "pitch": -0.15173112282149326,
                    "title": "Весть о победе России в Чесменской боталии",
                    "content": [
                        {
                            "type": "text",
                            "text": TXTI.GeorgZPoslanie
                        },

                        {
                            "type": "image",
                            "images": ["content/8--/Kartina1.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Гонец сообщает новость о победе России в Чесменской боталии"
                        }

                    ]
                },
                {
                    "yaw": -0.6343412883796447,
                    "pitch": -1.377791228689233,
                    "title": "Люстра Георгиевского зала",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/Orlov.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Люстра в форме Георгиевского креста. Работа мастеров Санкт- Петербургской художественно - промышленной академии имени А.Л.Штиглица.Символ доблести и высокое художественное мастерство в одном произведении."
                        }

                    ]
                },
                {
                    "yaw": -1.3836025650576396,
                    "pitch": -0.6487272127044896,
                    "title": "Император Петр I Великий (1672 г. - 1725 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245854.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Император Петр I Великий (1672 г. - 1725 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": -1.9332545710799955,
                    "pitch": -0.5406062446092506,
                    "title": "Царь Михаил Романов (1596 г. - 1645 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245844.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Царь Михаил Романов (1596 г. - 1645 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": -2.466692783413979,
                    "pitch": -0.6464131469303087,
                    "title": "Великий князь Иван III Великий (1440 г. - 1505 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245845.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Великий князь Иван III Великий (1440 г. - 1505 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": -3.018341000898676,
                    "pitch": -0.514501799211148,
                    "title": "Князь Дмитрий Донской (1350 г. - 1389 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245846.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Дмитрий Донской (1350 г. - 1389 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 2.743665765448469,
                    "pitch": -0.5587350999155873,
                    "title": "Князь Александр Невский (1221 г. - 1263 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245847.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Александр Невский (1221 г. - 1263 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 2.2058696366921087,
                    "pitch": -0.7440173939879351,
                    "title": "Князь Владимимр Мономах (1053 г. - 1125 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245848.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Владимимр Мономах (1053 г. - 1125 г). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 1.6842194719094623,
                    "pitch": -0.562007505528566,
                    "title": "Князь Ярослав Мудрый (978 г. - 1054 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245849.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Ярослав Мудрый (978 г. - 1054 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 1.190600284078947,
                    "pitch": -0.7207715342309537,
                    "title": "Князь Владимир Красное Солнышко (960 г. - 1015 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245850.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Владимир Красное Солнышко (960 г. - 1015 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 0.6794105384231912,
                    "pitch": -0.5452960408049474,
                    "title": "Княгиня Ольга (890 г. - 969 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245851.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Княгиня Ольга (890 г. - 969 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": 0.19848828106690597,
                    "pitch": -0.7298532713334787,
                    "title": "Князь Олег Вещий (869 г. - 912 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245852.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Князь Олег Вещий (869 г. - 912 г.). Барельеф"
                        }

                    ]
                },
                {
                    "yaw": -0.31481710352123216,
                    "pitch": -0.5689502086645248,
                    "title": "Императрица Елизавета I (1709 г. - 1761 г.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/8--/259300378_457245853.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Императрица Елизавета I (1709 г. - 1761 г.). Барельеф"
                        }

                    ]
                }
            ]
        },
        {
            "id": "9-_1",
            "name": "Георгиевскийзал_1",
            "audioGuide": "audio/9-_1.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.269226320786359,
                "pitch": -0.028143290187953696,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -2.2851713739832675,
                    "pitch": 0.2807069874487702,
                    "rotation": 0.7853981633974483,
                    "target": "10--"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.148785027916281,
                    "pitch": 0.12631851532482763,
                    "title": "Лягушка-хранительница Чесменского дворца",
                    "content": [
                        {
                            "type": "model",
                            "src": "content/9-_1/frog.glb",
                        },
                        {
                            "type": "text",
                            "text": TXTI.Frog,
                        }

                    ]

                },
                {
                    "yaw": 0.10845732514621176,
                    "pitch": -0.5240902477629081,
                    "title": "Портрет императрицы Екатерины II",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/9-_1/Ekaterina.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Портрет императрицы Екатерины II. Художник С.Н. Романова. 2007"
                        }
                    ]
                }
            ]
        },
        {
            "id": "10--",
            "name": "Выставочный зал",
            "audioGuide": "audio/10--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.VistZ
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 1.6484326817794859,
                "pitch": 0.01074767854833425,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -0.6056185712080229,
                    "pitch": 0.30040525438090526,
                    "rotation": 0,
                    "target": "11---1"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "11---1",
            "name": "Выставочный зал (1)",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.04313629227941895,
                "pitch": -0.11171060880096562,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.52841422425639,
                    "pitch": 0.31492736787314257,
                    "rotation": 0,
                    "target": "12---2"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.13628176586096785,
                    "pitch": -0.1784092767134169,
                    "title": "Генерал-лейтенант М.К. Крыжановский",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/11---1/Krizhanovskiy.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Генерал-лейтенант М.К. Крыжановский, первый директор Чесменской военной богадельни (с 1836 по 1839 гг.), комендант Петропавловской крепости (с 1837)."
                        },
                        {
                            "type": "note",
                            "text": "мастерская Д. Доу, Военная галерея Государственного Эрмитажа"
                        },
                    ]
                }
            ]
        },
        {
            "id": "12---2",
            "name": "Выставочный зал (2)",
            "audioGuide": "audio/12---2.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.016178561769812916,
                "pitch": -0.09169627018542847,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.4820676061291502,
                    "pitch": 0.3349323799973938,
                    "rotation": 4.71238898038469,
                    "target": "13---3"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.03856982766612482,
                    "pitch": 0.5083329493056983,
                    "title": "Чесменский сервиз Джошуа Веджвуда",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/12---2/serviz.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Экспонаты «Зелёного лягушачьего сервиза» Wedgwood (1773–1774), созданного для Екатерины II. Тарелки с видами Чесменского дворца, фарфоровые изделия и исторические материалы."
                        },
                        {
                            "type": "text",
                            "text": TXTI.LESTNICA2
                        },
                    ]
                },
                {
                    "yaw": -1.4983054176954251,
                    "pitch": -0.2558775641315414,
                    "title": "Обед инвалидов в столовой зале Чесменской военной богадельни",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/12---2/ObedVeteranov.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Обед инвалидов в столовой зале Чесменской военной богадельни. Г.И. Бортневский, 1859, ГРМ"
                        }
                        ]
                },
                {
                    "yaw": -0.4817133899788111,
                    "pitch": -0.6278107261022328,
                    "title": "Чесменская военная богадельня императора Николая I (1831 - 1919 гг.)",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/12---2/259300378_457245804.jpg",
                                "content/12---2/259300378_457245805.jpg",
                                "content/12---2/259300378_457245806.jpg",
                                "content/12---2/259300378_457245807.jpg",
                                "content/12---2/259300378_457245808.jpg",
                                "content/12---2/259300378_457245809.jpg",
                                "content/12---2/259300378_457245810.jpg"
                            ]
                        }
                        ]
                }
            ]
        },
        {
            "id": "13---3",
            "name": "Выставочный зал (3)",
            "audioGuide": "audio/13---3.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.07983952961250473,
                "pitch": 0.0153508855570621,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.4341000722837078,
                    "pitch": 0.3501828522538002,
                    "rotation": 0,
                    "target": "14---4"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.011188211282943783,
                    "pitch": 0.6211873441471933,
                    "title": "ГУАП: история и современность",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/13---3/Table.jpg",
                            ]
                        }
                    ]
                },
                {
                    "yaw": -0.18811817977407586,
                    "pitch": -0.4888514866061584,
                    "title": "Чесменский ансамбль в предвоенные и военные годы: ЛАДИ, ЛАИ, ЛИАП (1936-1945 гг.)",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/13---3/IMG_E2391.JPG",
                                "content/13---3/IMG_E2392.JPG",
                                "content/13---3/IMG_E2393.JPG",
                                "content/13---3/IMG_E2394.JPG",
                                "content/13---3/IMG_E2395.JPG",
                                "content/13---3/IMG_E2396.JPG",
                                "content/13---3/IMG_E2397.JPG",

                            ]
                        }
                    ]
                },
                {
                    "yaw": -1.0873948974437546,
                    "pitch": -0.3134041043394653,
                    "title": "'Чесменка' - первый в СССР лагерь принудительных работ (1919 - 1922 гг.)",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/13---3/IMG_E2383.JPG",
                                "content/13---3/IMG_E2386.JPG",
                                "content/13---3/IMG_E2387.JPG",
                                "content/13---3/IMG_E2388.JPG",
                                "content/13---3/IMG_E2389.JPG",
                                "content/13---3/IMG_E2390.JPG",

                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "14---4",
            "name": "Выставочный зал (4)",
            "audioGuide": "audio/14---4.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.31732699476023996,
                "pitch": -0.33260252040305005,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.2769736346488578,
                    "pitch": 0.5658956169967873,
                    "rotation": 11.780972450961727,
                    "target": "15---5"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.2532334882127394,
                    "pitch": -0.20898492325655127,
                    "title": "Чесменский дворец - учебный корпус ЛИАП (послевоенные годы)",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/14---4/IMG_E2344.JPG",
                                "content/14---4/IMG_E2345.JPG",
                                "content/14---4/IMG_E2347.JPG",
                                "content/14---4/IMG_E2348.JPG",
                                "content/14---4/IMG_E2349.JPG",
                                "content/14---4/IMG_E2350.JPG",

                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "15---5",
            "name": "Выставочный зал (5)",
            "audioGuide": "audio/15---5.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.06940430137011333,
                "pitch": -0.3634466499086919,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.4703330056422095,
                    "pitch": 0.3798327336651859,
                    "rotation": 5.497787143782138,
                    "target": "16---6"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.1203881425565072,
                    "pitch": -0.11948879068973284,
                    "title": "Чесменский дворец - учебный корпус ЛИАП (1950 - 1970 гг.)",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/15---5/IMG_E2351.JPG",
                                "content/15---5/IMG_E2352.JPG",
                                "content/15---5/IMG_E2353.JPG",
                                "content/15---5/IMG_E2354.JPG",
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "16---6",
            "name": "Выставочный зал (6)",
            "audioGuide": "audio/16---6.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.08659243372260939,
                "pitch": -0.3573069239898583,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -2.969660582801147,
                    "pitch": 0.4173645793326308,
                    "rotation": 10.995574287564278,
                    "target": "17---7"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.1025423212848402,
                    "pitch": -0.28370161779188763,
                    "title": "Чесма. XXI век",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/16---6/IMG_E2356.JPG",
                                "content/16---6/IMG_E2357.JPG",
                                "content/16---6/IMG_E2358.JPG",
                                "content/16---6/IMG_E2359.JPG",

                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "17---7",
            "name": "Выставочный зал (7)",
            "audioGuide": "audio/17---7.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.024137532208429846,
                "pitch": -0.19444455038947872,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.961129312638846,
                    "pitch": 0.22616676554251391,
                    "rotation": 0,
                    "target": "18--"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.007543826530234554,
                    "pitch": 0.4156855276781286,
                    "title": "Чесменский дворец в книгах и документах",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/17---7/Table.jpg",
                            ]
                        }
                    ]
                },
                {
                    "yaw": -0.1869831788577372,
                    "pitch": -0.11166018542737177,
                    "title": "Чесменский дворец - живая история ГУАП",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/17---7/IMG_E2362.JPG",
                                "content/17---7/IMG_E2364.JPG",
                                "content/17---7/IMG_E2365.JPG",
                                "content/17---7/IMG_E2366.JPG",
                                "content/17---7/IMG_E2367.JPG",
                                "content/17---7/IMG_E23688.jpg",
                                "content/17---7/IMG_E2369.JPG",
                                "content/17---7/IMG_E2370.JPG",
                                "content/17---7/IMG_E2372.JPG",
                                "content/17---7/IMG_E2377.JPG",

                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "18--",
            "name": "Екатерининский зал",
            "audioGuide": "audio/18--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.EkatZ
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.01957718791598495,
                "pitch": 0.08631863011735419,
                "fov": 1.391813623840451
            },
            "linkHotspots": [],
            "infoHotspots": []
        },
        {
            "id": "19---2",
            "name": "Екатерининский зал (2)",
            "audioGuide": "audio/19---2.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.16897589236072186,
                "pitch": 0.12537463703230856,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.84578564662828,
                    "pitch": 0.23814451557367988,
                    "rotation": 0,
                    "target": "20---3"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": -0.1444841770907903,
                    "pitch": 0.03958593457256754,
                    "title": "Коллекция главного символа Чесменского дворца",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/19---2/IMG_E2336.JPG"
                            ]
                        }
                    ]
                },
                {
                    "yaw": -1.1678695677757407,
                    "pitch": -0.7781908243949651,
                    "title": "Ночной бой у бухты Чесма в ночь на 26 июня 1770 года",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/19---2/IMG_E2356.JPG"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "20---3",
            "name": "Екатерининский зал (3)",
            "audioGuide": "audio/20---3.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.022280798961627823,
                "pitch": -0.11257723904693151,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": -2.9967592011181647,
                    "pitch": 0.33663901630151827,
                    "rotation": 5.497787143782138,
                    "target": "21---4"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.012474108894442892,
                    "pitch": -0.30647442094943855,
                    "title": "Сервиз с зеленой лягушкой. Копия",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/20---3/IMG_E2340.JPG", 
                                "content/20---3/IMG_E2340.JPG", 
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Копия 'Сервиза с зеленой лягушкой' Веджвуда"
                        },
                    ]
                },
                {
                    "yaw": 1.080450985073039,
                    "pitch": -0.6460536858887007,
                    "title": "Чесменский бой. Начало боя в Хиосском проливе 24 июня 1770 года",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/20---3/IMG_E2336.JPG"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Чесменский бой. Начало боя в Хиосском проливе 24 июня 1770 года. Художник Я.Ф. Хаккерт. 1772"
                        }
                    ]
                }
            ]
        },
        {
            "id": "21---4",
            "name": "Екатерининский зал (4)",
            "audioGuide": "audio/21---4.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.1347307301882239,
                "pitch": -0.27687432630483855,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.84578564662828,
                    "pitch": 0.23814451557367988,
                    "rotation": 0,
                    "target": "22--"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 1.1799142490448808,
                    "pitch": -0.36409003788645933,
                    "title": "Гибель русского корабля 'Святой Естафии'",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/21---4/IMG_E2335.JPG"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Гибель русского корабля 'Святой Естафии'. Художник Я.Ф. Хаккерт. 1771"
                        }
                    ]
                },
                {
                    "yaw": 2.0706913941691063,
                    "pitch": -0.15741514484668606,
                    "title": "Сожжение турецкого флота в бухте Чесма",
                    "content": [
                        {
                            "type": "image",
                            "images": [
                                "content/21---4/IMG_E2334.JPG"
                            ]
                        },
                        {
                            "type": "note",
                            "text": "Сожжение турецкого флота в бухте Чесма. Художник Я.Ф. Хаккерт. 1772"
                        }
                    ]
                }
            ]
        },
        {
            "id": "22--",
            "name": "Обеденный зал",
            "audioGuide": "audio/22--.mp3",
            "sceneInfo": {
                "content": [
                    {
                        "type": "text",
                        "text": TXTS.Stolov
                    }
                ]
            },
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 1.6428904733556244,
                "pitch": -0.040935694818834634,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.6593867125643023,
                    "pitch": 0.0896904140984276,
                    "rotation": 0,
                    "target": "23--"
                }
            ],
            "infoHotspots": [
                {
                    "yaw": 0.020011379869188772,
                    "pitch": -0.2672491934989889,
                    "title": "Обед инвалидов в столовой зале Чесменской военной богадельни",
                    "content": [
                        {
                            "type": "image",
                            "images": ["content/22--/ObedVeteranov.jpg"]
                        },
                        {
                            "type": "note",
                            "text": "Обед инвалидов в столовой зале Чесменской военной богадельни. Г.И. Бортневский, 1859, ГРМ"
                        }
                    ]
                }
            ]
        },
        {
            "id": "23--",
            "name": "Лестничный пролет",
            "audioGuide": "audio/23--.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.7696990723924877,
                "pitch": -0.010596632123315075,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.2946368906727965,
                    "pitch": 0.38487531113251094,
                    "rotation": 0,
                    "target": "24-----2"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "24-----2",
            "name": "Коридор - корпус 2",
            "audioGuide": "audio/24-----2.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 2.798669020196783,
                "pitch": 0.023671192481947045,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 2.7220887090985517,
                    "pitch": -0.01312561340385443,
                    "rotation": 0,
                    "target": "25-----1"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "25-----1",
            "name": "Коридор - Корпус 1",
            "audioGuide": "audio/25-----1.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 0.06184862474078123,
                "pitch": -0.03404343273000876,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 0.05880205356918822,
                    "pitch": -0.01926509853381475,
                    "rotation": 0,
                    "target": "26-----3"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "26-----3",
            "name": "Коридор - Корпус 3",
            "audioGuide": "audio/26-----3.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": 1.4392687171808953,
                "pitch": -0.014025899808970621,
                "fov": 1.391813623840451
            },
            "linkHotspots": [
                {
                    "yaw": 1.1457847132497765,
                    "pitch": 0.18484337530672512,
                    "rotation": 5.497787143782138,
                    "target": "27--"
                }
            ],
            "infoHotspots": []
        },
        {
            "id": "27--",
            "name": "Учебный класс",
            "audioGuide": "audio/27--.mp3",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 1344,
            "initialViewParameters": {
                "yaw": -0.09469339558692091,
                "pitch": 0.02558480926177431,
                "fov": 1.391813623840451
            },
            "linkHotspots": [],
            "infoHotspots": [
                {
                    "yaw": 0.0,
                    "pitch": -0.11827129524185054,
                    "title": "ГУАП! Учись, изобретай, живи!",
                    "content": [
                        {
                            "type": "video",
                            "src": "content/video27/promo.mp4"
                        },
                        {
                            "type": "note",
                            "text": "ГУАП|SUAI (https://rutube.ru/video/2afbb55502eed128c9fa4c3b59ac9aa5/?r=wd)"
                        },
                    ]
                }
            ]
        }
  ],
  "name": "DemoVR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
