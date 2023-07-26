import React from 'react'
import Data from '../component/Data'
import Card from '../component/Card'
import './Domain.scss';

function Domain() {
  return (
    <div className='Domain'>
     <div className='domain-head'><h1>OUR DOMAIN</h1></div>
     <div className="cardContainer">
                {Data.map((data,id)=>{
                    return <Card data={data} key={id}/>
                })
            }
            </div>
    </div>
  )
}

export default Domain
