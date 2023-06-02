export function getDecimal(num) {
    return num - Math.floor(num);
    }


//export function getDecimal(num) {
//    var str = "" + num; 
//    var zeroPos = str.indexOf("."); 
   
 //   if (zeroPos == -1) return 0; 
 //   str = str.slice(zeroPos); 
   
 //   return +str; 
 //  }