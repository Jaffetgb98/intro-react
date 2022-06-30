import React from "react";
function Tarjeta3(props){
    let ganadas=10
    let perdidas=9
    return (
    <div>
        <h1>Perdedor {props.descripcion}</h1>
        <img src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltf6341c794f5cefbd/60ee0d6494d70a1ef31237b5/Fizz_0.jpg"/>
        <h3>Info</h3>
        <p>Fizz es un yordle anfibio que habita entre los arrecifes de alrededor de 
            Aguas Estancadas. Suele recuperar y devolver los diezmos arrojados al mar 
            por capitanes supersticiosos, pero incluso los marineros más agudos saben 
            que no hay que plantarle cara, puesto que hay muchas historias que hablan 
            sobre aquellos que han subestimado a este ser resbaladizo. A menudo lo 
            confunden con algún tipo de espíritu caprichoso del océano. Parece ser 
            capaz de dominar a las bestias de las profundidades y se deleita en 
            confundir a sus aliados y a sus enemigos por igual.</p>

            <p>Partidas ganadas:{ganadas}</p>
            <p>Partidas perdidas:{perdidas}</p>
    </div>
            
    )           
}
export default Tarjeta3;