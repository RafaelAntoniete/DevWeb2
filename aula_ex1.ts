namespace Media_Ponderada{
    let trabalho, prova, exame: number;
    trabalho = 10;
    prova = 8;
    exame = 8;

    const peso1: number = 2, peso2: number = 3, peso3: number = 5;
    

    let mediaPonderada: number;
    mediaPonderada = (trabalho*peso1 + prova*peso2 + exame*peso3) / (peso1 + peso2 + peso3)

    let conceito = '';

    if (mediaPonderada >= 8 && mediaPonderada <= 10) {
        conceito = 'A';
    } else if (mediaPonderada >= 7 && mediaPonderada < 8) {
        conceito = 'B';
    } else if (mediaPonderada >= 6 && mediaPonderada < 7) {
        conceito = 'C';
    } else if (mediaPonderada >= 5 && mediaPonderada < 6) {
        conceito = 'D';
    } else if (mediaPonderada >= 0 && mediaPonderada < 5) {
        conceito = 'E';
    }

    console.log(`A média Ponderada do aluno é: ${mediaPonderada}. seguinto o conceito: ${conceito}`);
}