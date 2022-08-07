// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

function cekAngka () {
    for (let i=45;i<200;i+5){
        i=i+5
        if (i%3==0) {
             console.log(i, " ini kelipatan 3")
           } else {
            console.log (i, " ini bukan kelipatan 3")
           }
    }
}
cekAngka()


