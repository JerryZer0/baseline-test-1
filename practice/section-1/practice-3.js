'use strict';

function collectSameElements(collectionA, objectB) {
  var result = new Array();
  var b=objectB.value;
  var c=b.toString();
   for(var i=0;i<collectionA.length;i++){
      if(c.indexOf(collectionA[i].toString())>-1){
        result.push(collectionA[i]);
      }
   }
   return result;
}
