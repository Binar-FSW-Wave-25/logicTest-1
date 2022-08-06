// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/
for (let index = 1; index <=100; index+=3) {
    if (index%2 == 0) {
        console.log(index,"adalah bilang genap");
    } else {
        console.log(index,"adalah bilangan ganjil");
    }
}
console.log(" ");
console.log("============================");
console.log(" ");
// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/
for (let i = 50; i <=200; i+=5) {
    if (i%3 == 0) {
        console.log(i,"faktor perkalian 3");
    } else {
        console.log(i,"bukan faktor perkalian 3");
    }
}