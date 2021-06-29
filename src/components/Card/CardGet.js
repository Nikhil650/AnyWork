import React from 'react'
import './CardGet.css';


function CardGet({title,imageUrl,body,cost}) {
    return (
        <div className='card-cont'>
            <div className='image-cont'>
                <img src="{imageUrl}" alt=""/>
            </div>
            <div className="card-content">
                <div className="card-title">
                      <h3> {title}</h3>
                </div>
                <div className="card-body">
                     <p>{body}</p>
                </div>
                
            </div>
            <div className="btn">
                <div className='button1'>
                    <button>
                        View More
                    </button>
                </div>
                

            </div>
        </div>
    )
}

export default CardGet
