// --- Datos (sin cambios) ---
    const modelosTipo = ["San Andreas"];
        //const arraySex = ["Masculino", "Femenino", "N/A"];
        //Especial  Pandilla    Zombie  Peaton  Oficio  Policia 
    const modelos = [
        {nombre:"army rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BALLAS1 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BALLAS2 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BALLAS3 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BFORI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BFOST rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BFYBE rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BFYBU rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BFYPRO rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BFYRI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},

        {nombre:"BFYST rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"BIKERA rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BIKERB rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOBAR rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOCD rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOCHIL rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMORI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOSEC rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOST rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMOTR1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"BMYAP rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYBAR rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYBE rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYBOUN rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYBU rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYCG rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYCON rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYCR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYDJ rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYDRUG rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"BMYMIB rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYMOUN rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYPIMP rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYPOL1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYPOL2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYRI rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYST rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"BMYTATT rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"COPGRL3 rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CROGRL3 rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Femenino", rig:"ARPFortnite"},

        {nombre:"csher rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"CWFOFR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CWFOHB rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CWFYFR1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CWFYFR2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CWFYHB rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"CWMOFR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"CWMOHB1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"CWMOHB2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"CWMYFR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"CWMYHB1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"CWMYHB2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DNB1 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DNB2 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DNB3 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DNFOLC1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DNFOLC2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DNFYLC rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DNMOLC1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DNMOLC2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"DNMYLC rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"dsher rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DWFOLC rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DWFYLC1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DWFYLC2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"DWMOLC1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DWMOLC2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DWMYLC1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"DWMYLC2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"FAM1 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"FAM2 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"FAM3 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"fbi rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"GANGRL3 rel", tipo:"San Andreas", categoria:"Especial", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"GUNGRL3 rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HECK1 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HECK2 rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HFORI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HFOST rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HFYBE rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},

        {nombre:"HFYPRO rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HFYRI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HFYST rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"HMOGAR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMORI rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMOST rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMYBE rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMYCM rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMYCR rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMYDRUG rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"HMYRI rel", tipo:"San Andreas", categoria:"Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"HMYST rel", tipo:"San Andreas", categoria:"Zombie, Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"laemt1 rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lafd1 rel", tipo:"San Andreas", categoria:"Zombie, Oficio", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lapd1 rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lapdm1 rel", tipo:"San Andreas", categoria:"Zombie, Policia", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"LSV1 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"LSV2 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"LSV3 rel", tipo:"San Andreas", categoria:"Zombie, Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lvemt1 rel", tipo:"San Andreas", categoria:"Oficio", sexo:"Masculino", rig:"ARPFortnite"},




        

    ];
        /*for (let i = 1; i <= 50; i++) {
            let tipo, sexoDeterminado, categoriaEjemplo;
            const tipoIndex = i % modelosTipo.length;
            tipo = modelosTipo[tipoIndex];
            if (i % 3 === 0) sexoDeterminado = "N/A";
            else if (i % 2 === 0) sexoDeterminado = "Masculino";
            else sexoDeterminado = "Femenino";
            const catsBase = ["Aventura", "Acción", "Estrategia", "Puzzle", "Deporte", "Construcción", "Misterio", "Principal", "Secundario", "Jugador"];
            if (i % 4 === 0) categoriaEjemplo = `${catsBase[i%catsBase.length]}, ${catsBase[(i+1)%catsBase.length]}`;
            else if (i % 4 === 1) categoriaEjemplo = catsBase[i%catsBase.length];
            else if (i % 4 === 2) categoriaEjemplo = `${catsBase[i%catsBase.length]}, ${catsBase[(i+2)%catsBase.length]}, ${catsBase[(i+3)%catsBase.length]}`;
            else categoriaEjemplo = "General";
            modelos.push({ nombre: `Personaje${i}`, tipo: tipo, categoria: categoriaEjemplo, sexo: sexoDeterminado, rig: `RigDemo${i % 3}` });
        }*/
