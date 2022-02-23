
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
                name: 'item_19',
                subtitle: 'Todo o mapa índice que ABRange a ARP da 18ªBda Inf Fron (ao menosa Fx Fron que ABRange ARP) (1:25.000)',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_19-fill',
                        'source': 'item_19',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_19-border',
                        'source': 'item_19',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_19-text',
                        'source': 'item_19',
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
                name: 'item_20',
                subtitle: 'Todo o mapa índice que ABRange a ARP da 18ªBda Inf Fron (ao menosa Fx Fron que ABRange ARP) (1:50.000)',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_20-fill',
                        'source': 'item20',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_20-border',
                        'source': 'item20',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_20-text',
                        'source': 'item20',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_21',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_21-fill',
                        'source': 'item_21',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_21-border',
                        'source': 'item21',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_21-text',
                        'source': 'item_21',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_39',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_39-fill',
                        'source': 'item_39',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_39-border',
                        'source': 'item_39',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_39-text',
                        'source': 'item_39',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_64',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_64-fill',
                        'source': 'item_64',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_64-border',
                        'source': 'item_64',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_64-text',
                        'source': 'item_64',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_68',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_68-fill',
                        'source': 'item_68',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_68-border',
                        'source': 'item_68',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_68-text',
                        'source': 'item_68',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_71',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_71-fill',
                        'source': 'item_71',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_71-border',
                        'source': 'item_71',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_71-text',
                        'source': 'item_71',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_72',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_72-fill',
                        'source': 'item_72',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_72-border',
                        'source': 'item_72',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_72-text',
                        'source': 'item_72',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_73',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_73-fill',
                        'source': 'item_73',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_73-border',
                        'source': 'item_73',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_73-text',
                        'source': 'item_73',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_243a249',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_243a249-fill',
                        'source': 'item21',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_243a249-border',
                        'source': 'item21',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_243a249-text',
                        'source': 'item21',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_254',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_254-fill',
                        'source': 'item_254',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_254-border',
                        'source': 'item_254',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_254-text',
                        'source': 'item_254',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 6.14,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    },
            {
                name: 'item_256a270',
                subtitle: 'MI das áreas dos PEF e da OM. Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'item_256a270-fill',
                        'source': 'item_256a270',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'item_256a270-border',
                        'source': 'item_256a270',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'item_256a270-text',
                        'source': 'item_256a270',
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
}
