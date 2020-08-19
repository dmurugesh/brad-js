const user = {email: 'damurugeshkhanna@gmail.com'}


try{
    // //Produce a reference Error
    // myfunction();

    //Produce a Type Error
    // null.myfunction();

    //Will produce syntax error
    // console.log(eval('hello world')) ;

    //Will produce URIError
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'user has no name';
        throw new SyntaxError('User has no name');
    }
} catch(e) {
     console.log(`User Error: ${e.message}`);
    //  console.log(e.message);
    //  console.log(e.name);
    //  console.log(e instanceof ReferenceError);
} finally {
    console.log('finally runs regardless of result...');
}

console.log('Program continues...');