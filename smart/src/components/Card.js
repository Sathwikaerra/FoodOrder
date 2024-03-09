import React, { useEffect, useState } from 'react'
import { Connect, connect } from 'react-redux';
import { resetFilter, resetTablenumber, setFilter } from '../reduxfile/action';
import { data } from './productsList';
import TableReducer from '../reduxfile/TableReducer';
import { addOrder } from '../reduxfile/action';



const Card = ({filter_name,table_number,addOrder,resetTablenumber,resetFilter}) => {

  
   const[selecteddata,setSelectedData]=useState(data);

   const [realdata,setRealData]=useState(data)

   
   
   

 
  
  useEffect(()=>{
    

    if(filter_name!="All items")
    {
      
      
        setSelectedData(realdata.filter(item=>item.category===filter_name));

      
    }
    else{
      setSelectedData(realdata)
    }

  },[filter_name])

  const Handler=async(id,name,prize,url)=>{
    if(table_number!=null)
    {
      await addOrder(id,name,prize,url,table_number)
      await resetTablenumber();
      await resetFilter();
      alert("Order Placed Successfully")
    }
    else{
      alert("Please select the table")
    }

  }
  

  


  
  return (
    <div>
        <center>
           {selecteddata.length > 0 ?
           <div className='container'>
              <div className='row'>
                {selecteddata.map((item,index)=>(
                  <div className='col-md-4' style={{padding:"5px"}}>
                    <div className='card' key={index} style={{width:"18rem",padding:"3px"}}>
                    <img src={item.url} className='card-img-top'/>
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-title'>Rs.{item.prize}</div>
                      <button className='btn btn-primary' onClick={()=>Handler(item.id,item.name,item.prize,item.url)}>Order</button>
                    </div>
                    </div>
                    </div>
                ))}
            </div>

          </div>
          :
          <div className='spinner-border text-primary'></div>

        }
        </center>
      
    </div>
  )
}

const mapStateToProps=state=>({
  filter_name:state.FilterReducer.filter_name,
  table_number:state.TableReducer.table_number

})

export default connect(mapStateToProps,{setFilter,addOrder,resetFilter,resetTablenumber})(Card)
