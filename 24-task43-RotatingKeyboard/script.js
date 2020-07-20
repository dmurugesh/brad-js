// assigning variable 
const tapBtn = document.querySelector('.tap');
const screen = document.querySelector('.input-container');
const inputEl = document.getElementById('input-text');

// Assigning variables
let tap = 0;
let display = [];
let display2 = [];
let dis;
var isCapsOn = false;
var cappsTapped = 0;
let t1, t2, t3, t4, t5, t6;

// To record each and every click function
const clicked = () => {
    if (tap === 0) {
        backgroundSec();
        console.log(tap);
        tap++;
    } else {
        timerCan();
        console.log(tap);
        tap++;
    }
}

//Add Evnetlistiner
tapBtn.addEventListener("click", clicked);


//Function BackgroundSec is used to select elements in rowise
function backgroundSec() {
    document.querySelector('.one').style.backgroundColor = 'Green';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t1 = setTimeout("backgroundSec2()", 2000);
}

function backgroundSec2() {
    document.querySelector('.two').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t2 = setTimeout("backgroundSec3()", 2000);
}

function backgroundSec3() {
    document.querySelector('.three').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t3 = setTimeout("backgroundSec4()", 2000);
}

function backgroundSec4() {
    document.querySelector('.four').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t4 = setTimeout("backgroundSec5()", 2000);
}

function backgroundSec5() {
    document.querySelector('.five').style.backgroundColor = 'green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t5 = setTimeout("backgroundSec6()", 2000);
}

function backgroundSec6() {
    document.querySelector('.six').style.backgroundColor = 'green';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    t6 = setTimeout("backgroundSec()", 2000);
}

function backgroundUpSec() {
    document.querySelector('.one').style.backgroundColor = 'Green';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t1 = setTimeout("backgroundUpSec6()", 2000);
}

function backgroundUpSec2() {
    document.querySelector('.two').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t2 = setTimeout("backgroundUpSec()", 2000);
}

function backgroundUpSec3() {
    document.querySelector('.three').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t3 = setTimeout("backgroundUpSec2()", 2000);
}

function backgroundUpSec4() {
    document.querySelector('.four').style.backgroundColor = 'Green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t4 = setTimeout("backgroundUpSec3()", 2000);
}

function backgroundUpSec5() {
    document.querySelector('.five').style.backgroundColor = 'green';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    document.querySelector('.six').style.backgroundColor = 'transparent';
    t5 = setTimeout("backgroundUpSec4()", 2000);
}

function backgroundUpSec6() {
    document.querySelector('.six').style.backgroundColor = 'green';
    document.querySelector('.five').style.backgroundColor = 'transparent';
    document.querySelector('.one').style.backgroundColor = 'transparent';
    document.querySelector('.two').style.backgroundColor = 'transparent';
    document.querySelector('.three').style.backgroundColor = 'transparent';
    document.querySelector('.four').style.backgroundColor = 'transparent';
    t6 = setTimeout("backgroundUpSec5()", 2000);
}


// 2 
//TimerCan is use to clear the timeout function 
function timerCan() {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
    clearTimeout(t4);
    clearTimeout(t5);
    clearTimeout(t6);
    rowSelection();
}

function rowSelection() {
    console.log("inside if")
    if (document.querySelector('.one').style.backgroundColor === 'green') {
        document.querySelector('.one').style.backgroundColor = 'transparent';
        v = '.one'
        backgroundRowSec(v);
        console.log("first");
    } else if (document.querySelector('.two').style.backgroundColor === 'green') {
        document.querySelector('.two').style.backgroundColor = 'transparent';
        v = '.two'
        backgroundRowSec(v);
        console.log("second");
    } else if (document.querySelector('.three').style.backgroundColor === 'green') {
        document.querySelector('.three').style.backgroundColor = 'transparent';
        v = '.three'
        backgroundRowSec(v);
        console.log("third");
    } else if (document.querySelector('.four').style.backgroundColor === 'green') {
        document.querySelector('.four').style.backgroundColor = 'transparent';
        v = '.four'
        backgroundRowSec(v);
        console.log("fourth");
    } else if (document.querySelector('.five').style.backgroundColor === 'green') {
        document.querySelector('.five').style.backgroundColor = 'transparent';
        v = '.five'
        backgroundRowSec(v);
        console.log("fifth");
    } else if (document.querySelector('.six').style.backgroundColor === 'green') {
        document.querySelector('.six').style.backgroundColor = 'transparent';
        v = '.six'
        backgroundRowSec(v);
        console.log("six");
    } else {
        console.log("inside else")
        selectElement();
    }
}

//Select ELement
let x = ['.one', '.two', '.three', '.four', '.five', '.six']

function selectElement() {
    x.forEach((data) => {
        if (document.querySelector(data).style.backgroundColor === 'transparent') {
            selectWord(data);
        }
    });
}

//selectword

function selectWord(v) {
    if (document.querySelector(v).querySelector('.a').style.backgroundColor === 'red') {
        let before = v;
        console.log('l');
        displayBeRow(before);
        tap = 0;
    } else if (document.querySelector(v).querySelector('.b').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            console.log("inside condition")
            display.push(document.querySelector(v).querySelector('.b').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.b').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.b').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.b').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }

        // displayEl();
    } else if (document.querySelector(v).querySelector('.c').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.c').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.c').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.c').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.c').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }

        // displayEl();
    } else if (document.querySelector(v).querySelector('.d').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.d').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.d').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.d').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.d').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }
        // displayEl();
    } else if (document.querySelector(v).querySelector('.e').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.e').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.e').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.e').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.e').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }

        // displayEl();
    } else if (document.querySelector(v).querySelector('.f').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.f').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.f').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.f').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.f').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }
        // displayEl();
    } else if (document.querySelector(v).querySelector('.g').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.g').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.g').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.g').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.g').children[0].innerHTML.toUpperCase();
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }
        // displayEl();
    } else if (document.querySelector('.six').querySelector('.h').style.backgroundColor === 'red') {
        console.log("caps on")
        if (cappsTapped == 0) {
            isCapsOn = true;
            document.querySelector('.six').querySelector('.h').style.borderWidth = "3px";
            document.querySelector('.six').querySelector('.h').style.borderColor = "red";
            upperCaseAlpha();
        }
        else {
            isCapsOn = false;
            lowerCaseAlpha();
            document.querySelector('.six').querySelector('.h').style.borderColor = "black";
        }

        // display.push(document.querySelector(v).querySelector('.h').children[0].innerHTML);
        // console.log(document.querySelector(v).querySelector('.h').children[0].innerHTML);
        // displayEl();
    } else if (document.querySelector(v).querySelector('.h').style.backgroundColor === 'red') {
        if (isCapsOn == false) {
            cappsTapped = 0;
            display.push(document.querySelector(v).querySelector('.h').children[0].innerHTML);
            display2.push(document.querySelector(v).querySelector('.h').children[0].innerHTML);
            dis = display.join("");
            inputEl.value = dis;
            console.log(document.querySelector(v).querySelector('.h').children[0].innerHTML);
            document.getElementById("input-text").focus();
        }
        else {
            cappsTapped = 1;
            var str = document.querySelector(v).querySelector('.h').children[0].innerHTML.toUpperCase()
            display.push(str);
            display2.push(str);
            dis = display.join("");
            inputEl.value = dis;
            console.log(str);
            document.getElementById("input-text").focus();
        }
        // displayEl();
    } else if (document.querySelector(v).querySelector('.i').style.backgroundColor === 'red') {
        let space = ` `;
        display.push(space);
        display2.push(space);
        console.log(document.querySelector(v).querySelector('.i').children[0].innerHTML);
        dis = display.join("");
        inputEl.value = dis;
        document.getElementById("input-text").focus();
        // displayEl();
    } else if (document.querySelector(v).querySelector('.j').style.backgroundColor === 'red') {
        dis = display.join("")
        inputEl.value = (dis.slice(0, -1));
        display = [];
        display.push(inputEl.value);
        document.getElementById("input-text").focus();
    } else if (document.querySelector(v).querySelector('.k').style.backgroundColor === 'red') {
        let enter = String.fromCharCode(13);
        display.push(enter);
        display2.push(enter);
        dis = display.join("");
        inputEl.value = dis;
        document.getElementById("input-text").focus();
        console.log(document.querySelector(v).querySelector('.k').children[0].innerHTML);
    } else if (document.querySelector(v).querySelector('.l').style.backgroundColor === 'red') {
        let next = v;
        console.log('l');
        displayNextRow(next);
        tap = 0;
        // console.log(document.querySelector(v).querySelector('.l').children[0].innerHTML);
    }
    // console.log('d',display);
}

//Use to display the uppcase characters
function upperCaseAlpha() {
    // document.querySelector('.six').querySelector('.h').style.backgroundColor = "yellow";
    document.querySelector('.one').querySelector('.b').children[0].innerHTML = `A`;
    document.querySelector('.one').querySelector('.c').children[0].innerHTML = `B`;
    document.querySelector('.one').querySelector('.d').children[0].innerHTML = `C`;
    document.querySelector('.one').querySelector('.e').children[0].innerHTML = `D`;
    document.querySelector('.one').querySelector('.f').children[0].innerHTML = `E`;
    document.querySelector('.one').querySelector('.g').children[0].innerHTML = `F`;
    document.querySelector('.one').querySelector('.h').children[0].innerHTML = `G`;
    document.querySelector('.two').querySelector('.b').children[0].innerHTML = `H`;
    document.querySelector('.two').querySelector('.c').children[0].innerHTML = `I`;
    document.querySelector('.two').querySelector('.d').children[0].innerHTML = `J`;
    document.querySelector('.two').querySelector('.e').children[0].innerHTML = `K`;
    document.querySelector('.two').querySelector('.f').children[0].innerHTML = `L`;
    document.querySelector('.two').querySelector('.g').children[0].innerHTML = `M`;
    document.querySelector('.two').querySelector('.h').children[0].innerHTML = `N`;
    document.querySelector('.three').querySelector('.b').children[0].innerHTML = `O`;
    document.querySelector('.three').querySelector('.c').children[0].innerHTML = `P`;
    document.querySelector('.three').querySelector('.d').children[0].innerHTML = `Q`;
    document.querySelector('.three').querySelector('.e').children[0].innerHTML = `R`;
    document.querySelector('.three').querySelector('.f').children[0].innerHTML = `S`;
    document.querySelector('.three').querySelector('.g').children[0].innerHTML = `T`;
    document.querySelector('.three').querySelector('.h').children[0].innerHTML = `U`;
    document.querySelector('.four').querySelector('.b').children[0].innerHTML = `V`;
    document.querySelector('.four').querySelector('.c').children[0].innerHTML = `W`;
    document.querySelector('.four').querySelector('.d').children[0].innerHTML = `X`;
    document.querySelector('.four').querySelector('.e').children[0].innerHTML = `Y`;
    document.querySelector('.four').querySelector('.f').children[0].innerHTML = `Z`;
}

// use to display lower case characters
function  lowerCaseAlpha() {
    document.querySelector('.one').querySelector('.b').children[0].innerHTML = `a`;
    document.querySelector('.one').querySelector('.c').children[0].innerHTML = `b`;
    document.querySelector('.one').querySelector('.d').children[0].innerHTML = `c`;
    document.querySelector('.one').querySelector('.e').children[0].innerHTML = `d`;
    document.querySelector('.one').querySelector('.f').children[0].innerHTML = `e`;
    document.querySelector('.one').querySelector('.g').children[0].innerHTML = `f`;
    document.querySelector('.one').querySelector('.h').children[0].innerHTML = `g`;
    document.querySelector('.two').querySelector('.b').children[0].innerHTML = `h`;
    document.querySelector('.two').querySelector('.c').children[0].innerHTML = `i`;
    document.querySelector('.two').querySelector('.d').children[0].innerHTML = `j`;
    document.querySelector('.two').querySelector('.e').children[0].innerHTML = `k`;
    document.querySelector('.two').querySelector('.f').children[0].innerHTML = `l`;
    document.querySelector('.two').querySelector('.g').children[0].innerHTML = `m`;
    document.querySelector('.two').querySelector('.h').children[0].innerHTML = `n`;
    document.querySelector('.three').querySelector('.b').children[0].innerHTML = `o`;
    document.querySelector('.three').querySelector('.c').children[0].innerHTML = `p`;
    document.querySelector('.three').querySelector('.d').children[0].innerHTML = `q`;
    document.querySelector('.three').querySelector('.e').children[0].innerHTML = `r`;
    document.querySelector('.three').querySelector('.f').children[0].innerHTML = `s`;
    document.querySelector('.three').querySelector('.g').children[0].innerHTML = `t`;
    document.querySelector('.three').querySelector('.h').children[0].innerHTML = `u`;
    document.querySelector('.four').querySelector('.b').children[0].innerHTML = `v`;
    document.querySelector('.four').querySelector('.c').children[0].innerHTML = `w`;
    document.querySelector('.four').querySelector('.d').children[0].innerHTML = `x`;
    document.querySelector('.four').querySelector('.e').children[0].innerHTML = `y`;
    document.querySelector('.four').querySelector('.f').children[0].innerHTML = `z`;
}


function displayBeRow(before) {
    if (v === '.one') {
        document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec6();
        timerClearRow();
    } else if (v === '.two') {
        document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec();
        timerClearRow();
    } else if (v === '.three') {
        document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec2();
        timerClearRow();
    } else if (v === '.four') {
        document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec3();
        timerClearRow();
    } else if (v === '.five') {
        ; document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec4();
        timerClearRow();
    } else if (v === '.six') {
        document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
        backgroundUpSec5();
        timerClearRow();
    }
}


function displayNextRow(v) {
    if (v === '.one') {
        document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec2();
        timerClearRow();
    } else if (v === '.two') {
        document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec3();
        timerClearRow();
    } else if (v === '.three') {
        document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec4();
        timerClearRow();
    } else if (v === '.four') {
        document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec5();
        timerClearRow();
    } else if (v === '.five') {
        ; document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec6();
        timerClearRow();
    } else if (v === '.six') {
        document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
        backgroundSec();
        timerClearRow();
    }
}

function timerClearRow() {
    clearTimeout(t6);
    clearTimeout(t7);
    clearTimeout(t8);
    clearTimeout(t9);
    clearTimeout(t10);
    clearTimeout(t11);
    clearTimeout(t12);
    clearTimeout(t13);
    clearTimeout(t14);
    clearTimeout(t15);
    clearTimeout(t16);
    clearTimeout(t17);
}


//backgroundrowsec

function backgroundRowSec(v) {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'red';
    document.querySelector(v).querySelector('.l').style.backgroundColor = 'cadetblue';
    t6 = setTimeout("backgroundRowSec2()", 1000);
}

function backgroundRowSec2() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'red';
    t7 = setTimeout("backgroundRowSec3()", 1000);
}

function backgroundRowSec3() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'red';
    t8 = setTimeout("backgroundRowSec4()", 1000);
}

function backgroundRowSec4() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'red';
    t9 = setTimeout("backgroundRowSec5()", 1000);
}

function backgroundRowSec5() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'red';
    t10 = setTimeout("backgroundRowSec6()", 1000);
}

function backgroundRowSec6() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'red';
    t11 = setTimeout("backgroundRowSec7()", 1000);
}

function backgroundRowSec7() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'red';
    t12 = setTimeout("backgroundRowSec8()", 1000);
}

function backgroundRowSec8() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.h').style.backgroundColor = 'red';
    t13 = setTimeout("backgroundRowSec9()", 1000);
}

function backgroundRowSec9() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.h').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.i').style.backgroundColor = 'red';
    t14 = setTimeout("backgroundRowSec10()", 1000);
}

function backgroundRowSec10() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.h').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.i').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.j').style.backgroundColor = 'red';
    t15 = setTimeout("backgroundRowSec11()", 1000);
}

function backgroundRowSec11() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.h').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.i').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.j').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.k').style.backgroundColor = 'red';
    t16 = setTimeout("backgroundRowSec12()", 1000);
}
function backgroundRowSec12() {
    document.querySelector(v).style.backgroundColor = 'transparent';
    document.querySelector(v).querySelector('.a').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.b').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.c').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.d').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.e').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.f').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.g').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.h').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.i').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.j').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.k').style.backgroundColor = 'cadetblue';
    document.querySelector(v).querySelector('.l').style.backgroundColor = 'red';
    t17 = setTimeout("backgroundRowSec(v)", 1000);
}
