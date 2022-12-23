import React, { useState } from "react";
import html2canvas from 'html2canvas';
import "../App.css";

const Imgmemes = () => {

    const [imgMemes, setImgMemes] = useState("meme-chico-negro");

const seleccionarImagen = (e)=>{
    setImgMemes(e.target.value);
};
const exportar = (e) => {
    html2canvas(document.querySelector("#exportarImg")).then(function(canvas) {
        // document.body.appendChild(canvas);
        let img = canvas.toDataURL("memes/jpg");
        let link = document.createElement("a");
        link.download = "mi-meme.jpg";
        link.href = img;
        link.click();
    });
};

const [textoMeme, setTextoMeme] = useState();

const textoIngresado = (e) => {
    setTextoMeme(e.target.value);
};

const [textoMeme2, setTextoMeme2] = useState();

const textoIngresado2 = (e) => {
    setTextoMeme2(e.target.value);
};

    return (
    <div>
    <div>
    <h1>🤡Editor de memes🤡</h1>
    <textarea onChange={textoIngresado} label="Texto 1:" type="text" name="memetexto" placeholder="Ingresa tu texto aquí"></textarea>
    <textarea onChange={textoIngresado2} label="Texto 2:"type="text" name="memetexto" placeholder="O aquí"></textarea>
    </div>

<div className="seleccionarImg">
    <h3>Elegí una imagen:</h3>
    <select onChange={seleccionarImagen} name="memes">
        <option value="meme-chico-negro">Chico feliz y después decepcionado</option>
        <option value="meme-dexter">Dexter "Te he fallado" </option>
        <option value="meme-fiesta">Fiesta "Ellos no saben pero..."</option>
        <option value="meme-monito">Monito que mira hacia el costado</option>
    </select>
</div>

    <figure id="exportarImg">
    <div className="divtexto">
    {textoMeme}
    </div>
    <div className="divtexto2">
        {textoMeme2}
    </div>
        <img src={`./memes/${imgMemes}.jpg`} alt="meme"/>
    </figure>

    <button onClick={exportar} type="button">Descargá tu meme</button>
    </div>
    )};

export default Imgmemes;