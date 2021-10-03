const sum = (a,b) => {

return a+b
}
module.exports={sum};




const fromEuroToDollar=(a)=>
{
    let valor = a * 1.2

return valor
}
module.exports={sum,fromEuroToDollar};


const fromDollarToYen=(a)=>
{
    let valor = a * 127.9

return valor
}

module.exports={sum,fromEuroToDollar,fromDollarToYen};


const fromYenToPound=(a)=>
{
    let valor = a * 0.8

return valor
}

module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};