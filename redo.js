function check (a,b){
    let c = a>b?a:b;
    return (c)
}

function coswrk(){
    let coswrk = check(80,70) + 70
    let avg = coswrk/2;
    let d = avg*(40/100)
    console.log(d)
    return (d) 
}

function exam(exm){
    let f = exm*(60/100)
    let exam = coswrk() + f 
    console.log (f)
}

exam(90)