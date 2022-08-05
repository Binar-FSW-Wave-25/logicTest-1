// soal no 1
for (let x=1; x<=100; x++) {
    if (x === 0) {
        console.log(x + " itu genap");
    }
    else if (x % 2 === 0) {
        console.log(x + " itu genap");
    }
    else {
        console.log(x + " itu ganjil");
    }
}

// soal no 2
for (let i=50; i <= 200; i++) {
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log(i + " bisa dibagi 3 dan kelipatan 5");
    }
    else if (i % 3 == 0) {
        console.log(i + " bisa dibagi 3");
    }
    else if (i % 5 == 0) {
        console.log(i + " kelipatan 5");
    }
}
