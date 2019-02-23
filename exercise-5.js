function ubahHuruf(kata) {
    // you can only write your code here!
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = ''

    for (var i=0 ; i<kata.length ; i++){
        for(var j=0 ; j<kamus.length; j++){
            if(kata[i] === kamus[j] && kata[i] != kamus[kamus.length-1]){
                kataBaru += kamus[j+1]
            }
        }
        if(kata[i] === kamus[kamus.length-1]){
            kataBaru += kamus[0]
        }
    }
    return kataBaru
  }
  
  // TEST CASES
  console.log(ubahHuruf('wowz')); // xpx
//   console.log(ubahHuruf('developer')); // efwfmpqfs
//   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
//   console.log(ubahHuruf('keren')); // lfsfo
//   console.log(ubahHuruf('semangat')); // tfnbohbu