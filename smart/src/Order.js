import React from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'

const Order = ({list}) => {
  return (
    <div>
      <Header/>
       <center>
           {list.length > 0 ?
           <div className='container'>
              <div className='row'>
                {list.map((item,index)=>(
                  <div className='col-md-4' style={{padding:"5px"}}>
                    <div className='card' key={index} style={{width:"18rem",padding:"3px"}}>
                    <img src={item.url} className='card-img-top'/>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-title'>Billing Amount Rs.{item.prize}</div>
                      <p>Table Number:{item.table_number}</p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>

          </div>
          :
          <div className='h4'>
            No Orders are Placed yet...
          </div>

        }
        </center>
      
        
      
    </div>
  )
}

const mapStateToProps=state=>({
  list:state.OrderReducer
})

export default connect(mapStateToProps)(Order)
