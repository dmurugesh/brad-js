let obj1 = {
    name: "abc",
    age: 20
}

let obj2 = {
    name: "abc",
    age: 20
}

let obj3 = obj1;

if(obj1 === obj2) {
    console.log("obj1 is equal to obj2");
}

if (obj1 === obj3) {
    console.log("obj1 and obj3 are equal");
}

function objectCompare(x,y) {
    let cond = true;
    if(x.name !== y.name){
        cond = false;
    } 
    if(x.age !== y.age) {
        cond = false;
    }
    return cond;
}

if(objectCompare(obj1, obj2) === true) {
    console.log("Values of obj1 and obj2 are equal");
} 