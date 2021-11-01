/****************** DATA *********************************/

let sixes = []
let doubleSixes = []
let twelves = []
let twenties = []

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

d6Mean.innerText = "N/A"
d6Median.innerText = "N/A"
d6Mode.innerText = "N/A"
double6Mean.innerText = "N/A"
double6Median.innerText = "N/A"
double6Mode.innerText = "N/A"
d12Mean.innerText = "N/A"
d12Median.innerText = "N/A"
d12Mode.innerText = "N/A"
d20Mean.innerText = "N/A"
d20Median.innerText = "N/A"
d20Mode.innerText = "N/A"

/****************** EVENT LISTENERS ************************/

//  D6 DICE ROLL START

const d6roll = document.querySelector("#d6-roll")
d6roll.addEventListener("click", function () {

  let d6Num = random6()
  let count = 0

  sixes.push(d6Num)

  for(let i = 0; i < sixes.length; i++) {
    count++
  }

  const img = document.querySelector("#d6-roll")
  const meanD6 = document.querySelector("#d6-rolls-mean")
  const medianD6 = document.querySelector("#d6-rolls-median")
  const modeD6 = document.querySelector("#d6-rolls-mode")
  
  if(count === 1) {
    meanD6.innerText = d6Num
    medianD6.innerText = d6Num
    modeD6.innerText = d6Num
  }
  else {
    meanD6.innerText = Math.trunc(mean(sixes))
    medianD6.innerText = median(sixes)
    modeD6.innerText = mode(sixes)
  }

  if(d6Num === 1) {
    img.src = "./images/d6/1.png"
  }
  if(d6Num === 2) {
    img.src = "./images/d6/2.png"
  }
  if(d6Num === 3) {
    img.src = "./images/d6/3.png"
  }
  if(d6Num === 4) {
    img.src = "./images/d6/4.png"
  }
  if(d6Num === 5) {
    img.src = "./images/d6/5.png"
  }
  if(d6Num === 6) {
    img.src = "./images/d6/6.png"
  }

})

//  D6 DICE ROLL END

//  DOUBLE D6 DICE ROLL START

const double6roll = document.querySelector("#double6roll")
double6roll.addEventListener("click", function () {

  let doubleNum1 = random6()
  let doubleNum2 = random6()
  let count = 0

  doubleSixes.push(doubleNum1 + doubleNum2)

  for(let i = 0; i < doubleSixes.length; i++) {
    count++
  }

  const img1 = document.querySelector("#double-d6-roll-1")
  const img2 = document.querySelector("#double-d6-roll-2")
  const meanDouble6 = document.querySelector("#double-d6-rolls-mean")
  const medianDouble6 = document.querySelector("#double-d6-rolls-median")
  const modeDouble6 = document.querySelector("#double-d6-rolls-mode")

  if(count === 1) {
    meanDouble6.innerText = doubleNum1 + doubleNum2
    medianDouble6.innerText = doubleNum1 + doubleNum2
    modeDouble6.innerText = doubleNum1 + doubleNum2
  }
  else {
    meanDouble6.innerText = Math.trunc(mean(doubleSixes))
    medianDouble6.innerText = median(doubleSixes)
    modeDouble6.innerText = mode(doubleSixes)
    console.log(`doubleSixes: ${doubleSixes}`)
  }

  //  DICE 1
  if(doubleNum1 === 1) {
    img1.src = "./images/d6/1.png"
  }
  if(doubleNum1 === 2) {
    img1.src = "./images/d6/2.png"
  }
  if(doubleNum1 === 3) {
    img1.src = "./images/d6/3.png"
  }
  if(doubleNum1 === 4) {
    img1.src = "./images/d6/4.png"
  }
  if(doubleNum1 === 5) {
    img1.src = "./images/d6/5.png"
  }
  if(doubleNum1 === 6) {
    img1.src = "./images/d6/6.png"
  }

  //  DICE 2
  if(doubleNum2 === 1) {
    img2.src = "./images/d6/1.png"
  }
  if(doubleNum2 === 2) {
    img2.src = "./images/d6/2.png"
  }
  if(doubleNum2 === 3) {
    img2.src = "./images/d6/3.png"
  }
  if(doubleNum2 === 4) {
    img2.src = "./images/d6/4.png"
  }
  if(doubleNum2 === 5) {
    img2.src = "./images/d6/5.png"
  }
  if(doubleNum2 === 6) {
    img1.src = "./images/d6/6.png"
  }

})

//  DOUBLE D6 DICE ROLL END

//  TWELVES DICE ROLL START

const d12roll = document.querySelector("#d12-roll")
d12roll.addEventListener("click", function () {

  let d12Num = random12()
  let count = 0

  twelves.push(d12Num)

  for(let i = 0; i < twelves.length; i++) {
    count++
  }

  const img = document.querySelector("#d12-roll")
  const meanD12 = document.querySelector("#d12-rolls-mean")
  const medianD12 = document.querySelector("#d12-rolls-median")
  const modeD12 = document.querySelector("#d12-rolls-mode")

  if(count === 1) {
    meanD12.innerText = d12Num
    meanD12.innerText = d12Num
    modeD12.innerText = d12Num
  }
  else {
    meanD12.innerText = Math.trunc(mean(twelves))
    medianD12.innerText = median(twelves)
    modeD12.innerText = mode(twelves)
    console.log(`twelves: ${twelves}`)
  }

  if(d12Num === 1) {
    img.src = "./images/numbers/1.png"
  }
  if(d12Num === 2) {
    img.src = "./images/numbers/2.png"
  }
  if(d12Num === 3) {
    img.src = "./images/numbers/3.png"
  }
  if(d12Num === 4) {
    img.src = "./images/numbers/4.png"
  }
  if(d12Num === 5) {
    img.src = "./images/numbers/5.png"
  }
  if(d12Num === 6) {
    img.src = "./images/numbers/6.png"
  }
  if(d12Num === 7) {
    img.src = "./images/numbers/7.png"
  }
  if(d12Num === 8) {
    img.src = "./images/numbers/8.png"
  }
  if(d12Num === 9) {
    img.src = "./images/numbers/9.png"
  }
  if(d12Num === 10) {
    img.src = "./images/numbers/10.png"
  }
  if(d12Num === 11) {
    img.src = "./images/numbers/11.png"
  }
  if(d12Num === 12) {
    img.src = "./images/numbers/12.png"
  }

})

//  TWELVES DICE ROLL END

//  TWENTIES DICE ROLL START

const d20roll = document.querySelector("#d20-roll")
d20roll.addEventListener("click", function () {

  let d20Num = random20()
  let count = 0

  twenties.push(d20Num)

  for(let i = 0; i < twenties.length; i++) {
    count++
  }

  const img = document.querySelector("#d20-roll")
  const meanD20 = document.querySelector("#d20-rolls-mean")
  const medianD20 = document.querySelector("#d20-rolls-median")
  const modeD20 = document.querySelector("#d20-rolls-mode")

  if(count === 1) {
    meanD20.innerText = d20Num
    medianD20.innerText = d20Num
    modeD20.innerText = d20Num
  }
  else {
    meanD20.innerText = Math.trunc(mean(twenties))
    medianD20.innerText = median(twenties)
    modeD20.innerText = mode(twenties)
    console.log(`twenties: ${twenties}`)
  }

  if(d20Num === 1) {
    img.src = "./images/numbers/1.png"
  }
  if(d20Num === 2) {
    img.src = "./images/numbers/2.png"
  }
  if(d20Num === 3) {
    img.src = "./images/numbers/3.png"
  }
  if(d20Num === 4) {
    img.src = "./images/numbers/4.png"
  }
  if(d20Num === 5) {
    img.src = "./images/numbers/5.png"
  }
  if(d20Num === 6) {
    img.src = "./images/numbers/6.png"
  }
  if(d20Num === 7) {
    img.src = "./images/numbers/7.png"
  }
  if(d20Num === 8) {
    img.src = "./images/numbers/8.png"
  }
  if(d20Num === 9) {
    img.src = "./images/numbers/9.png"
  }
  if(d20Num === 10) {
    img.src = "./images/numbers/10.png"
  }
  if(d20Num === 11) {
    img.src = "./images/numbers/11.png"
  }
  if(d20Num === 12) {
    img.src = "./images/numbers/12.png"
  }
  if(d20Num === 13) {
    img.src = "./images/numbers/13.png"
  }
  if(d20Num === 14) {
    img.src = "./images/numbers/14.png"
  }
  if(d20Num === 15) {
    img.src = "./images/numbers/15.png"
  }
  if(d20Num === 16) {
    img.src = "./images/numbers/16.png"
  }
  if(d20Num === 17) {
    img.src = "./images/numbers/17.png"
  }
  if(d20Num === 18) {
    img.src = "./images/numbers/18.png"
  }
  if(d20Num === 19) {
    img.src = "./images/numbers/19.png"
  }
  if(d20Num === 20) {
    img.src = "./images/numbers/20.png"
  }

})

//  TWENTIES DICE ROLL END

/****************** RESET FUNCTION *************************/

const reset = document.querySelector("#reset-button")
reset.addEventListener("click", function () {
  
  const d6 = document.querySelector("#d6-roll")
  const double1 = document.querySelector("#double-d6-roll-1")
  const double2 = document.querySelector("#double-d6-roll-2")
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
  d6Mean.innerText = "N/A"
  d6Median.innerText = "N/A"
  d6Mode.innerText = "N/A"
  double6Mean.innerText = "N/A"
  double6Median.innerText = "N/A"
  double6Mode.innerText = "N/A"
  d12Mean.innerText = "N/A"
  d12Median.innerText = "N/A"
  d12Mode.innerText = "N/A"
  d20Mean.innerText = "N/A"
  d20Median.innerText = "N/A"
  d20Mode.innerText = "N/A"

  sixes = []
  doubleSixes = []
  twelves = []
  twenties = []

})

/***************** RANDOM NUMBER SECTION *******************/

const random6 = () => {
  let dice6 = [1, 2, 3, 4, 5, 6]
  return dice6[Math.ceil(Math.random() * dice6.length - 1)]
}

const random12 = () => {
  let dice12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return dice12[Math.ceil(Math.random() * dice12.length - 1)]
}

const random20 = () => {
  let dice20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return dice20[Math.ceil(Math.random() * dice20.length - 1)]
}

/***************** MEAN MEDIAN MODE SECTION ****************/

const mean = arr => {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b)
    // console.log(nums)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

const mode = arr => {
  let mostFrequent = 0
  let count = 0
  let mode
  for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < i; j++) {
          if(arr[i] === arr[j]) {
              count++
          }
          if(count === 0) {
            mode = arr[0]
          }
          if(mostFrequent < count) {
              mostFrequent = count
              mode = arr[i]
          }
      }
      count = 0
  }
  return mode
}