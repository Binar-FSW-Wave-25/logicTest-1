// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/


// Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.

//Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
console.log('menggunakan function');

function soalA(start, akhir){
    let ganjil = [];
    for(let i = start ; i <= akhir; i++){
        if (i % 2 !== 0){
            ganjil.push(i);
            
        } 
    } 
    
    return ganjil
    
}
// genap
function soalB(start, akhir){
    let genap = [];
    for(let i = start ; i <= akhir; i++){
        if (i % 2 === 0){
            genap.push(i);
            
        } 
    } 
    
    return genap
    
}
// soal2
function soalC(start, akhir){
    let result = [];
    
    for(let i = start ; i <= akhir; i++){
        if (i % 5 === 0){
            result.push(i);
            
        }
    } return result
}


let ganjil = soalA(1,100);
let genap = soalB(1,100);
let soal2 = soalC(50,200);

console.log(ganjil);
console.log(genap);
console.log(soal2);


// menggunakan oop
console.log ('menggunakan Objek Oriented Programing');

class Topik2{
    constructor(awal, akhir){
    this.awal = awal;
    this.akhir = akhir;
    }
    ganjil (){
        let ganjil = [];
        for(let i = this.awal ; i <= this.akhir; i++){
         if (i % 2 !== 0){
            ganjil.push(i);
            } 
        } return ganjil
    }
    genap (){
        let genap = [];
        for(let i = this.awal; i <= this.akhir; i++){
            if (i % 2 === 0){
                genap.push(i);
            } 
        } return genap
    }
    kelipatan5 (){
        let kelipatan5 = [];
        for(let i = this.awal ; i <= this.akhir; i++){
         if (i % 5 === 0){
            kelipatan5.push(i);
            } 
        } return kelipatan5
    }
}

let coba1 = new Topik2(1,100);
console.log(coba1.ganjil());

let coba2 = new Topik2(1,100);
console.log(coba2.genap());

let coba3 = new Topik2(5,200);
console.log(coba3.kelipatan5());
