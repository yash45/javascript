function addNums(){
    let num1 = 30;
    let num2 = 60;
    let num3 = 100;
    let num4 = num1 + num2 + num3;
    console.log("Part A\t"+num4)
    
    return num4;
}

function multNums(){
    let multi = addNums() * 2
    console.log("The Multiple is\t"+multi)
    return multi;
}

function modNums(){
    let modNums = multNums() % 15
 console.log("The Remainder\t"+modNums)
 

}
addNums();
multNums();
modNums();
 
function yash(a,b,c)
    {
        d = a+b+c
        
        return d
    }
    yash(30,60,100)

function yash2(){
    let yash2 = yash(30,60,100) * 2
    
    return (yash2)
}

function yash3(){
    let yash3 = yash2() % 15
    console.log("the answer of c is:\t"+yash3)
    return (yash3)
}
function yash4(){
    let yash4 = yash2()-yash3()
    console.log(yash4)
}

     yash2()
     yash3()
     yash4()
