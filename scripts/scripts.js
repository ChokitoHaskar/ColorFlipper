let baseColor = "#FFFFFF";
let colors = [
  "BAA7B0",
  "B2ABBF",
  "B1B5C8",
  "BFD5E2",
  "C7EBF0",
  "27FB6B",
  "0A2E36",
  "14CC60",
  "036D19",
  "09A129",
  "2B0504",
  "010001",
  "874000",
  "BC5F04",
  "F4442E",
];

$(document).ready(function () {
  $("#colorCode").text(baseColor);
});

$("#changeColor").click(function () {
  let colorPicked = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", "#" + colors[colorPicked]);
  $("#colorCode").text("#" + colors[colorPicked]);
});

$("#resetColor").click(function () {
  $("body").css("background-color", baseColor);
  $("#colorCode").text(baseColor);
});
