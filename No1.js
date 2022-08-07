/*
* Buatlah sebuah loop untuk mengecek setiap angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

for (let i = 1; i <= 100; i++) {
    // console.log(i, "=> ini angka")
    if (i%2===0){
        console.log(i,"=> genap")
    }else{
        console.log(i,"=> ganjil")
    }
}