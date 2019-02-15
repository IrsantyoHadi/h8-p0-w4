function urutkanAbjad(str) {
    // you can only write your code here!

    temp=[]
    
    for (var i =0 ; i<str.length ; i++){
        temp.push(str[i])
    }
    // console.log(temp)

    var sort = [];
    var bbl;
    for (var i = 1; i< temp.length;i++){
      for(var j=0; j<temp.length -i ; j++){
        if(temp[j]>temp[j+1]){
          bbl = temp[j]
          temp[j]= temp[j+1]
          temp[j+1]= bbl
        }
      }
    }
    sort = temp

    var result =''
    for(var i=0 ; i< sort.length;i++){
        result += sort[i]
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'