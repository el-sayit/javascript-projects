function makeLine(size) {
    let line ="";
    for (let i =0; i<size; i++){
        line = line +'#';
    }
    return line;
}
console.log(makeLine());
function makeSquare(size) {
    let square ='';
    for (let i = 0; i <size; i++){
        square +='\n' + makeLine(size);

    }
    return square;
}
// console.log(makeSquare(5));
function makeRectangle(width, height) {
   let rectangle ='';
    for (let i =0; i < height; i++) {
    rectangle +='\n' + makeLine(width);
    }

return rectangle;

}
// console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let downwardStairs = '';
    for (let i = 0; i <= height; i++) {
        downwardStairs += '\n' + makeLine(i);

    }
    return downwardStairs;
}
// console.log(makeDownwardStairs(5));
function makeSpaceLines(numSpaces, numChars) {
    let hashLine =makeLine(numChars);
    let spaceLine ='';
    for (let i = 0; i< numSpaces; i++){
        spaceLine +=" ";
    }

    return spaceLine+ hashLine+spaceLine;
}
// console.log(makeSpaceLines( 3, 5));
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLines(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0,-1);
  }
  console.log(makeIsoscelesTriangle(8));
  function makeDiamond(height){
       let diamond = makeIsoscelesTriangle(height) ;
    
    
        
        return diamond.split('').reverse().join('');
    }
  
  console.log(makeDiamond(8));