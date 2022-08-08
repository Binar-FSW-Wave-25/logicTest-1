// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

for (let index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
        console.log(index, "==> GANJIL");
    } else {
        console.log(index, "==> GENAP");
    }
    
}

// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

for (let index = 50; index <= 200; index+=5) {
    // console.log(index, "==> Kelipatan 5");
    if (index % 3 === 0) {
        console.log(index, "==> Faktor perkalian 3");
    } else {
        console.log(index, "==> Bukanfaktor perkalian 3");
    }
    
}