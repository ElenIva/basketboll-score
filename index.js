let tbl1 = document.getElementById("tablo-1")
let tbl2 = document.getElementById("tablo-2")
let header = document.getElementById("header")
let count1 = 0
let count2 = 0
let result = ""

function score() {
    if ( count1 > count2) {
        result = "HOME WINS";
      } else  if (count1 < count2){
        result = "GUESTS WINS";
      }
      else {
        result = "SCORE"
      }
      header.textContent = result
}

function add1(a) {
    count1 += a
    tbl1.textContent = count1
    score()
}

function add2(a) {
    count2 += a
    tbl2.textContent = count2
    score()
}

function reset() {
    count1 = 0
    count2 = 0
    tbl1.textContent = count1
    tbl2.textContent = count2
    score()
}