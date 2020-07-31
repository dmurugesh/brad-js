
//Given Array
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

var i = 0; 
var output;
var highScore = 0;
var bestSolutions = [];
// while (i < scores.length) {
//     output = "Bubble solution #" + i + " score:" + scores[i];
//     document.write(output);
//     document.write("<br>");
//     i = i + 1;
// }

//using for loop

for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    document.write(output);
    document.write("<br>");

    if(scores[i] > highScore){
        highScore = scores[i];
    }
}

for (var i = 0; i < scores.length; i++) {
    if(scores[i] == highScore) {
        bestSolutions.push(i);
    }
}

document.write("<br>");
document.write("bubles tests: " + scores.length);
document.write("<br>");
document.write("Highest bubble score: " + highScore);
document.write("<br>");
document.write("Solutions with the highest score: " + bestSolutions);