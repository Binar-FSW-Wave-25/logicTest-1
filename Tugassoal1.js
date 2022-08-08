// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " ini angka genap")
    }
    else {
        console.log(i + " ini angka ganjil")
    }
}