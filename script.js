function firstLast6(array) {
    var length = array.length;
    var first = array[0];
    var last = array[array.length - 1];
    return (first == 6 || last == 6);
}

function has23(array){
    var length = array.length;
    var first = array[0];
    var last = array[array.length - 1];
    if(first == 2 || last == 2){
        return true;
    }
    if(first == 3 || last == 3){
        return true;
    } else
        return false;
}

function fix23(array){
   if(array[0] == 2 && array[1] == 3){
       array[1] = 0;
   }
   if(array[1] == 2 && array[2] == 3){
       array[2] = 0;
   }
   return array;
}

function countYZ(string){
    var count = 0;
    var first = string.substring(i,i + 1);
    var last = string.substring(i + 1, i + 2);
    for(var i = 0; i < string.length; i++){

        if(string[i] == "y" || string[i] == "z" || string[i] == "Y" || string[i] == "Z"){
            if(i == string.length - 1){
                count++;
            }else if(string[i+1] == " "){
                count++;
            }
        }

    }
    return count;
}

function endOther(string1,string2){
    var lower1 = string1.toLowerCase();
    var lower2 = string2.toLowerCase();
    var lowerLength1 = lower1.length;
    var lowerLength2 = lower2.length;
    var finalStr1 = lower1.substring(lowerLength1 - lowerLength2);
    var finalStr2 = lower2.substring(lowerLength2 - lowerLength1);
    if(finalStr1 == finalStr2){
        return true;
    } else
        return false;

}

function starOut(string){
    var curStr = "";
    var strlg = string.length;
    for(var i = 0; i < strlg; i++){
        var stringbeg = string.substring(i,i+1);
        var stringmid = string.substring(i-1,i);
        var stringend = string.substring(i+1,i+2);
        if (stringbeg !== "*" && stringmid !== "*" && stringend !== "*"){
            curStr += stringbeg;
        }
    }
    return curStr;
}

function getSandwich(string){
    var curStr = "";
    var first = string.indexOf("bread");
    var last = string.lastIndexOf("bread");
    curStr = string.substring(first + 5,last);
    if(first == last){
        curStr = "";
    }
    return curStr;
}

function canBalance(array){
  var x = 0;
  var y = 0;
  if(array.length == 1){
      return false;
  }
  for(var i = 0; i < array.length; i ++){
      x += array[i];

      for(var j = i+1; j < array.length; j++){
          y += array[j];
      }
      if(x==y){
          return true;
      }
      y = 0;
  }
  return false;
}

function countClumps(array){
    var count = 0;
    for(var i = 0; i <array.length; i++){
        if(array[i] == array[i+1]){
            count += 1;
        }
        if(array[i-1] == array[i] && array[i+1] == array[i]){
            count -= 1;
        }
    }
    return count;
}

function evenlySpaced(a,b,c){
    if(c-b == b-a || b-c == c-a || c-a == a-b){
        return true;
    }
    if(c-b != b-a || b-c != c-a || c-a != a-b){
        return false;
    }
}

function tester(){
    document.getElementById("output").innerHTML += firstLast6(1,4,2,6);
    document.getElementById("output").innerHTML += has23(3,5);
    document.getElementById("output").innerHTML += fix23([1, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("heavy");
    document.getElementById("output").innerHTML += endOther("AbC", "HiaBc");
    document.getElementById("output").innerHTML += starOut("ab*cd");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output").innerHTML += countClumps([1, 2, 2, 3, 4, 4]);
    document.getElementById("output").innerHTML += evenlySpaced(2, 4, 6);
}