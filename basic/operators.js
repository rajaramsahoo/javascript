// 1. Arithmetic Operators: +, -, *, /, %, ++, --, **
// var a=2, b=3;
// console.log(a);
// console.log(++a)
// console.log(a++)
// console.log(a)



// 2. Assignment Operators: =, +=, -=, *=, /=, .....



/* 
a = 3
a = a+5 //a = 3 + 5; a=8
a+=5

*/

// var a = 3;
// a += 5 //a=a+5; a=3+5; a=8
// console.log(a);


// a -= 5 //a = a-5; a=3-5; a=-2
// console.log(a);

// a*=3;//a = a*3; a=3*3; a=9
// console.log(a);


// a/=3; //a=a/3; a=3/3; a=1
// console.log(a);

// var a = 3, b = 4, c = 6;
// a += 2 //a=5
// a = a + 2 //a=7
// b += 4 //b=8
// b += 3 //b=11
// c += 3 //c=9
// console.log(b, a, c);


// var a = 3, b = 4, c = 6;
// a += 2; //a=5
// a = a + b; //a=9
// b += c //b=b+c; b=4+6; b=10
// c += a //c=c+a; c=6+9; c=15
// console.log(b, a, c); //10 9 15



// var a = 3, b = 4, c = 6;
// a += b;//a=a+b; a=3+4; a=7
// a -= 2;//a=a-2; a=7-2; a=5
// b *= c;//b=b*c; b=4*6; b=24
// c -= b;//c=c-b; c=6-24; c=-18
// console.log(a, b, c)


// var a = 3, b = 4, c = 6;
// a += b - c; //a+=(-2); a= 3 + (-2);a=1
// a -= b += c;//a-=(10); a = 1-10; a=-9; b=10
// a += c;// a=a+c; a=-9+6; a=-3
// console.log(a,b,c);

// 3. Comparison Operators: >, <, >=, <=, ==, !=, ===,!==


/*
true 1 active ON
false 0 inactive OFF
*/

// var a = 3, b = 4, c = 6;
// console.log(a<b<b);// true<b , 1<4 so true

// console.log(a==b==a);
// == vs ===
// == :Value;
// ===:value+data type
// console.log(a=="3");//true
// console.log(a==="3");flase bcz data type
// var a = 3, b = 4, c = 6;
// console.log(a!=a);
// console.log(a!='4');
// console.log(a!=='4');
// console.log(a!=='3');
// console.log(a!==3);
// console.log( typeof "0");
// console.log(4<<4);



// 6. Unary Operator: +



// console.log('2'*'a'); //NaN
// console.log('2'+'a'); //2a

// console.log('-----------')
// console.log("100"*"2");
// console.log('11'+'22');
// console.log(100 - 1 + '2');
// console.log('12'+'hi');
// console.log(12+'hi');
// console.log('hi'+12);
// console.log('hi'-12);
// console.log('100'+1+2+'3'+4);
// console.log(100+1+2+'3'+4);
// console.log('100'+4*2+'3'+4);

// 7. Ternary Operator: __ ? __ : __

// expression ? (true) : (false)

// var a = 3, b = 4;
// console.log(a>b ? 'yaay' : 'nahhh');
// console.log(a<b ? 'yaay' : 'nahhh');
// console.log("" ? 'yaay' : 'nahhh');
// console.log(0 ? 'yaay' : 'nahhh');


// console.log(0.0 ? 'yes' : 'no')
// console.log('0.0' ? 'yes' : 'no')
// console.log('0.1' ? 'yes' : 'no')
// console.log(0.1 ? 'yes' : 'no')
// console.log(' ' ? 'yes' : 'no')
// console.log(false ? 'yes' : 'no') 
// console.log('false' ? 'yes' : 'no')
// console.log('true' ? 'yes' : 'no')
// console.log((3=='3') ? 'yes' : 'no')
// console.log((3==='3') ? 'yes' : 'no') 
// console.log((12>>2) ? 'yes' : 'no')
// console.log((3!=='3') ? 'yes' : 'no')  
// var a=8,b=5,c=8;
// var res=a>b ? ((a==c)?'pass' : 'fail') : 'not elg';
// console.log(res);