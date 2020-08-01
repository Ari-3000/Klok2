/* NOTE:
Please pardon the messiness (first code ever and whatnot…)—I prioritized
going from zero JavaScript knowledge to delivering the required deliverables within the first week,
and I also left the things I tried, etc.
Also, I thought Git was committing whenever I changed things, but I just learned that I have to actively commit…
I'll strive to continually improve my code, and I'll appreciate any suggestions,
especially regarding more accurate ways to do things, etc.
Thank you,
Ari
*/

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


var monthDays = days;
var monthName = "January";
if (k == 2) {
  	monthDays *= 31;
	monthName = "February";
} else if (k == 3) {
  	monthDays *= 31 + 29;
  		// ^ gotta fix leap years etc.
} else if (k == 4) {
  	monthDays *= 31 + 29 + 31;
} else if (k == 5) {
  	monthDays *= 31 + 29 + 31 + 30;
} else if (k == 6) {
  	monthDays *= 31 + 29 + 31 + 30 + 31;
} else if (k == 7) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30;
	monthName = "July";
} else if (k == 8) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31;
	monthName = "August";
} else if (k == 9) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
} else if (k == 10) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
} else if (k == 9) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
} else if (k == 10) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
} else if (k == 11) {
  	monthDays *= 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;
}

var suffix = "th";
if (n == 2 || n == 22) {
  	suffix = "nd";
} else if (n == 3 || n ==23) {
  	suffix = "rd";
} else if (n == 1 || n == 21 || n == 31) {
  	suffix = "st";
}

/*
document.write("hours: ");document.write(hours);document.write(" ");document.write(monthDays);document.write(" ");document.write(n);document.write(" ");
//^ gotta fix math & 30 d months
document.write("t2: ");document.write(t2);
          // Arnold Schwarzenegger / best movie EVAR (not the dumb blockbuster it seems) / milliseconds into today
*/

//h = 2;

//var x = Date(y, k, n, 0, 0, 0);
//document.write(x);
//t3 = t - x;
//document.write(t3);
//document.write("n: ");document.write(n);document.write("monthName: ");document.write(monthName);document.write("y: ");document.write(y);document.write(" ");

var t2 = t - ((y - 1970) * years - .5*days) - monthDays  - ((n - 1) * days);//(k * (30 * days))


//var z = varDate.now();
//document.write(z);

h = Math.floor(t2 / hours);
m = Math.floor((t2 % hours) / minutes);
s = Math.floor(((t2 % hours) % minutes) / 1000);


// *** Attribution: googled "javascript weekday" expecting a function (in order not to do…
//     …something similar to (and as inelegant as) what I did for monthDays), and this…
//     …exact example came up, and I figured it wouldn't make sense not to use it:
var dd = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var w = weekday[dd.getDay()];
// end Attribution

			
function seconds() {
	var hVar = document.getElementById("hours");
	var mVar = document.getElementById("minutes");
	var sVar = document.getElementById("seconds");
	var moVar = document.getElementById("monthHTML");
	var dVar = document.getElementById("dayHTML");
	var wdVar = document.getElementById("wkdayHTML");
	var sffxVar = document.getElementById("sffxHTML");
	if (s < 59) {
  		s++;
  		hVar.innerHTML = (h < 10 ? '0' : '') + h;
  		mVar.innerHTML = (m < 10 ? '0' : '') + m;
  		sVar.innerHTML = (s < 10 ? '0' : '') + s;
  		moVar.innerHTML = monthName;
  		dVar.innerHTML = n;
  		wdVar.innerHTML = w;
  		sffxVar.innerHTML = suffix;
  	} else {
  		if (m <59) {
  			s = s - 60;
  			m++;
	  		s++;
  			hVar.innerHTML = (h < 10 ? '0' : '') + h;
  			mVar.innerHTML = (m < 10 ? '0' : '') + m;
  			sVar.innerHTML = (s < 10 ? '0' : '') + s;
  		moVar.innerHTML = monthName;
  		dVar.innerHTML = n;
  		wdVar.innerHTML = w;
  		sffxVar.innerHTML = suffix;
  		} else {
  			m = m - 60;
  			h++;
  			m++;
  			s++;
  			hVar.innerHTML = (h < 10 ? '0' : '') + h;
  			mVar.innerHTML = (m < 10 ? '0' : '') + m;
  			sVar.innerHTML = (s < 10 ? '0' : '') + s;
  		moVar.innerHTML = monthName;
  		dVar.innerHTML = n;
  		wdVar.innerHTML = w;
  		sffxVar.innerHTML = suffix;
  		}
  	}
}
			
setInterval(seconds, 1000);
//*/