var floors = 100;
var eggs = 2;
var breakingPoint = 16;
var foundBreakingPoint;

var methodOne = function () {
  var checks = 0;
  for (var i = eggs; i <= floors; i+=eggs) {
    checks++
    if (i >= breakingPoint) {
      findPoint(i)
      break;
    }
  }
  function findPoint(i) {
    for (var j = 0; j <= eggs; j++) {
      if (i - j === breakingPoint) {
        foundBreakingPoint = i - j;
        checks++
      }
    }
  }
  console.log(breakingPoint, foundBreakingPoint, checks);
}

var methodTwo = function (by, floor) {
  var lastGoodPoint;
  var goBy = by;
  var checks = 0;
  if (floor >= breakingPoint) {
    findPoint(i)
  } else {

  }
  for (var i = goBy; i <= floors; i+=goBy) {
    checks++
    if (i >= breakingPoint) {

      break;
    }
    lastGoodPoint = i;
  }
  function findPoint(i) {
    for (var j = 0; j <= i - lastGoodPoint; j++) {
      checks++
      if (lastGoodPoint + j === breakingPoint) {
        foundBreakingPoint = lastGoodPoint + j;
        break;
      }
    }
  }
  console.log(breakingPoint, foundBreakingPoint, checks);
}



methodTwo();
