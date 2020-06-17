# JAVASCRIPT 

## 01 JavaScript Fundementals

**console.log()** - log to the console eg: console.log('123);

**console.table()** - print a table with the given values eg: console.log({a:1, b:3});

**console.error()** - log a error message in the console eg: console.log('this is aerror message')

**console.warn()** - log a warning message in the console  eg:console.warn('This is a warning message');

## Variables 

1. In Var / let we can reassign the variables whenever we needed in code, Whereas in const we cannot be reassign the variable in the code.
2. variables contains letters, numbers, _, $
3. variables cannot start with numbers
4. Multi word vars 
    i) var firstName = 'John'; //Camel Case 
   ii) var first-name = 'Sara'; //Underscore
  iii) var FirstName = 'Tom'; //Pascal case  
5. Variables - let, var can be reassigned, Whereas const cannot be reassigned
6. 

## Data Types

1. Primitive data types
    sorted directly in the location the variable accesses 
    sorted on the stack
    types 
    6 Types of data types 
     i) String
    ii) NUmber 
   iii) Boolean 
    iv) Null 
     v) undefined 
    vi) Symbols (ES6)
2. Reference Data Types
    Asscesed by reference 
    Objects that are stored on the heap
    A pointer to a location in memory 
    types
    i) Arrays 
   ii) Object literals 
  iii)Functions
  iv) Dates
   v) Anything Else  

## Type Conversion

1. To convert String to Numbers => val = Number('5')
2. To convert NUmbers to string => val = String(5);


## Math Operator 

basic math operators are 
1. +,-,/,* & % 
2. Math.PI => gives the value of pie.
3. Math.E => gives the value of e.
4. Math.round => if decimal value is below 5, round up the value to lesser whole number
5. Math.ceil => Whatever the decimal value is it rounds up to next whole number.
6. Math.floor => Whatever the decimal value is it rounds up to lesser whole number.
7. Math.sqrt => gives the squareroot of the given number
8. Math.abs() => gives the absolute value of given number
9. Math.pow(number, power) => gives the power value
10. Math.min(num1,num2,..) => gives the min value 
11. Math.max(num1,num2,..) => gives the max value 
12. Math.random() => gives the random decimal value between 0 and 1.

## String Methods and Concatenation 

1. define two variables and if you want to concantnate the string just add two strings
   eg: const firstName = 'joe'
       const secondName = 'john'
       let val = firstName + SecondName;
   note: if you need space between two strings add <' '> b/w addition or else add space to last letter in you first name.
2. Append 
   To Append string 
   val = 'Brad ' 
   val += 'Traversy'
   console.log(val);
   output: Brad Traversy
3. Esacping : use '\' which will treat the next element as character.
4. concat() 
   first Method
   val = firstName + secondName
   second Method 
   val = fisrtname.concat(firstelement, secondelement)
5. change case 
   Uppercase : .toUpperCase();
   Lowercase : .toLowerCase();
6. [<value>] => value help us to read which element is placed in given index value.
   eg: val = firstName[2];
7. indexof('<element>') => give the value of index in which the given element is placed
   eg : val = firstName.indexof('a'); 
8. charAt('<value>') =>  gives the element present in the place. if not element is not present it returns -1 value
   eg: val = firstName.charAt('2');
   To get last chara of string
   val = firstName.charAt(firstName.length - 1);
   
   Note: the Index value starts counting from 0 not 1.
9. substring(<startingindexnumber>, <lastindexnumber>) => substring helps us to obtain the substring from main string
   eg:  val = firstName.slice(1,4); where 1 & 4 are indexvalue
10. slice() => same as sunstring but it accepts neagative value. negative value is used in count from last character of string
    eg: val = firstName.slice(1,3);
11. split('<character or space') => helps us tp split the main string from which element we want to split it
     eg: val = str.split(',');
12. replace('actualword/element', 'word/element to be replaced') => helps us to replace the word/character in the string
    eg:  val = str.replace('Joy' , 'Hell');
13. includes('word/character') => helps us to find whether the given word/character is present in string

## Template Literals 

1. Template literals es6 is used to read the value into HTML document 
   eg: 

      html = `
   <ul>
       <li>Name: ${name}</li>
       <li>Age: ${age}</li>
       <li>Job: ${job}</li>
       <li>City: ${city}</li>
       <li> ${2+2}</li>
       <li> ${hello()}</li>
       <li> ${age > 30 ? 'Over 30' : 'under :30'}</li>
   </ul>
   `;
	document.body.innerHTML = html; 


 ## Array & Array MEthods

1. 
2. Sample arrays 
    const numbers = [43,56,33,23,44,36,5];
    const number2 = new Array(22,45,33,76,54);
    const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
    const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
3. Get array length
   <arrayname>.length;
   eg: numbers.length
4. Check if Array is present 
   Array.isArray(<Arrayname>)
   eg: val = Array.isArray(numbers)
5. [Indexnumber] => Get single value in a Array
   variablename = Arrayname[value]; value:indexnumber
   eg: Val = numbers[value]; 
6. To enter Element in the Array
   arrayName[indexpostion you want to enter element] = value;
   eg: numbers[2] = 100;
7. Find index of value 
   variableNAme = arrayname.indexof(element/word/charcter)
   eg: val = numbers.indexof(36); 
8. Add array to the end 
   arrayName.push(character or value);
   numbers.push(250);
9. Add array to the first 
   arrayName.unshift(character or value);
   eg: numbers.unshift(120);
10. Take off last element
    arrrayName.pop();
    eg: numbers.pop();
11. Take off first element
    arrrayName.shift();
    eg: numbers.shift();
12. To take of elements from array also know as splice 
     arrayName.splice(postion of index, no of elements to removed)
    eg : numbers.splice(2,3);  // removes 3 elements starting from index value postion 2
13. Concateenate two arrays
     firstarrayname.concat(secondarrayname);
    eg: val = numbers.concat(number2); 
14. sorting arrays
    arrayname.sort();
    eg: fruits.sort();
15. If you need to sort numbers in the array we need to compare each number inside the array therefore we need to write a function to compare numbers and pass it inside the sorting functions
    eg :  funtion for sorting number 
          val = numbers.sort(function(x,y){
          return x-y;
          });
    eg2:  funtion for sorting number  reverse order
          val = numbers.sort(function(x,y){
          return y-x;
          });
16. find the number inside the array 
    eg : function defined 
         function under20(num){
         return num > 20;
         }
        Val = numbers.find(under20);

## Doubt 
 Why new is mentioned is all over the video where date is mentioned 

## Dates & Times

1. Date(); Helps us to display present date and time in mentioned format "Tue Mar 12 1985 03:30:25 GMT+0530 (India Standard Time)"
2. .getMonth() helps us to get the month of the year
   Note : Only Month is calculated in the 0 based. ir 0 => JAnuary
   The below mentioned are other of few functions using get
   val = today.getMonth();   => get the current month
   val = today.getDate();    => Get the todays date
   val = today.getDay();     => Get the todays day0
   val = today.getFullYear(); => Get the year
   val = today.getHours();    => Get the hours
   val = today.getMinutes();  => Get the todays Minutes
   val = today.getSeconds();  => Get the persent Seconds
   val = today.getMilliseconds(); => Get the milliseconds
   val = today.getTime();  => Get the time of this year in milli seconds
3. We can set the date, time etc in Date function using ".set" functions
    birthday.setMonth(2);        => Set the month
    birthday.setDate(12);        => Set the date
    birthday.setFullYear(1985);  => Set the Year
    birthday.setHours(3);        => Set  the hours
    birthday.setMinutes(30);     => Set the Minutes
    birthday.setSeconds(25);     => Get the seconds
        

