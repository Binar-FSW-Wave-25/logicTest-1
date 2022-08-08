// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

for (let i=5;i<=200;i+=5){
    if (i%3 === 0){
        console.log(i+ "Ini faktor perkalian tiga");
    }
    else{
        console.log(i+ "Ini bukan faktor perkalian tiga");
    }
}