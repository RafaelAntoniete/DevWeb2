namespace Ex04 {
    const nome: string = "Rafael";
    const hora: number = 18;

    if(hora >= 0 && hora <= 12){
        console.log(`Bom Dia ${nome}`);
    } else if(hora > 12 && hora <= 18){
        console.log(`Boa Tarde ${nome}`);
    } else {
        console.log(`Boa Noite ${nome}`);
    }
}