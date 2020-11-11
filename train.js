'use strick'

/* Calcular la velocidad y distancia recorrida MINUTO A MINUTO 
por una HORA de un tren que presenta una aceleración constante de 0.05 m/s^2 */

//calcular la velocidad y con el tiempo calculo la distancia
// guardar velocidad y distancia para la sgte iteracion

const aceleration = 0.05;
const v = (v0, t) => v0 + (aceleration * t);
const d = (v0,vf,t)=> ((v0+vf)/2)*t;
let seconds = 0;
let distance = 0;

while (seconds <= 3600){
    const velocity = v(0,seconds);
    distance = d(0,velocity,seconds)*2;    
    //convierto segundos a  minutos
    minutes = Math.trunc(seconds/60);
    // sacar el modulo que es la division de segundos x 60 me da el residual de esa division
    if(seconds%60 === 0){
        console.log(`En el minuto ${minutes} la velocidad es: ${velocity} m/s; y su distancia es: ${distance} m`);
    }
    seconds ++;  
}

const indexMapper = (value,index)=>{
    const velocity = v(0,seconds);    
    const velocityKhm = velocity *3.6;
    
    return{
        Segundos : index,
        Velocidad: velocity.toFixed(2),
        Distancia: velocityKhm.toFixed(2)
    };
};

const resultSet = Array(61).fill(0).map(indexMapper);
console.log(JSON.stringify(resultSet,null,2));