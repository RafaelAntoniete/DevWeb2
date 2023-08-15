namespace ex03{
    let nota1, nota2, nota3: number;
    nota1 = 7;
    nota2 = 5;
    nota3 = 4;

    const peso1: number = 2, peso2: number = 2, peso3: number = 2;
    

    let result: number;
    result = (nota1*peso1 + nota2*peso2 + nota3*peso3) / (peso1 + peso2 + peso3)

     if (result >= 7) {
        console.log(`Parabéns você foi aprovado com a média ${result.toFixed(2)}. :)`)
     } else if (result >= 3) {
        console.log(`Infelizmente você ficou de recuperação, pois sua média é ${result.toFixed(2)}. :/`)
     } else {
        console.log(`Sinto muito mas você foi reprovado, pois sua média é ${result.toFixed(2)}. ;-;`)
     } 
}