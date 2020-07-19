// WINDOWS METHODS / OBJECTS / PROPERTIES

console.log(123);

// Alert
// alert('Hello World')

// Prompt
// const input = prompt();
// alert(input);

// Confirm 
// if(confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;
//Outerheight
val = window.outerHeight;
val = window.outerWidth;

// INNNER HEIGHT
val = innerHeight;
val = innerWidth;

//scroll points
val = scrollY;
val = scrollX;

//Location
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = 'https://www.google.com/';

//Reload
// window.location.reload();

//Histroy Object
// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);