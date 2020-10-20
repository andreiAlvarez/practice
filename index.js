// solution 1

function howManyDalmatians(number){
  if (number <= 10) {
    return "Hardly any"
  } else if (number <= 50) {
    return "More than a handful!"
  } else if (number === 101) {
    return "101 DALMATIANS!!!"
  } else {
    return "Woah that's a lot of dogs!" 
  }
}

// solution 2

howManyDalmatians = n => n <= 10 ? "Hardly any" : n <= 50 ? "More than a handful!" : n == 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!"
