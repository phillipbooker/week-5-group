var days = [31];


for (var i = 1; i <= 30; i++) {
  days.push(i);
}

for (var i = 1; i <= 4; i++) {
  days.push(i);
}

console.log(days);

$("#box-1-1").text(days[0]);

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= 7; j++) {
    $("#box-" + i + "-" + j).text(days[((i - 1) * 7) + j - 1])
  }
}