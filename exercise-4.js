function cariModus(arr) {
    // you can only write your code here!
var frekuensiTerbanyak = 0;
var modus = 0;
    for(var i = 0; i<arr.length; i++){
        var frekuensi = 0;
       for(var j = i+1; j<arr.length; j++){
         if(arr[i]===arr[j]){
           frekuensi++;
           if(frekuensi>frekuensiTerbanyak){
             frekuensiTerbanyak=frekuensi;
             modus = i;
           }
         }
       }
     }
     
     if(frekuensiTerbanyak === 0 || frekuensiTerbanyak >= arr.length-1){
         return -1
     }
     else{
         return arr[modus]
     }
}
  
  // TEST CASES
  console.log(cariModus([10,5,5,4, 5, 4, 5, 2,4,4,4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1