namespace exemplo1 {
    // DO / WHILE
    let num: number = 18;
    let i: number = 0;
    do {
        console.log(i)
        i++; // i++ = i + 1
        num = i == 11 ? 19 : 18
    } while (num <= 18);

    // WHILE
    while(i <= 20) {
        //console.log("entrou no WHILE")
        console.log(i)
        i++
    }

    for(i = 21; i <= 30; i++){
        console.log(i)
    }

}