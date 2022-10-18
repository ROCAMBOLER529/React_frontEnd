import React from 'react'
import { useState } from 'react';
import InputComp from './InputComp';

export const FormSaludo = () => {
    const valorInicial = 0;
    let [contSaludos, setContSaludos] = useState(valorInicial);
    let [nombre, setNombre] = useState("");
    let [apellido, setApellido] = useState("");

    const handlerNombre = (evento) => {
        setNombre(evento.target.value); // target devuelve el input como objeto, mantiene la aplicacion reactiva
    }

    const handlerApellido = (evento) => {
        setApellido(evento.target.value); // target devuelve el input como objeto, mantiene la aplicacion reactiva
    }

    const handleSaludo = (evento) => { // los parentesis del handleSaludo recibe el evento
        evento.preventDefault();
        // contSaludos++; ==> Asi no.
        setContSaludos(contSaludos + 1); // Asi si
        console.log("+1");
    }

    return (
        <>
            <p>Cantidad de veces que se saludó: {contSaludos}</p>
            <p>Hola {nombre} {apellido}</p>
            <form>
                <InputComp ph="juam" lbl="Nombre" handler={handlerNombre}/>
                <InputComp ph="gomez" lbl="Apellido" handler={handlerApellido}/>
                <button onClick={handleSaludo}>
                    Saludar
                </button>
            </form>
        </>
    )
}

export default FormSaludo;
