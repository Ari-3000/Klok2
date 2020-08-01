let s = 0; m = 0; h = 0;


var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365.25;  // milliseconds in a year (4 lines above to calculate this); added .25 for leap years
var d = new Date();
var t = d.getTime();        // milliseconds since 1970-01-01

var e = new Date();
var n = e.getDate();        // day of the month

var f = new Date();
var k = f.getMonth()+1;     // numerical month

var g = new Date();
var y = g.getFullYear();    // year (YYYY)

//document.write(t);
//document.write(k);


var monthDays = 0;
if (k == 1) {
  	monthDays = 31;
} else if (k == 2) {
  	monthDays = 31 + 29;
  		// ^ gotta fix leap years etc.
} else if (k == 3) {
  	monthDays = 31 + 29 + 31;
} else if (k == 4) {
  	monthDays = 31 + 29 + 31 + 30;
} else if (k == 5) {
  	monthDays = 31 + 29 + 31 + 30 + 31;
} else if (k == 6) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30;
} else if (k == 7) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31;
} else if (k == 8) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
} else if (k == 9) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
} else if (k == 10) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
} else if (k == 11) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
} else if (k == 12) {
  	monthDays = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
}

var t2 = t - ((y - 1970) * years) - monthDays  - (n * days);//(k * (30 * days))
//^ gotta fix math & 30 d months
document.write(t2);
          // Arnold Schwarzenegger / best movie EVAR (not the dumb blockbuster it seems) / milliseconds into today
//h = 2;

//var x = Date(y, k, n, 0, 0, 0);
//document.write(x);
//t3 = t - x;
//document.write(t3);



//var z = varDate.now();
//document.write(z);




			
function seconds() {
	var hVar = document.getElementById("hours");
	var mVar = document.getElementById("minutes");
	var sVar = document.getElementById("seconds");
	if (s < 59) {
  		s++;
  		hVar.innerHTML = (h < 10 ? '0' : '') + h;
  		mVar.innerHTML = (m < 10 ? '0' : '') + m;
  		sVar.innerHTML = (s < 10 ? '0' : '') + s;
  	} else {
  		if (m <59) {
  			s = s - 60;
  			m++;
	  		s++;
  			hVar.innerHTML = (h < 10 ? '0' : '') + h;
  			mVar.innerHTML = (m < 10 ? '0' : '') + m;
  			sVar.innerHTML = (s < 10 ? '0' : '') + s;
  		} else {
  			m = m - 60;
  			h++;
  			m++;
  			s++;
  			hVar.innerHTML = (h < 10 ? '0' : '') + h;
  			mVar.innerHTML = (m < 10 ? '0' : '') + m;
  			sVar.innerHTML = (s < 10 ? '0' : '') + s;
  		}
  	}
}
			
setInterval(seconds, 1000);
//*/