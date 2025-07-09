const menuData = [
    {
        label: "Animaciones",
        type: "dropdown",
        children: [
            { label: "ARPFortnite", type: "iframeLink", link: "arpfortnite.html" },
            { label: "Minecraft", type: "iframeLink", link: "animminecraft.html" },
            { label: "MinecraftMobs", type: "iframeLink", link: "animmobs.html" },
        ]
    },
    { label: "Modelos", type: "iframeLink", link: "modelos.html" },
    // CAMBIO AQUÍ para que "Modelos" y "Audios" también usen el iframe:   
    { label: "Prefab", type: "dropdown", children: [
        { label: "Objetos", type: "iframeLink", link: "objetos.html" },
        { label: "Vehiculos", type: "iframeLink", link: "vehiculos.html" },
        { label: "Escenas", type:"iframeLink", link:"escenas.html"}
    ] 
    },
    { label: "Audios", type: "iframeLink", link: "audios.html" }
];
