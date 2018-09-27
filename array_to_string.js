{



   var elements = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming'];
    var newtext = elements.join(", ");
    var resLC = newtext.toLowerCase();
   
   var new1 = resLC.split(", ");
   

   //function uniqueVal(value, index, self) { 
     //return self.indexOf(value) === index;
 //}
 //console.log(res.filter( uniqueVal) );




function uniqueVal(value, index, self) { 
    return self.indexOf(value) === index;
}
var uni = new1.filter( uniqueVal)
var uniStr = uni.join(", ");
var uniStrKav = "\"" + uniStr + "\"";

console.log(uniStrKav)

  
};
