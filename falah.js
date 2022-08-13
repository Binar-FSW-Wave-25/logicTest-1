//Soal nomer satu

for (let i = 1; i <= 100; i++) {
    if (i%2===0){
    console.log(i+ " ini angka genap")
    }
    else{
    console.log(i+ " ini angka ganjil") 
    }
}


//Soal nomer 2
function angka () {
    for (let i=45;i<200;i+5){
        i=i+5
        if (i%3==0) {
            console.log(i, " ini kelipatan 3")
        } else {
            console.log (i, " ini bukan kelipatan 3")
        }
    }
}
angka()