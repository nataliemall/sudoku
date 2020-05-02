
  


  stringOfNums = '005910308009403060027500100030000201000820007006007004000080000640150700890000420'
  // stringOfNums = '095127384138459672724836915851264739273981546946573821317692458489715263562348197' //solved one
  console.log(stringOfNums[2])
  const rows = Array.from(document.querySelectorAll('tr'));
  const matrix = rows.map(
    r => Array.from(r.querySelectorAll('td'))
    )


 
  function addGivenNumbers2(i){    
  // TODO rename cellNum to cell 
    // Functiuon adds the ith given number to the grid
    var cellNum = document.getElementById(`td${numberOnList}`);
    var text = document.createTextNode(stringOfNums[i]);
    // cellNum.appendChild(text);

    text_string = text.toString()
    if (stringOfNums[i] !== "0"){
      console.log('the text is ', text)
      cellNum.appendChild(text);
      cellNum.classList.add("preFilled")
    }
    // if (i % 3 == "0") {
    //   console.log('remainder is', i, (i % 3));
    //   cellNum.classList.add("foo");
    // }
  }

  
// TODO change for to for "each"
// labels each grid element with ID 0 - 80 
var nodes = document.querySelectorAll("td");
for(var i = 0; i < nodes.length; i++) {
  var iString = i.toString();
  console.log('iString is ', iString)
  nodes[i].setAttribute("id", `td${iString}`);
}

// TODO change to for (each)
var i = 0;
while (i < 81) {   //Loop to add the given number 81 times
  var numberOnList = i.toString(); 
  addGivenNumbers2(i)
  i++;
}


// function zeroNums() {
//   matrix.forEach(row => {
//       row.forEach(cell => {
//         if (cell.id === "0"){
//           console.log('This ID is zero:', cell.id)
//         }

         
//       })
//     })
//   }

// zeroNums()
  

window.onload = () => {

  NumberSizeSwitcher = false // True when it's a small number 
  containsBigNumber = false

  const rows = Array.from(document.querySelectorAll('tr'));
  const matrix = rows.map(
    r => Array.from(r.querySelectorAll('td'))
    );

  let active = {
    row: 0,
    col: 0
  };


mod = function(m,n) {
  return ((m%n)+n)%n
}

document.addEventListener("keydown", event => {

  if (event.key === 'ArrowDown') {
    active.row = mod((active.row+1),9) 
    updateHighlights();
  }

  if (event.key === 'ArrowUp') {
    active.row = mod((active.row - 1), 9); 
    updateHighlights();
  }

  if (event.key === 'ArrowRight') {
    active.col = mod((active.col + 1),9); 
    updateHighlights();
  }

  if (event.key === 'ArrowLeft') {
    active.col = mod((active.col - 1), 9); 
    updateHighlights();
  }

  
  for (i=1; i<10; i++) {

    if (matrix[active.row][active.col].classList.toString().includes("preFilled") === false) {
      console.log(matrix[active.row][active.col].classList)
      typedNum = i.toString() 


      if (event.key === i.toString()) {  //i.e. if a 5 is pressed
        
        // className = ('small' + i.toString()).toString();
        if (NumberSizeSwitcher === true){  // if mode is set to small number 
          matrix[active.row][active.col].classList.add("smallNumber");
          // matrix[active.row][active.col].classList.add(className);
          if (containsBigNumber === true) {
            matrix[active.row][active.col].innerHTML = ''; // delete the big number if it contains it -- currently does not work
            containsBigNumber = false;
          } else if (matrix[active.row][active.col].innerHTML.includes(i.toString()) === false){ //if small number is NOT already included
            console.log('Small number was included here')
            matrix[active.row][active.col].innerHTML = matrix[active.row][active.col].innerHTML + i.toString(); //concat here
            // if lenght is 

            // matrix[active.row][active.col].innerHTML = matrix[active.row][active.col].innerHTML.replace(i.toString(), '')
            // matrix[active.row][active.col].innerHTML = 'TEST';
          } else if (matrix[active.row][active.col].innerHTML.includes(i.toString()) === true) { //small num was already included
            matrix[active.row][active.col].innerHTML.replace(i.toString(), 'TEST');
            console.log('Already included', typedNum)
          }
          containsBigNumber = false;
        } else { //if mode is set to big number 
          matrix[active.row][active.col].classList.remove("smallNumber");
          // matrix[active.row][active.col].classList.remove(className)
          matrix[active.row][active.col].innerHTML = i.toString();
          containsBigNumber = true; 
        }


        checkSolved()
      }


      if (event.code === 'Space') {  //toggles between pencil notes and normal fill-in
        console.log('Spacebar yay')
        if (NumberSizeSwitcher === true) {
          NumberSizeSwitcher = false
        } else {
          NumberSizeSwitcher = true

          }
      }


    }

    }

if (matrix[active.row][active.col].classList.toString().includes("preFilled") === false) {
  if (event.key === 'Backspace') { // delete
    matrix[active.row][active.col].innerHTML = '' ;
  }
}

}) //These are for end of event listener



function updateHighlights() {
  matrix.forEach(row => {
    row.forEach(cell => {
      cell.classList.remove('highlighted');
    })
  })

  matrix[active.row][active.col].classList.add('highlighted');
}

updateHighlights();


function checkSolved(){
  rowsComplete = true;
  columnsComplete = true; 
  matrix.forEach(row => {
    console.log(row);

  })

  for (i=0; i<9; i++){
    eachRowNums = document.getElementById("sudokuSquare").rows[i].innerText;
    if (eachRowNums.includes("1") === true && 
    eachRowNums.includes("2") === true &&
    eachRowNums.includes("3") === true &&
    eachRowNums.includes("4") === true &&
    eachRowNums.includes("5") === true &&
    eachRowNums.includes("6") === true &&
    eachRowNums.includes("7") === true &&
    eachRowNums.includes("8") === true &&
    eachRowNums.includes("9") === true ) {
    console.log(i, '- row is finally complete!')
  } else {
    rowsComplete = false 
  }

  }



  for (col=0; col<9; col++){
    fullColumn = ''
    for (i=0; i<9; i++){
      eachColumnCell = matrix[i][col].innerText;
      console.log(eachColumnCell);  //concat this value onto a string, then check that each string has all 9 numbers 
      fullColumn = fullColumn + eachColumnCell; 
    }

    if (fullColumn.includes("1") === true && 
      fullColumn.includes("2") === true &&
      fullColumn.includes("3") === true &&
      fullColumn.includes("4") === true &&
      fullColumn.includes("5") === true &&
      fullColumn.includes("6") === true &&
      fullColumn.includes("7") === true &&
      fullColumn.includes("8") === true &&
      fullColumn.includes("9") === true ) {
      console.log('this Column is finally complete!')
    } else {
      columnsComplete = false; 
    }
  }


  if ((rowsComplete === true) && (columnsComplete === true)){
    document.getElementById("sudokuSquare") 
    
    const allCells = Array.from(document.querySelectorAll('td'));
    // if allCells
    // var stylesInSquare = document.getElementById("sudokuSquare").classList;
    var pencilStyle = document.getElementsByClassName("smallNumber");
    if (pencilStyle.length) {
      console.log('Still includes pencil marks')
      var pencilMarks = true
    }
    // var stylesInSquare.style[cssProperty]
    if (pencilMarks !== true){
      console.log('I think you have completed the puzzle!')}
  }


}


checkSolved();


if (pencilMarks !== true) {

  // <!DOCTYPE html>
  // <html>
  //     <head>
  //         <title> Fireworks </title>
  //         <link rel="stylesheet" href="https://cdn.rawgit.com/Legacy-K/Common/a1d9927e/fireworks/fireworks.css" />
  //         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  //         <script src="https://cdn.rawgit.com/Legacy-K/Common/a1d9927e/fireworks/fireworks.js"></script>
  //     </head>
  //     <body></body>
  // </html>

}

} // onload


// github pages
// make it a function 
// add little numbers 
// get prettier 
//





