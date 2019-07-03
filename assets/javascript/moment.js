function startTime() {
    var today = new Date();
 
    var hours = today.getHours();
   
    var m = today.getMinutes();

    m = checkTime(m);
  
    document.getElementById('txt').innerHTML =    hours + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
