/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

for (let i = 50; i <=200; i+=5) 
    if (i % 3 == 0) {
    console.log(i, "-> Faktor perkalian 3");
    }else{
        console.log(i, "-> Bukan faktor perkalian 3");
    }