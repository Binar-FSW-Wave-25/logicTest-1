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