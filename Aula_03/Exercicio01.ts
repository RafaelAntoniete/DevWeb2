/* 1. Escreva um programa TypeScript que imprima todos os
núeros primos de 1 a 53 usando a função **`while`**. */


namespace exercicio1 {
    let index: number = 2;
    let aux: number = 1;
    let count: number = 0;

    while(index <= 53){
        count = 0;
        aux = 1;
        
// Lógica para descobrir o número primo

        while(aux <= index){
            if(index % aux == 0){
                count++
            }
            if(count > 2){
                break
            }
            aux++
        }
         if(count <= 2) {
            console.log(index)
        }
        index++
    }
}