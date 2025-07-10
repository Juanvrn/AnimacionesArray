// Datos de los paisajes por ubicación con estructura anidada para el menú
// 'images' ahora es un número que indica la cantidad de imágenes para esa categoría.
const menuData = [
    {
        id: 'all',
        name: 'Todas las escenas',
        images: 0, // Se llenará dinámicamente con la suma total
        type: 'category'
    },
    {
        id: 'GTASA',
        name: 'San Andreas',
        type: 'group',
        subcategories: [
            {
                id: 'Ciudades',
                name: 'Ciudades',
                type: 'group',
                subcategories:[
                    {id:"Country",name:"Country",type:"group",subcategories:[
                        {id: "countN2",name: "countN2",type: "category",images: 4},
                        {id: "countryE",name: "countryE",type: "category",images: 4},
                        {id: "countryN",name: "countryN",type: "category",images: 4},
                        {id: "countrys",name: "countrys",type: "category",images: 4},
                        {id: "countryW",name: "countryW",type: "category",images: 4},
                    ]},
                    {id:"LA",name:"LA",type:"group",subcategories:[
                        {id: "LAe",name: "LAe",type: "category",images: 4},
                        {id: "LAe2",name: "LAe2",type: "category",images: 4},
                        {id: "LAhills",name: "LAhills",type: "category",images: 4},
                        {id: "LAn",name: "LAn",type: "category",images: 4},
                        {id: "LAn2",name: "LAn2",type: "category",images: 4},
                        {id: "LAs",name: "LAs",type: "category",images: 4},
                        {id: "LAs2",name: "LAs2",type: "category",images: 4},
                        {id: "LAw",name: "LAw",type: "category",images: 4},
                        {id: "LAw2",name: "LAw2",type: "category",images: 4},
                        {id: "LAwn",name: "LAwn",type: "category",images: 4},
                    ]},
                    {id:"SF",name:"SF",type:"group",subcategories:[
                        {id: "SFe",name: "SFe",type: "category",images: 4},
                        {id: "SFn",name: "SFn",type: "category",images: 4},
                        {id: "SFs",name: "SFs",type: "category",images: 4},
                        {id: "SFse",name: "SFse",type: "category",images: 4},
                        {id: "SFw",name: "SFw",type: "category",images: 4},
                    ]},
                    {id:"vegas",name:"vegas",type:"group",subcategories:[
                        {id: "vegasE",name: "vegasE",type: "category",images: 4},
                        {id: "vegasN",name: "vegasN",type: "category",images: 4},
                        {id: "vegasS",name: "vegasS",type: "category",images: 4},
                        {id: "vegasW",name: "vegasW",type: "category",images: 4},
                    ]},
                ]
            },
            {
                id: "Interiores",
                name : "Interiores",
                type : "group",
                subcategories : [
                    {id:"ComisariaLS",name:"Comisaria LS",type:"category",images:4},
                    {id:"Pizzeria",name:"Pizzeria",type:"category",images:4},
                    {id:"Tienda Donuts",name:"Tienda Donuts",type:"category",images:4},
                    {id:"Laboratorio",name:"Laboratorio",type:"category",images:4},
                    {id:"Bar",name:"Bar",type:"category",images:4},
                ]
            },
        ]
    },
    {
        id: "Mods",
        name: "Mods",
        type : "group",
        subcategories :[
            {id:"YouAreHere",name: "You are here", type:"category",images:4},
            {id:"Bob-Sponja",name: "Bob Sponja", type:"group", subcategories:[
                {id:"Fondo de bikini", name:"Fondo de Bikini", type:"category", images:4},
                {id:"Crustaseo", name:"Crustaseo", type:"category", images:4},
                {id:"Bob Sponja", name:"Bob Sponja", type:"category", images:4},
                {id:"Calamardo", name:"Calamardo", type:"category", images:3},
                {id:"Patricio", name:"Patricio", type:"category", images:1},
                {id:"Plankton", name:"Plankton", type:"category", images:2},
            ]},
        ]
    }
];
