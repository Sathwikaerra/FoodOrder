import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setFilter,resetFilter } from '../reduxfile/action';

const Filter = ({filter_name,setFilter,resetFilter}) => {
    const products=["All Items","Rice Items","Cold Drinks","Pizza","Hot Drinks"];
    const [filter,arrangeFilter]=useState("All items");
  return (

    <div>
        <center className='mt-3 ' >
            <span className='h4 m-2'>Filter :</span>
            <select name='filter ' className='p-1' onChange={(e)=>arrangeFilter(e.target.value)}>
                {
                    products.map((item,index)=>(
                        <option  className=' p-1'value={item} key={index} >{item}</option>

                    ))
                }

            </select>
            <button className='btn btn-primary  m-2'  onClick={()=>setFilter(filter)}>Submit</button>
        </center>
      
    </div>
  )
}

const mapStateToProps=state=>({
    filter_name:state.FilterReducer.filter_name
})

export default connect(mapStateToProps,{setFilter,resetFilter})(Filter)
