import React from "react";
function Tarjeta(props){
    let ganadas=20
    let perdidas=2
    return (
    <div>
        <h1>Campeon ganador {props.descripcion}</h1>
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg"/>
        <h3>Info</h3>
        <p>Más allá de ser el rápido encargado de mantener el equilibrio en Jonia, 
            Kennen es también el único yordle de los kinkou. A pesar de su pequeño 
            y peludo tamaño, siempre está impaciente por enfrentarse a cualquier 
            amenaza dando rienda suelta a una tormenta de shurikens con un entusiasmo 
            inagotable. Junto a su maestro Shen, Kennen vigila el reino espiritual y 
            emplea una energía eléctrica asoladora para acabar con sus enemigos.</p>

            <p>Partidas Ganadas:{ganadas}</p>
            <p>Partidas perdidas:{perdidas}</p>
    </div>
            
    )           
}
export default Tarjeta;
