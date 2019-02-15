function checkAB(num) {
    // you can only write your code here!
    var posA = [];
    var posB = [];

    for(var i=0 ; i<num.length ; i++){
        if(num[i] === 'a'){
            posA.push(i)
        }
        else if(num[i] === 'b'){
            posB.push(i)
        }
    }
    // console.log(posA)
    // console.log(posB)

    var validator = false;
    for (var i = 0 ; i < posA.length ; i++){
        for(var j=0 ; j<posB.length ; j++){
            if (Math.abs(posA[i]-posB[j])-1 === 3){
                return true
            }
            else {
                validator =  false
            }
        }
    }
    return validator
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false