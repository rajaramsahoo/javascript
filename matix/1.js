import readlinesync from "readline-sync";
const inputmatix = () =>{
    const row = readlinesync.questionInt(`Enter the number of rows:-`);
    const col = readlinesync.questionInt(`Enter the number of coloumn:-`);
    console.log(row+'X'+col);
    let mat= new Array(row);
    for(let i=0; i<mat.length; i++){
        mat[i]=new Array(col);
    }
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            mat[i][j]=readlinesync.questionInt(`Enter the value of ${i}${j}is :-`)
        }
    }
    // console.log(mat);
    return mat;

}
// inputmatix();
const printmatix = (mat) =>{
   let str="";
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length; j++){
            str+=mat[i][j]+' ';
                    }
                    console.log(str);
                    str="";
    }
}
// printmatix(inputmatix());
console.log(`enter the 1st matix`);
let m1=inputmatix();
printmatix(m1);
console.log(`enter the 2nd matix`);
let m2=inputmatix();
printmatix(m2);
export(m1,m2);
