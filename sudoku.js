
  


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

      if (event.key == i.toString()) {
        matrix[active.row][active.col].innerHTML = i.toString();

      } 
    }
  }

if (matrix[active.row][active.col].classList.toString().includes("preFilled") === false) {
  if (event.key === 'Backspace') { // delete
    matrix[active.row][active.col].innerHTML = '' ;
  }
}

})

function updateHighlights() {
  matrix.forEach(row => {
    row.forEach(cell => {
      cell.classList.remove('highlighted');
    })
  })

  matrix[active.row][active.col].classList.add('highlighted');
}

updateHighlights();





}








