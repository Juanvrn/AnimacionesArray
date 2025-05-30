// --- Datos (sin cambios) ---
    const modelosTipo = ["San Andreas", "Minecraft", "Otros"];
        //const arraySex = ["Masculino", "Femenino", "N/A"];
    const modelos = [
        {nombre:"CJ", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Sweet", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Ryder", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Smoke", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Ballas1", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Ballas2", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Ballas3", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"bfori", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"bfyri", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"bmobar", tipo:"San Andreas", categoria:"Trabajador, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"bmochil", tipo:"San Andreas", categoria:"Trabajador, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"bmycr", tipo:"San Andreas", categoria:"Peaton, Trabajador, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"bmydj", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"cwmyhb1", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"dnfolc2", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"Fam1", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Fam2", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Fam3", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"gangrl3", tipo:"San Andreas", categoria:"Especial", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"lapd1", tipo:"San Andreas", categoria:"Trabajador, Policia, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lsv1", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lsv2", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"lsv3", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"maccer", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"male01", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"ogloc", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"sfr1", tipo:"San Andreas", categoria:"Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"sfr2", tipo:"San Andreas", categoria:"Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"sfr3", tipo:"San Andreas", categoria:"Pandilla", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"Smokev", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"sofost", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"somyri", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"swfost", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"swmotr4", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"swmotr5", tipo:"San Andreas", categoria:"Peaton, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"vla1", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"vla2", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"vla3", tipo:"San Andreas", categoria:"Pandilla, Zombie", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"wfypro", tipo:"San Andreas", categoria:"Trabajador, Zombie", sexo:"Femenino", rig:"ARPFortnite"},
        {nombre:"wmyst", tipo:"San Andreas", categoria:"Peaton", sexo:"Masculino", rig:"ARPFortnite"},
        {nombre:"woozie", tipo:"San Andreas", categoria:"Especial", sexo:"Masculino", rig:"ARPFortnite"},

        {nombre:"MC Araujo Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Balla Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC San Andreas", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Creeeper Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Mob", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Esqueleto Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Mob", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Iniesta Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Lamine Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Mbappe Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Neymar Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Pele Barcelona", tipo:"Minecraft", categoria:"MC Futbolista", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Player Barcelona", tipo:"Minecraft", categoria:"MC Futbolista", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Ronaldhino Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Xavi Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
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
