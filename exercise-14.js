/*Logic Challenge - Naik Angkot
Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
*/
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang === undefined){
      return []
    }
    var result = [];
    var temp={};
    for(var i = 0 ; i<arrPenumpang.length; i++){
      var penumpang = arrPenumpang[i][0];
      var berangkat = arrPenumpang[i][1];
      var sampai = arrPenumpang[i][2];
  
      for(j = 0 ; j<rute.length ; j++){
        if(berangkat == rute[j]){
          var a = j
        }
        if(sampai == rute[j]){
          var b = j
        }
      }
  
      temp.penumpang = penumpang
      temp.naikDari = berangkat
      temp.tujuan = sampai
      temp.bayar = (Math.abs(a-b))*2000
      if(result != undefined){
        result.push(temp)
        temp ={}
      }
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]