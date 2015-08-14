var floors = 100;
var result = {};

function findPoint(by, floor, checks, breakingPoint) {
  checks++
  if (floor + 1 === breakingPoint) {
    var foundBreakingPoint = floor + 1;
    result[by] = result[by] || []
    result[by].push({breakingPoint: breakingPoint, checks: checks})
  } else {
    findPoint(by, floor + 1, checks, breakingPoint)
  }
}

var findFloor = function (by, floor, checks, breakingPoint) {
  checks++
  if (floor + by >= breakingPoint) {
    findPoint(by, floor, checks, breakingPoint)
  } else {
    findFloor(by, floor + by, checks, breakingPoint)
  }
}

for (var x = 1; x <= floors; x++) {
  for (var i = 1; i <= floors; i++) {
    findFloor(x, 0, 0, i);
  }
}

var averages = {};
for (var key in result) {
  averages[key] = (result[key].reduce(function (curr, prev) {
    return curr + prev.checks
  }, 0) / floors)
}

console.log(100/14)
