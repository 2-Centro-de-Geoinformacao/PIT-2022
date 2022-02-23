
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
    'PDDMT 22 (Cartas Topográficas)': {
        title: 'PDDMT 22 (Cartas Topográficas)',
        legend: [
            1
        ],
        description: `Atender o PDDMT para cartas topográficas de 1:250.000 e 1:100.000.`,
        lotes: [
            {
                name: 'Utilização nos exercícios de adestramento com o RADAR SABER M60 e COAAe Elt.',
                subtitle: 'Escala 1:100.000',
                zoom: [
                    [-59.13, -26.02], // southwestern corner of the bounds
                    [-48.58, -17.52] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'Item87a90-fill',
                        'source': 'Item87a90',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'Item87a90-border',
                        'source': 'Item87a90',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'Item87a90-text',
                        'source': 'Item87a90',
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
                name: 'Utilização nos exercícios de adestramento com o RADAR SABER M60 e COAAe Elt.',
                subtitle: 'Escala 1:250.000',
                zoom: [
                    [-54.60516441090726, -31.59015763447726], // southwestern corner of the bounds
                    [-50.14483553439275, -22.90972914019692] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'Item79a86-fill',
                        'source': 'Item79a86',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'Item79a86-border',
                        'source': 'Item79a86',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'Item79a86-text',
                        'source': 'Item79a86',
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
                name: 'Campo Grande/MS.',
                subtitle: 'Escala 1:250.000',
                zoom: [
                    [-54.60516441090726, -31.59015763447726], // southwestern corner of the bounds
                    [-50.14483553439275, -22.90972914019692] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'Item45-fill',
                        'source': 'Item45',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'Item45-border',
                        'source': 'Item45',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'Item45-text',
                        'source': 'Item45',
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
                name: 'Campo Grande/MS.',
                subtitle: 'Escala 1:100.000',
                zoom: [
                    [-54.60516441090726, -31.59015763447726], // southwestern corner of the bounds
                    [-50.14483553439275, -22.90972914019692] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'Item26e28-fill',
                        'source': 'Item26e28',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'Item26e28-border',
                        'source': 'Item26e28',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'Item26e28-text',
                        'source': 'Item26e28',
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
    'PDDMT 22 (Cartas Ortoimagens)': {
        title: 'PDDMT 22 (Cartas Ortoimagens)',
        legend: [
            1
        ],
        description: `Atender o PDDMT para cartas ortoimagens de 1:25.000 e 1:50.000.`,
        lotes: [
            {
                name: 'Todo o mapa índice que ABRange a ARP da 18ªBda Inf Fron (ao menosa Fx Fron que ABRangea ARP)ARP',
                subtitle: '',
                zoom: [
                    [-58.999999898, -32.999999850000002], // southwestern corner of the bounds
                    [-52.0000001041, -27.499999969] // northeastern corner of the bounds
                ],
                styles: [
                    {
                        'id': 'Item_19-fill',
                        'source': 'Item_19',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'Item_19-border',
                        'source': 'Item_19',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'Item_19-text',
                        'source': 'Item_19',
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
