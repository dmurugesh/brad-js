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


//String to MAtch
const str = 'gray?';


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