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


//Shorthand character classes
re = /\w/;  //Word character - alphanummeric or _
re = /\w+/;  //* does not match special character alone
re = /\W/;  //NON word character matches in the string
re = /\d+/;  //MAtch any digit 0 or more times
re = /\D/;   //Match any non-digit
re = /\s/;   //Match Whitespace character
re = /\S/;   //Match Non Whitespace character
re = /Hell\b/i;   /// Word boundary



//ASsertions 
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if y is not followed by x

//String to MAtch
const str = 'asdasdasdasdadsxasdasdy';

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