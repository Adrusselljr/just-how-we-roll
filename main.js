/****************** DATA *********************************/

let sixes = []
let doubleSixes = []
let twelves = []
let twenties = []

/****************** HELPER FUNCTIONS *********************/

const getRandomNumber = max => {
    const rand = Math.random()
    const range = rand * max
    const result = Math.ceil(range)
    return result
}

const sortByNumber = arr => {
  const byNumber = (item1, item2) => {
    return item1 - item2
  }

  return arr.slice().sort(byNumber)
}

/****************** YOUR CODE BELOW ************************/



/****************** EVENT LISTENERS ************************/




/****************** RESET FUNCTION *************************/

const reset = document.querySelector("#reset-button")
reset.addEventListener("click", function () {
  
  const d6 = document.querySelector("#d6-roll")
  const double1 = document.querySelector("#double-d6-roll-1")
  const double2 = document.querySelector("#double-d6-roll-1")
  const d12 = document.querySelector("#d12-roll")
  const d20 = document.querySelector("#d20-roll")
  const d6Mean = document.querySelector("#d6-rolls-mean")
  const d6Median = document.querySelector("#d6-rolls-median")
  const d6Mode = document.querySelector("#d6-rolls-mode")
  const double6Mean = document.querySelector("#double-d6-rolls-mean")
  const double6Median = document.querySelector("#double-d6-rolls-median")
  const double6Mode = document.querySelector("#double-d6-rolls-mode")
  const d12Mean = document.querySelector("#d12-rolls-mean")
  const d12Median = document.querySelector("#d12-rolls-median")
  const d12Mode = document.querySelector("#d12-rolls-mode")
  const d20Mean = document.querySelector("#d20-rolls-mean")
  const d20Median = document.querySelector("#d20-rolls-median")
  const d20Mode = document.querySelector("#d20-rolls-mode")

  d6.src = "./images/start/d6.png"
  double1.src = "./images/start/d6.png"
  double2.src = "./images/start/d6.png"
  d12.src = "./images/start/d12.jpeg"
  d20.src = "./images/start/d20.jpg"
  d6Mean.innerText = "NA"
  d6Median.innerText = "NA"
  d6Mode.innerText = "NA"
  double6Mean.innerText = "NA"
  double6Median.innerText = "NA"
  double6Mode.innerText = "NA"
  d12Mean.innerText = "NA"
  d12Median.innerText = "NA"
  d12Mode.innerText = "NA"
  d20Mean.innerText = "NA"
  d20Median.innerText = "NA"
  d20Mode.innerText = "NA"

})

/***************** CLICK HANDLING FUNCTIONS ****************/



/***************** MATH SECTION ****************************/
