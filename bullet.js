'use strict'

/*Calcular la velocidad y altura, decima de segundo a decima de segundo,
de una bala que es disparada para arriba,desde una altura de 3 metros sobre el suelo, 
e inicia con una velocidad de 380 m/s hasta que caiga de nuevo al suelo.*/

    //velocidad final es vf = v0 -g * t
    
    const g = 9.8665;
    const v0 = 380;
    const h0 = 3;

    const velocity = (v0, t) => v0 - g * t;
    const height = (h0 , t) => (v0 * t) - (g * (t*t) / 2 );  
    // const Height = -g*t^2 / 2

    // en subida
    // tiempo vuelo = 2*tMaximo
    
    // maxTime = v0/g    
  
    for(let seconds = 0; seconds <= 60 ; seconds++){
   
        console.log(`En el segundo : ${seconds.toFixed(2)} tiene una velocidad de : ${velocity(v0,seconds).toFixed(2)} 
y una altura de : ${height(h0 , seconds).toFixed(2)} m`);
        seconds-= 0.9;
        }