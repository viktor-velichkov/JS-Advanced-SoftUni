function sum(N,M) {
    let sum = 0;
    for (let i=Number(N); i<=Number(M); i++) {
        sum+=i;
    }

    console.log(sum);
}

sum('1','5');
sum('10','15');
sum('2','6');
