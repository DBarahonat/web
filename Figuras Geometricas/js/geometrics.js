

//funcion Flecha Perimetro
const perimSquare = (side) => side *4;

//Funcion Flecha Area
const AreaSquare = (side) => side*side 
/*
//Funcion Flecha Lados
const caluloLado =(lado1,lado2,lado3) => lado1+lado2+lado3;

//Funcion Flecha Area
const AreaTriangulo=(base,altura)=> (base*altura)/2
*/
/**
 * área y perímetro de triangulo 
 * ====================================================
*/
 
const perimTriangle = (side1, side2, base) => side1 + side2 + base;
const areaTriangle = (base, height) => (base * height) / 2;
//
console.log(caluloLado(5,5,5))
console.log(AreaTriangulo(2,2))


//Area y Perimetro de un cuadrado 
function CalculoPerimetro() {
    //No se ingresan parametro por que ingresa al darle click
    let inputSide = document.getElementById('inputSide') 
    //una variable para convertir los string en enteros 
    let value= Number(inputSide.value);

    //Calcular el perimetro y mandarlo al resultado de la funcion tipo flecha
    const resultado = 'El perimetro es: '+perimSquare(value) +'cm';

    //El resultado lo combierte en texto y lo manda a donde se visualizara en html
    document.getElementById('resultado').innerText=resultado;

    
}

function CalculoArea(){
   //No se ingresan parametro por que ingresa al darle click
   let inputSide = document.getElementById('inputSide') 
   //una variable para convertir los string en enteros 
   let value= Number(inputSide.value);
    //Calcular el Area y mandarlo al resultado de la funcion tipo flecha
    const resultado1 = 'El area del cuadrado es: '+AreaSquare(value)+ ' cm'

    //El resultado lo combierte en texto y lo manda a donde se visualizara en html
    document.getElementById('resultado').innerText=resultado1;

}

//Funcion Para lados 
function Lados() {
    let side1 = document.getElementById('side1')
    let side2 = document.getElementById('side2')
    let side3 = document.getElementById('side3')
    let side4 = document.getElementById('side4')

    //Calculamos Los lados 
    const resultado2= 'El resultado es '+caluloLado(value)+' cm'

    document.getElementById('resultado').innerText=resultado2;
    
}

function AreaTienagulo() {
    
}

function calculetePerimTriangle(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
    
    const result = `El perímetro de Triangulo es: ${perimTriangle(side1, side2, side3)} cm`;
    valueResult.innerText=result;
}

function calculetePerimTriangle(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');
    base = Number(base.value);
    height = Number(height.value);
    
    const result = `El área de Triangulo es: ${areaTriangle(base, height)} cm^2`;
    valueResult.innerText=result;
}