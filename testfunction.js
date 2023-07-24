function randomNumber (){
    return Math.floor(Math.random() * 10)
}

function testRandomNumber ()
{
    let x = randomNumber()
    if (isNaN(x)) throw "Return is Not a Number";
    else (console.log(x));
}

testRandomNumber();
