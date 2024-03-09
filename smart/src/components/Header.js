import React from 'react'
import{ Link }from "react-router-dom"
import { connect } from 'react-redux'
import OrderReducer from '../reduxfile/orderreducer'

const Header = ({count}) => {
  return (
    <div>
         <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'>S-Restaurant</a>
        <button className='btn btn-primary'>
           <Link to='/orders' style={{color:"white",textDecoration:"none"}}>Orders</Link> <span className='badge bg-secondary'>{count}</span>
        </button>



        </nav>
      
      
    </div>
  )
}
const mapStateToProps=state=>({
  count:state.OrderReducer.length
})

export default connect(mapStateToProps)(Header)
