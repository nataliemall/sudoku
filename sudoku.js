
  


  stringOfNums = '005910308009403060027500100030000201000820007006007004000080000640150700890000420'
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


      if (event.key === i.toString()) {  //i.e. if a 5 is pressed
        
        // className = ('small' + i.toString()).toString();
        if (NumberSizeSwitcher === true){  // if mode is set to small number 
          matrix[active.row][active.col].classList.add("smallNumber");
          // matrix[active.row][active.col].classList.add(className);
          if (containsBigNumber === true) {
            matrix[active.row][active.col].innerHTML = ''; // delete the big number if it contains it
            containsBigNumber = false;
          } else if (matrix[active.row][active.col].innerHTML.includes(i.toString()) === false){ //if small number is already included
            console.log('Small number was included here')
            matrix[active.row][active.col].innerHTML = matrix[active.row][active.col].innerHTML + i.toString(); //concat here
            // if lenght is 

            // matrix[active.row][active.col].innerHTML = matrix[active.row][active.col].innerHTML.replace(i.toString(), '')
            // matrix[active.row][active.col].innerHTML = 'TEST';
          }
          containsBigNumber = false;
        } else { //if mode is set to big number 
          matrix[active.row][active.col].classList.remove("smallNumber");
          // matrix[active.row][active.col].classList.remove(className)
          matrix[active.row][active.col].innerHTML = i.toString();
          containsBigNumber = true; 
        }




        // if (matrix[active.row][active.col].innerHTML === i.toString()) {
        // // if (i === 1) {
        // console.log('TEST');
        // matrix[active.row][active.col].innerHTML = '';
        // } else {
        // matrix[active.row][active.col].innerHTML = i.toString();
        // }
        // if (NumberSizeSwitcher === true) {
        //   className = ('small' + i.toString()).toString();
        //   matrix[active.row][active.col].classList.add("smallNumber")
        //   matrix[active.row][active.col].classList.add(className);
        // } else {
        //   matrix[active.row][active.col].classList.remove("smallNumber");
        //   matrix[active.row][active.col].classList.remove(className)
        // }
      }


      if (event.code === 'Space') {  //toggles between pencil notes and normal fill-in
        console.log('Spacebar yay')
        if (NumberSizeSwitcher === true) {
          // matrix[active.row][active.col].classList.remove("smallNumberNext"); //removes pencil marks upon second space click
          // matrix[active.row][active.col].classList.remove("small1");
          NumberSizeSwitcher = false
        } else {
          NumberSizeSwitcher = true
          // matrix[active.row][active.col].classList.add("smallNumberNext");  //switches to pencil marks


          // }
          // }
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




} // onload


// github pages
// make it a function 
// add little numbers 
// get prettier 
//





