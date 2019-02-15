/*Logic Challenge - Shopping Time!
Problem
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object
dimana object tersebut berisikan informasi
 memberId, money, listPurchased dan changeMoney.


Code

*/

function shoppingTime(memberId, money) {
    // you can only write your code here!
    var listItem = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone',50000]
      ];
    var temp = [];
    var object = {};
    var uang = money;
  //   console.log(listItem)
    for (var i = 0 ; i<listItem.length ; i++){
        if (uang >= listItem[i][1]){
            uang -= listItem[i][1]
            temp.push(listItem[i][0])
        }
        object.memberId = memberId;
        object.money = money;
        object.listPurchased = temp;
        object.changeMoney = uang;
  
        if( memberId === undefined || memberId === ''){
            return 'Mohon maaf, toko X hanya untuk member'
        }
        if(money < 50000){
            return 'Mohon maaf uang tidak cukup'
        }
    }
  return object
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja