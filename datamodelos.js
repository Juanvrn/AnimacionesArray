// --- Datos (sin cambios) ---
    const modelosTipo = ["San Andreas", "Minecraft", "MinecraftMobs", "Otros"];
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

        {nombre:"MC Skeleton", tipo:"MinecraftMobs", categoria:"", sexo:"Masculino", rig:"MCMob"},
        {nombre:"MC WitherSkeleton", tipo:"MinecraftMobs", categoria:"", sexo:"Masculino", rig:"MCMob"},
        {nombre:"MC Zombie", tipo:"MinecraftMobs", categoria:"", sexo:"Masculino", rig:"MCMob"},

        {nombre:"MC Araujo Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Balla Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC San Andreas", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Creeeper Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Mob", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Esqueleto Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Mob", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Iniesta Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Lamine Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Mbappe Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Neymar Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Pele Barcelona", tipo:"Minecraft", categoria:"MC Futbolista", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Player Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Player", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Ronaldhino Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Xavi Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Messi Barcelona", tipo:"Minecraft", categoria:"MC Futbolista, MC Barcelona", sexo:"Masculino", rig:"MCprep"},

        {nombre:"MC Bellingham Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Cr7 Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Endrick Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Kaka Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Kroos Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Mbappe Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Modric Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Rodrigo Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Rudiger Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Vinicius Real Madrid", tipo:"Minecraft", categoria:"MC Futbolista, MC Real Madrid", sexo:"Masculino", rig:"MCprep"},

        {nombre:"MC David Silva Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Sergio Aguero Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Player 3 Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City, MC Player", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Player 2 Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City, MC Player", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Player 1 Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City, MC Player", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Julian Alvarez Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Jason Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Halland Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Gundogan Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Foden Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
        {nombre:"MC Balotelli Manchester City", tipo:"Minecraft", categoria:"MC Futbolista, MC Manchester City", sexo:"Masculino", rig:"MCprep"},
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
