'use strict'

/*Una bala es disparada de forma horizontal a 380 m/s a un blanco que se encuentra a 300 metros de distancia,
indique, decima de segundo a decima de segundo, el tiempo y distancia entre la bala y el blanco hasta que colisionan. */

/*const v0 = 380;
const velocity = (v0, t) => v0 * t;
const distance = (d0 , t) => d0 - velocity(v0 ,t);    

for(let seconds = 0; seconds <=1 ; seconds++){    
    if(distance ===1){
       
        break;
     }
     console.log(`En el segundo : ${seconds} hay una distancia de : ${distance(300,seconds)} metros entre  la bala y el negro`);

    seconds-= 0.9; 
     }*/
     
    const distance = 300;
    const v0 = 380;    
    const v = (v0 , t) => v0 * t;
    const d = (v0, vf , t) => ((v0 + vf) / 2) * t ;    
    let sec = 0 ;
    let travel = 0;
    let difference = 0;
    let decimal,decimal2,decimal3;
    // mientras q el recorrido sea menor q la distancia "ejecute"
    while(travel < distance  ){
    //limitamos el numero de decimales q imprimiremos
    decimal = sec.toFixed(2); 
    decimal2 = travel.toFixed(2);
    decimal3 = difference.toFixed(2);     
    const speed = v(v0, sec);
    travel = d(v0 ,distance,sec);
    // imprimir diferencia  = a distancia - lo recorrido    
    difference = distance - travel;    
    console.log(`\nEn el milisegundo ${decimal} la distancia recorrida es de: ${decimal2} m/s
y la distancia entre la bala y el negro es: ${decimal3}`);
     
    sec+=0.01;
     }