// JS date object

// date objects are static. The clock is not running

let date = new Date();
console.log(date);

// new Date() -> gives the current full date (from the browser)
// new Date(date string) -> shows the date provided in the

// takes 00-00-00 as time
date = new Date("2022-5-21");
console.log(date);

// full date and time in the string
date = new Date("October 13, 2014 11:13:00");
console.log(date);

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// months count form 0 i.e. 0-Jan, 1-Feb

// new Date(year,month)
date = new Date(2015, 5);
console.log(date);
// new Date(year,month,day)
date = new Date(2012, 0, 11);
console.log(date);
// new Date(year,month,day,hours)
date = new Date(2012, 0, 11, 12);
console.log(date);
// new Date(year,month,day,hours,minutes)
date = new Date(2012, 0, 11, 12, 58);
console.log(date);
// new Date(year,month,day,hours,minutes,seconds)
date = new Date(2012, 0, 11, 12, 58, 44);
console.log(date);
// new Date(year,month,day,hours,minutes,seconds,ms)
date = new Date(2012, 0, 11, 12, 58, 44, 556);
console.log(date);

// new Date(milliseconds)
// only one value will be treated as ms
// JavaScript stores dates as number of milliseconds since January 01, 1970.
date = new Date(0); // jan 01 1970
console.log(date);

date = new Date(465445646544); // this large no. as ms will be converted into a date
console.log(date);

date = new Date(1.24554e14); // large no. = bigger date
console.log(date);

// toDateString()
// The toDateString() method converts a date to a more readable format:

date = new Date();

console.log(date.toDateString());

// toUTCString()
// The toUTCString() method converts a date to a string using the UTC standard:

date = new Date();
console.log(date.toUTCString());

// toISOString()
// The toISOString() method converts a date to a string using the UTC standard:
date = new Date();
console.log(date.toISOString());

// converting the date to ms
// date.parse
date = Date.parse("October 13, 2014 11:13:00");
console.log(date);
date = Date.parse(new Date()); // current date
console.log(date);

// get methods ==============================================

// The get method returns the specified information from an existing date objects.

// getFullYear()
date = new Date(2012, 5, 22);
console.log(date.getFullYear());

// getMonth()
date = new Date(2012, 5, 22);
console.log(date.getMonth()); // returns 0-11

// get month as name
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date = new Date(2012, 5, 22);
console.log(months[date.getMonth()]);

// getDate()
date = new Date();
console.log(date.getDate()); // returns 1-31

// getHour()
date = new Date();
console.log(date.getHours()); // returns 1-31

// getMinutes()
date = new Date();
console.log(date.getMinutes()); // returns 1-31

// getSeconds()
date = new Date();
console.log(date.getSeconds()); // returns 1-31

// getMilliseconds()
date = new Date();
console.log(date.getMilliseconds()); // returns 1-31

// getDay()
date = new Date();
console.log(date.getDay()); // returns 0-6, is js day starts form sunday, 0=sunday.

// The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970:

// getTime()
date = new Date();
console.log(date.getTime()); // in miliSeconds

// Date.now()
// returns the number or miliSeconds since Jan 1 1970

date = Date.now();
console.log(date);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

console.log(date / year); // returns no, of year passed since 1970

// JS Date set methods
// they are used to set Date i.e. date.setMonth(11), works like similar to getDate(), but instead set the specified value of the to an existing newDate;

// copied form W3schools
//~ ===  Name =========== Description ====================
//* new Date()	Creates a new Date object
//* constructor	Creates a new Date object
//* constructor	Returns the function that created the Date prototype
//* getDate()	Returns the day of the month (from 1-31)
//* getDay()	Returns the day of the week (from 0-6)
//* getFullYear()	Returns the year
//* getHours()	Returns the hour (from 0-23)
//* getMilliseconds()	Returns the milliseconds (from 0-999)
//* getMinutes()	Returns the minutes (from 0-59)
//* getMonth()	Returns the month (from 0-11)
//* getSeconds()	Returns the seconds (from 0-59)
//* getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
//* getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
//* getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
//* getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
//* getUTCFullYear()	Returns the year, according to universal time
//* getUTCHours()	Returns the hour, according to universal time (from 0-23)
//* getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
//* getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
//* getUTCMonth()	Returns the month, according to universal time (from 0-11)
//* getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
//* getYear()	Deprecated. Use the getFullYear() method instead
//* now()	Returns the number of milliseconds since midnight Jan 1, 1970
//* parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
//* prototype	Allows you to add properties and methods to an object
//* setDate()	Sets the day of the month of a date object
//* setFullYear()	Sets the year of a date object
//* setHours()	Sets the hour of a date object
//* setMilliseconds()	Sets the milliseconds of a date object
//* setMinutes()	Set the minutes of a date object
//* setMonth()	Sets the month of a date object
//* setSeconds()	Sets the seconds of a date object
//* setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970
//* setUTCDate()	Sets the day of the month of a date object, according to universal time
//* setUTCFullYear()	Sets the year of a date object, according to universal time
//* setUTCHours()	Sets the hour of a date object, according to universal time
//* setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time
//* setUTCMinutes()	Set the minutes of a date object, according to universal time
//* setUTCMonth()	Sets the month of a date object, according to universal time
//* setUTCSeconds()	Set the seconds of a date object, according to universal time
//* setYear()	Deprecated. Use the setFullYear() method instead
//* toDateString()	Converts the date portion of a Date object into a readable string
//* toGMTString()	Deprecated. Use the toUTCString() method instead
//* toISOString()	Returns the date as a string, using the ISO standard
//* toJSON()	Returns the date as a string, formatted as a JSON date
//* toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions
//* toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
//* toLocaleString()	Converts a Date object to a string, using locale conventions
//* toString()	Converts a Date object to a string
//* toTimeString()	Converts the time portion of a Date object to a string
//* toUTCString()	Converts a Date object to a string, according to universal time
//* UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time
//* valueOf()	Returns the primitive value of a Date object
