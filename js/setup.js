
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

var PROJECTS = {
    'ppdmt-topo': {
        title: 'PDDMT 22 (Cartas Topográficas)',
        legend: [
            1
        ],
        description: `Atender o PDDMT para cartas topográficas de 1:250.000 e 1:100.000.`,
        lotes: [
            {
                name: 'item87a90',
                subtitle: 'Utilização nos exercícios de adestramento com o RADAR SABER M60 e COAAe Elt. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item87a90-fill',
                        'source': 'item87a90',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item87a90-border',
                        'source': 'item87a90',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item87a90-text',
                        'source': 'item87a90',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ],
                
            },
            {
                name: 'item79a86',
                subtitle: 'Utilização nos exercícios de adestramento com o RADAR SABER M60 e COAAe Elt. Escala 1:250.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52]// northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item79a86-fill',
                        'source': 'item79a86',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item79a86-border',
                        'source': 'item79a86',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item79a86-text',
                        'source': 'item79a86',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item45',
                subtitle: 'Campo Grande/MS. Escala 1:250.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item45-fill',
                        'source': 'item45',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item45-border',
                        'source': 'item45',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item45-text',
                        'source': 'item45',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item26e28',
                subtitle: 'Campo Grande/MS. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item26e28-fill',
                        'source': 'item26e28',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item26e28-border',
                        'source': 'item26e28',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item26e28-text',
                        'source': 'item26e28',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'pddmt-orto': {
        title: 'PDDMT 22 (Cartas Ortoimagens)',
        legend: [
            1
        ],
        description: `Atender o PDDMT para cartas ortoimagens de 1:25.000 e 1:50.000.`,
        lotes: [
            {
                name: 'item-19',
                subtitle: 'Todo o mapa índice que abrange a ARP da 18ªBda Inf Fron (1:25.000)',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-19-fill',
                        'source': 'item-19',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-19-border',
                        'source': 'item-19',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-19-text',
                        'source': 'item-19',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-20',
                subtitle: 'Todo o mapa índice que ABRange a ARP da 18ªBda Inf Fron(1:50.000)',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-20-fill',
                        'source': 'item-20',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-20-border',
                        'source': 'item-20',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-20-text',
                        'source': 'item-20',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-21',
                subtitle: 'MI das áreas dos PEF e da OM',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-21-fill',
                        'source': 'item-21',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-21-border',
                        'source': 'item-21',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-21-text',
                        'source': 'item-21',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-39',
                subtitle: 'Área da realização de Instruções de Batalhão em 2022.',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-39-fill',
                        'source': 'item-39',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-39-border',
                        'source': 'item-39',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-39-text',
                        'source': 'item-39',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-64',
                subtitle: 'Área: Perímetro do 9º Grupamento Logístico.',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-64-fill',
                        'source': 'item-64',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-64-border',
                        'source': 'item-64',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-64-text',
                        'source': 'item-64',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-68',
                subtitle: 'Área de influência/Área de interesse SESI-B – 11º RC Mec.',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-68-fill',
                        'source': 'item-68',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-68-border',
                        'source': 'item-68',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-68-text',
                        'source': 'item-68',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-71',
                subtitle: 'Área utilizada no Exercício de Certificação da 4ª Bda C Mec',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-71-fill',
                        'source': 'item-71',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-71-border',
                        'source': 'item-71',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-71-text',
                        'source': 'item-71',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-72',
                subtitle: 'ARP do 17º RC MEC',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-72-fill',
                        'source': 'item-72',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-72-border',
                        'source': 'item-72',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-72-text',
                        'source': 'item-72',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-73',
                subtitle: 'ARP do PEF Paranhos do 17o RC MEC',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-73-fill',
                        'source': 'item-73',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-73-border',
                        'source': 'item-73',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-73-text',
                        'source': 'item-73',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-254',
                subtitle: 'Produtos da Região de Formosa',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-254-fill',
                        'source': 'item-254',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-254-border',
                        'source': 'item-254',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-254-text',
                        'source': 'item-254',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-243a249',
                subtitle: 'Área da SASI-III',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-243a249-fill',
                        'source': 'item-243a249',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-243a249-border',
                        'source': 'item-243a249',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-243a249-text',
                        'source': 'item-243a249',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            },
            {
                name: 'item-256a270',
                subtitle: 'Área de Adestramento do 36º BI Mec “Córrego do Cravo”',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item-256a270-fill',
                        'source': 'item-256a270',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item-243a249-border',
                        'source': 'item-256a270',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item-256a270-text',
                        'source': 'item-256a270',
                        "type": "symbol",
                        "maxzoom": 10,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    }
}
