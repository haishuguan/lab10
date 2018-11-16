var start = new Date();
var time1 = start.getTime();
function stopTime() {
  var end = new Date();
  var time2 = end.getTime();
  var time = time2 - time1;
  var second = time / 1000;
  var formated = "You have been on the page for " + second + " seconds";
  var alert1 = alert(formated);
  console.log(alert1);
}
