function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var tukar =''

    for(var i=0 ; i<kalimat.length ; i++){
        var huruf = kalimat[i];
        if (huruf === huruf.toUpperCase()){
            tukar += huruf.toLowerCase();
        }
        else if (huruf === huruf.toLowerCase()){
            tukar += huruf.toUpperCase();
        }
        else{
            tukar += huruf
        }
    }
    return tukar
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"