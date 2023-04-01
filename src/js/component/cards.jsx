import React from "react";

const Card = (props) =>{
    return (
        <div id={i} className="card" style="width: 18rem;">
            <img src={props.imgUrl[i]} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title[i]}</h5>
                <p className="card-text">{props.text[i]}</p>
                <a href={props.link[i]} className="btn btn-primary">Foto 900 x 600</a>
            </div>
        </div>
    );
}

const data0 = {
    title: 'Cachorro Negro',
    imgUrl: 'https://picsum.photos/id/237/', 
    text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vel libero orci. Quisque.',
}

const base = []

const data = {
        title: [
        'Cachorro Negro', 
        'Al Mar', 
        'Tenedores', 
        'Máquina de Escribir'
    ],
    imgUrl: [
        'https://picsum.photos/id/237/500/325', 
        'https://picsum.photos/id/317/500/325', 
        'https://picsum.photos/id/23/500/325', 
        'https://picsum.photos/id/252/500/325'
    ],
    text: [
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vel libero orci. Quisque.',
        'Aenean interdum enim ex, quis egestas ex consectetur eget. Integer maximus elit tortor, ac efficitur.',
        'Donec iaculis mi sed lacus placerat volutpat. Cras tincidunt tortor et maximus convallis. Maecenas suscipit.',
        'Phasellus non fringilla turpis. Quisque posuere pellentesque congue. Etiam ut condimentum nulla, a pellentesque felis.'
    ],
    link: [
        'https://picsum.photos/id/237/900/600', 
        'https://picsum.photos/id/317/900/600', 
        'https://picsum.photos/id/23/900/600', 
        'https://picsum.photos/id/252/900/600'
    ],
}



export const Cards = data.map((key, i) => {
    return(
        <Card 
        
        
        />

    )
})