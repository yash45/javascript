// function check (a,b){
// let c = a>b?a:b
//   return (c)
// }

// function coswrk(cos){
//     let coswrk= check (80,70)+ cos
//     let avg = coswrk/2
//     let f = avg * (40/100)
//     return (f)
// }

// function exam(exm){
//     let g = exm*(60/100)
//     let exam = coswrk(70) + g
//     console.log(exam)
// }

// exam(99)





function check (a,b){
    let c = a>b?a:b
      return (c)
    }
    
    function coswrk(a , b , cos){
        let coswrk= check (a , b)+ cos
        let avg = coswrk/2
        let f = avg * (40/100)
        return (f)
    }
    
    function exam(a,b, cos ,exm){
        let g = exm*(60/100)
        let exam = coswrk(a,b,cos) + g
        console.log(exam)
    }
    
    exam(80 , 70 , 70, 99)