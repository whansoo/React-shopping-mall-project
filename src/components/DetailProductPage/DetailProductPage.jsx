import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

function DetailProductPage(props){
    let { id } = useParams(); 
    let matchedItem = props.items.find(function(item){
        return item.id === id;
    });
    
    const navigate = useNavigate();
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-6">
                <video
                      autoPlay
                      loop
                      playsInline
                      className="prototype__artwork prototype__edit"
                      style={{
                      objectFit: "contain",
                      height: "600px",
                        
                      }}
                      src={matchedItem.thumbnail}
                    />
                     

                </div>
                <div className="col-md-6 mt-3">
                    <div className="alert alert-danger">The maximum number of guests is 2 guests. </div>
                    <h4>{ matchedItem.title }</h4>
                    <h5 className="mb-3"><b>{ matchedItem.price }</b> won</h5>
                    <button className="btn btn-dark">Reservation</button> 
                    <button className="btn btn-secondary" onClick={() =>{ navigate('/')}}>Back to main</button> 
                </div>
            </div>
        </div> 
    )
}

export default DetailProductPage;
