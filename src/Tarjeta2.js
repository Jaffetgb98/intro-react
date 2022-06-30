import React from "react";
function Tarjeta2(props){
    let ganadas=15
    let perdidas=5
    return (
    <div>
        <h1>Campeon segundo lugar {props.descripcion}</h1>
        <img src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt7425b73d37e14379/60ee0be8fdd68748b2b7ccbe/Brand_0.jpg"/>
        <h3>Info</h3>
        <p>Brand, antiguo miembro de la tribu Kegan Rodhe del helado Freljord, 
            es una lección sobre la tentación de un poder mayor. En busca de una 
            de las legendarias Runas Geogénicas, Kegan traicionó a sus compañeros 
            y se quedó con la runa. El hombre desapareció al instante. Su alma se 
            consumió y su cuerpo pasó a ser un recipiente de llamas vivas. Ahora, 
            Brand recorre Valoran en busca de otras Runas Geogénicas, jurando 
            vengarse por las calamidades que posiblemente jamás habría podido 
            sufrir en una docena de vidas mortales.</p>

            <p>Partidas ganadas:{ganadas}</p>
            <p>Partidas perdidas:{perdidas}</p>
    </div>
            
    )           
}
export default Tarjeta2;