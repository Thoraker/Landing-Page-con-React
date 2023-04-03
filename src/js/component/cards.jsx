import React from "react";



export const Card = ({data}) => { 
    return (
        <div className="card col-xs-12 col-sm-6 col-md-4 col-xl-3" >
            <img src={data.imgUrl} className="card-img-top w-auto" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
                <a href={data.link} className="btn btn-primary">Foto 900 x 600</a>
            </div>
        </div>
    );
}

