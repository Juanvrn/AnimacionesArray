const menuData = [
    {
        label: "Animaciones",
        type: "dropdown",
        children: [
            { label: "ARPFortnite", type: "iframeLink", link: "arpfortnite.html" },
            { label: "GTAsa", type: "iframeLink", link: "animgtasa.html" },
            { label: "Minecraft", type: "iframeLink", link: "animminecraft.html" },
            { label: "MinecraftMobs", type: "iframeLink", link: "animmobs.html" },
        ]
    },
    {
        label: "Modelos", type: "dropdown", children: [
            { label: "RigFull", type: "iframeLink", link: "modelos.html" },
            { label: "Relleno", type: "iframeLink", link: "modelosRelleno.html" },
        ]
    },
    // CAMBIO AQUÍ para que "Modelos" y "Audios" también usen el iframe:   
    {
        label: "Prefab", type: "dropdown", children: [
            { label: "Objetos", type: "iframeLink", link: "objetos.html" },
            { label: "Vehiculos", type: "iframeLink", link: "vehiculos.html" },
            { label: "Escenas", type: "iframeLink", link: "escenas.html" }
        ]
    },
    {
        label: "Sonidos", type: "dropdown", children: [
            { label: "GTASA", type: "iframeLink", link: "audiogta.html" },
            { label: "GTASA Modelos", type: "iframeLink", link: "audiomodelo.html" },
            { label: "GTASA Conversacion", type: "iframeLink", link: "audioConversacion.html" },
        ]
    }
];
