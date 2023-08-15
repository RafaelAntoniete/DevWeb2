namespace ex02 {
    let nota1, nota2, nota3: number;
    nota1 = 1;
    nota2 = 2;
    nota3 = 5;

    let result: number;
    result = (nota1 + nota2 + nota3) / 3

     if (result >= 7) {
        console.log(`Parabéns você foi aprovado com a média ${result.toFixed(2)} :).`)
     } else if (result >= 3) {
        console.log(`Infelizmente você ficou de recuperação, pois sua média é ${result.toFixed(2)} :/.`)
     } else {
        console.log(`Sinto muito mas você foi reprovado, pois sua média é ${result.toFixed(2)} ;-;.`)
     } 
} 


