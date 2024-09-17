/*Ejercicios de la clase */
 
/*variables*/
let contador =1;

if(true){
    const contador=5;
    console.log(contador);
}
console.log(contador);

/*objetos*/
 const persona = {
    nombre:"Fernanda",
    apellido:"Romero"
}
persona.nombre= "Francisca";

console.log(persona.nombre);

/*Objetos literales y optional chaining operator */
const frutas =["pera","manzana", "sandia"];
console.log(frutas[2]);

/*Objetos literales, no indexados*/
const animal = {
    color:"naranja",
    nombre:"simba",
    rugiendo: true
}
console.log("Este león es de color " + animal.color);
console.log("y su nombre es " + animal.nombre);
console.log(animal["rugiendo"]);

/*listas de tareas */
/*Ejemplo1 */
const tareas ={
    "23567-75656vvjbhfhg":{
        title:"tarea #01"
    }
}
console.log(tareas["23567-75656vvjbhfhg"].title)
/*Ejemplo2 */
const animales = {
    color:"naranja",
    nombre:"simba",
    rugiendo: true,
    favoritos:{
        dia:{
            ok:true,
        },
        noche:{
            ok:false
        }
    }
}
console.log(animales.favoritos.dia.ok);
console.log(animales.favoritos?.luna?.ok);

/*destructuring*/
/*Ejemplo1 */
const animal3 = {
    color:"naranja",
    nombre:"simba",
    rugiendo: true,
    favoritos:{
        dia:{
            ok:true,
        },
        noche:{
            ok:false
        }
    }
}
/*guardar el valor de la propiedad color en una constante */
//const color = animal3.color;
//const nombre = animal3.nombre;
//console.log("color: "+ color+",animal:"+nombre);

/*Ejemplo2 */
const animal2 = {
    color:"azul",
    nombre:"Torogoz",
    volando: true
}
//destructuring objetos literales
const {color,nombre,volando}= animal2;
console.log("El "+ nombre+" es de color: "+ color)

//arrays indexados
//const frutas =["pera","manzana", "sandia"]

//destructuring array
const [pera,manzana,sandia]= frutas;
console.log("A mi me gusta mucho la " + sandia);

/*Interpolación, Operador ternario*-pendiente proxima clase*/


