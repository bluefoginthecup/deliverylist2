var myDate = "2022-09-05";
myDate = myDate.split("-");
var newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
console.log(new Date(newDate).getTime());