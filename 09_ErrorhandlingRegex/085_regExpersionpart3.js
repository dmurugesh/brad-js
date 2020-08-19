let re;
//literal characters 
re = /hello/;
re = /hello/i;

//Meta character symbols
re = /^h/i;  //Must start with h    
re = /world$/i;  //Must ends with h  
re = /^hello$/i;   //Must begin and end with hello
re = /^h.llo$/i;  //Matches any one character
re = /h*llo$/i;  //Matches any character 0 or  more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i;  //Escape characters


//Brackets [] - are basically character sets 
re = /gr[ae]y/i;  //Must be an a or e
re = /[GF]ray/i;  // Must be G or F
re = /[^GF]ray/i;  //Match anything except a G or F
re = /[A-Z]ray/;  //Any Uppercase letter
re = /[a-z]ray/;  //Any lowercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9][0-9]ray/;   // Match any digit

// Braces {} - Qualifiers 
re = /Hel{3}o/i;   // Must occur exactly {m amount} of times
re = /Hel{2,4}o/i;  // l can occur b/w 2 to 4 times
re =/Hel{2,}o/i;  // l sj=hould occue atlest 2 times 

// parathese () - Grouping
re = /^([0-9]x){3}$/;


//String to MAtch
const str = '3x3x3x3x3x';


//Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);