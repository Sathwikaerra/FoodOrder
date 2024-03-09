export const setTablenumber=(value)=>async dispatch=>{
    dispatch({
        type:"SETTABLENUMBER",
        payload: value
    })
}

export const resetTablenumber=()=>async dispatch=>{
    dispatch({
        type:"EMPTY"
        
    })
}

export const setFilter=(value)=>async dispatch=>{
    dispatch({
        type:"SETFILTER",
        payload: value
    })
}

export const resetFilter=()=>async dispatch=>{
    dispatch({
        type:"RESETFILTER"
        
    })
}

export const addOrder=(id,name,prize,url,table_number)=>async dispatch=>{
    dispatch({
        type:'ADDORDER',
        payload:{
            id:id,
            name:name,
            prize:prize,
            url:url,
            table_number:table_number
        }
    })
}

