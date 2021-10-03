// importar funcion suma

//const {sum} = require('./app.js');

// inicia mi primera prueba

test('14 + 9 es igual a 23',()=>{
    
const {sum} = require('./app.js');
//aqui dentro se llama a la funcion y se le pasa los valores que sumara
let total = sum(14,9)

expect(total).toBe(23);
});

test('3.5 euros deberia ser 4.2 dollars', function()
{
    const {fromEuroToDollar} = require('./app.js')

expect(fromEuroToDollar(3.5)).toBe(4.2);

})

test('3.5 euros deberia ser 447,65 yenes', function()
{
const {fromDollarToYen} = require('./app.js')

expect(fromDollarToYen(3.5)).toBe(447.65000000000003);

});

test('3.5 euros deberia ser 2,8 libras', function()
{
const {fromYenToPound} = require('./app.js')

expect(fromYenToPound(3.5)).toBe(2.8000000000000003);

});
