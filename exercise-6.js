// Logic Challenge - Digit Perkalian Minimum
// Problem
// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu
// parameter angka. Function akan mengembalikan jumlah digit minimal dari angka 
//yang merupakan faktor angka parameter tersebut, 
//Contoh, jika angka adalah 24, maka faktornya adalah
// 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
//Dari antara faktor tersebut, yang digit nya paling sedikit 
//adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

// Code
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    temp = []
    for(var i = angka ; i>0; i--){
        if(angka%i === 0 && i>=angka/i){
            temp.push(String(i)+ String(angka/i))
        }
      }
    //   console.log(temp)
      var bbl
      var sort=[]
      for(var i= 1 ; i<temp.length; i++){
         for (var j = 0 ; j<(temp.length)-i ;j++){
        //   console.log(temp[j])
            if(temp[j]<temp[j+1]){
              bbl = temp[j]
              temp[j]= temp[j+1]
              temp[j+1]= bbl
            }
        }
       }
       sort = temp
       console.log(sort)
      return temp[0].length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2