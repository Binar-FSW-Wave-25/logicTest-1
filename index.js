// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

// Jawaban - Alvian Febriansyach

// Jawaban nomor 1
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log (i + " adalah angka genap!");
    }
    else {
        console.log (i + " adalah angka ganjil!");
    }
}

// Jawaban nomor 2 
for (let i = 50; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log (i + " merupakan faktor perkalian 3");
    }
    else {
        console.log (i + " bukan faktor perkalian 3")
    }
}
