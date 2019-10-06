module.exports = function zeros(expression) {
  let expressionArr = [];
  let arrforFactorials = [];
  if(expression.indexOf("*") !== -1){
  expressionArr = expression.split("*");
  }else{
    expressionArr.push(expression);
  }
  //   функция считает кл-во восклицательных знаков и выдает четное или нечетное число
  function countExclamation(zerosStr) {
    if (zerosStr.indexOf("!") === zerosStr.length - 1) {
      return "one";
    } else {
      if (parseInt(zerosStr) % 2 == 0) {
        return "two even";
      } else {
        return "two odd";
      }
    }
  }
  //функция считаем одиночный факториал и записывает в массив
  function singleFactorial(num) {
    num = parseInt(num);
    let factorialMultiply = 1;
    let factorialNum = 1;
    for (let i = 1; i <= num; i++) {
      factorialMultiply *= i;
      if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
        factorialNum *= i;
      } else {
        arrforFactorials.push(factorialNum);
        factorialNum = 1;
        factorialMultiply = 1;
        factorialNum *= i;
        factorialMultiply *= i;
      }
    }
    if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
      arrforFactorials.push(factorialNum);
    }

    return arrforFactorials;
  }
  // функция считает четные факториалы и записывает в массив
  function evenFactorial(num) {
    num = parseInt(num);
    let factorialMultiply = 1;
    let factorialNum = 1;
    for (let i = 2; i <= num; i += 2) {
      factorialMultiply *= i;
      if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
        factorialNum *= i;
      } else {
        arrforFactorials.push(factorialNum);
        factorialNum = 1;
        factorialMultiply = 1;
        factorialNum *= i;
        factorialMultiply *= i;
      }
    }
    if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
      arrforFactorials.push(factorialNum);
    }
    return arrforFactorials;
  }
  // функция считает нечетные факториалы и записывает в массив
  function oddFactorial(num) {
    num = parseInt(num);
    let factorialMultiply = 1;
    let factorialNum = 1;
    for (let i = 1; i <= num; i += 2) {
      factorialMultiply *= i;
      if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
        factorialNum *= i;
      } else {
        arrforFactorials.push(factorialNum);
        factorialNum = 1;
        factorialMultiply = 1;
        factorialNum *= i;
        factorialMultiply *= i;
      }
    }
    if (factorialMultiply < Number.MAX_SAFE_INTEGER) {
      arrforFactorials.push(factorialNum);
    }
    return arrforFactorials;
  }

  // функция умножения больших числе через строки
  function myltiply(a, b) {
    if (typeof a !== "String") {
      a = a + "";
    }
    if (typeof b !== "String") {
      b = b + "";
    }
    var aa = a.split("").reverse();
    var bb = b.split("").reverse();

    var stack = [];

    for (var i = 0; i < aa.length; i++) {
      for (var j = 0; j < bb.length; j++) {
        var m = aa[i] * bb[j]; //12

        if (stack[i + j] !== undefined) {
          stack[i + j] += m;
        } else {
          stack[i + j] = m;
        }
      }
    }

    // обрабатываем стек, чтобы там осталась одна цифра
    for (let i = 0; i < stack.length; i++) {
      var num = stack[i] % 10;
      var move = Math.floor(stack[i] / 10);
      stack[i] = num;

      // переносим высшие порядки вверх
      if (stack[i + 1] !== undefined) {
        stack[i + 1] += move;
      } else if (move != 0) {
        stack[i + 1] = move;
      }
    }
    return stack.reverse().join("");
  }
  // функция,  которая вычисляет кл-во нулей в конечном числе
  function countZero(arrforFactorials){
    if(typeof(arrforFactorials[0]) == "number"){
      arrforFactorials[0] += ''; 
    }
  let count = 0;
  let a = arrforFactorials[0].split('').reverse();
    for(let i = 0; i < a.length;i++){
      if(a[i] == 0){
        count++;
      }else{
      break;}
    }
  return count;
  }
  
  // вычисляем все факториалы и ложим в массив
  for (let i = 0; i < expressionArr.length; i++) {
    let numberName = countExclamation(expressionArr[i]);
    if (numberName == "two even") {
      evenFactorial(expressionArr[i]);
    } else if (numberName == "two odd") {
      oddFactorial(expressionArr[i]);
    } else {
      singleFactorial(expressionArr[i]);
    }
  }

  // перебираем наш готовый массив и умножаем друг с другом
  while (true) {
    let a;
    if (arrforFactorials.length == 1) {
      break;
    } else {
      a = myltiply(arrforFactorials[arrforFactorials.length-1], arrforFactorials[arrforFactorials.length-2]);
      arrforFactorials.length = arrforFactorials.length-2
      arrforFactorials.push(a);
    }
  }


return countZero(arrforFactorials)

}
