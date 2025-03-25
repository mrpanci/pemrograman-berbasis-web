function fibonacci(n) {
    let a = 0, b = 1, temp;
    console.log("Deret Fibonacci:");
    console.log(a);
    if (n > 1) console.log(b);

    for (let i = 2; i < n; i++) {
        temp = a + b;
        console.log(temp);
        a = b;
        b = temp;
    }
}

fibonacci(10); // Cetak 10 angka Fibonacci ke konsol
