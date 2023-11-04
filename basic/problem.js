// var str='javascript';
// var d=''
// for(i=2; i<str.length; i+=2){
//     d+=str[i];
    
//     console.log(d)
    
// }
// function evenword(str){
//     var a='';
//     for(var i=0; i<str.length; i+=2){
//         a+=str[i];
//         // console.log(a);
//     }
//     return a;
// }
// var res=evenword('javascript');
// console.log(res);
// function even(N){
//     var a=[];
//     for(var i=0; i<N; i+=2){
//         a.push(i)
//         // console.log(a)
//     }
   

//   return a;
// }
// var res=even(10);
// console.log(res)

//------
// function sumarr(arr){
//     var sum=0;
//     for(var i=0; i<arr.length;i++)
//     sum+=arr[i]

//     return sum;
// }
// var res=sumarr([1,2,3,4,5]);
// console.log(res);
//-----
// function getMean(arr){

//     var sum=0;
//     for(var i=0; i<arr.length; i++){
//         sum += arr[i];
//     }

//     return sum / arr.length ;
// }

// var res = getMean([1,2,3,4,5]);
// console.log(res);
//======
// function getMedian(arr){

//     var median=0;
//     var position;

//     var pos1;
//     var pos2;

//     if( arr.length % 2 == 0){ //even
//         pos1 = arr [ Math.floor(arr.length / 2) - 1 ];
//         pos2 = arr [ Math.floor(arr.length / 2) ];
//         median = ( pos1 + pos2 ) / 2;
//     }
//     else { //odd
//         position = Math.floor(arr.length / 2);
//         median = arr[position];
//     }

//     return median;


// }

// var res1 = getMedian([10,21,32,44,55]); //odd
// var res2 = getMedian([1,2,3,4]); //even
// console.log('Median for odd numbers is',res1)
// console.log('Median for even numbers is',res2)
// function getResult(booll, bool2){
//     return booll || bool2 ? 'one or more' : 'neither';
     
// }
    
    
//     var res = getResult(true, false);
//     console.log(res);
// function getResult(arr){
//     if (arr.length) {
//     return 'full' ;
//     } else {
//     return 'empty';
//      }
//     }
    
    
//     var result = getResult([1, 2, 3]);
//     console.log(result)
    
// var nonNumericCards = { 
//     1: 'Ace',
//     11: 'Jack',
//     12: 'Queen',
//     13: 'King',
// };

// var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'] ;
//  var pack = [];
// for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
// var suit = suits[suitIndex];
// for (var number = 1; number	< 14; number++) {
// var value = nonNumericCards[number] || number; 
// pack.push(value + ' of ' + suit);
// }
// }

// var result = pack [0];
// console.log(result);
//___--------

// function pat(a){
//     var emp="";
//     for( var i=1;i<=a;i++){
//         emp = emp+i+" "
// ;

//        console.log(emp);
//     }
  
// }
//  res=pat(5);

//__________
// function getResult (value) {
//     if (value > 4) {
//     return 10;
//     } else {
//     return 20;
    
//     }
// }
//     var result =getResult(3);
//     console.log(result);
//-----
// function num(a){
//     var res="";
//     var count=1;
//     for(var i=1; i<=a; i++){
//         for(var j=1; j<=i; j++){
//             res+=count+" ";
//             count++;
//       }
//       console.log(res);
//       res="";
//         }
//            }
//      num(5);
//------
// function fn(a){
//     var c= "";
//     for( var i=a; i>=1; i--){
//         for(var j=1; j<=i; j++){
//             c += i + " ";
//         }
//         console.log(c);
//         c="";
//     }

// }
// fn(5)
//----------------------
function fn(a){
    var v ="";
    var count=0;

    for(var i=a; i>=1; i--){
        for(var j=1; j<=i; j++){
            count++
        v += count+" ";
        }
        console.log(v);
        v= "";
    }
}
fn(5);