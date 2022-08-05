// Soal nomor 1
/*
* Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.
*/

// Soal nomor 2
/*
* Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.
*/

/*
Jawaban - Alvian Febriansyach
*/

// Function
function numberChecker (start, end, problem) {
    if (problem === "odd/even") {
        for (let i = start; start <= end; start++) {
            if (start % 2 === 0) {
                    console.log (start + " adalah angka genap!");
                }
                else {
                    console.log (start + " adalah angka ganjil!");
                }
        }
    }
    else if (problem === "faktorPerkalian3") {
        for (let i = start; start <= end; start += 5) {
            if (start % 3 === 0) {
                    console.log (start + " merupakan faktor perkalian 3");
                }
                else {
                    console.log (start + " bukan faktor perkalian 3")
                }
        }
    }
}

// Jawaban nomor 1
console.log(numberChecker(1, 100, "odd/even"))

// Jawaban nomor 2 
console.log(numberChecker(50, 200, "faktorPerkalian3"))