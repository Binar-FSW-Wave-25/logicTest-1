// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

function cekAngka() {
    for (let i = 50; i < 200; i += 5) {
        if (i % 3 == 0) {
            console.log(i, " ini Faktor Perkalian 3")
        } else {
            console.log(i, " ini Bukan Faktor Perkalian 3")
        }
    }
}
cekAngka()