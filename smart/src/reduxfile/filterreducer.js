const initialState={
    filter_name:"All items"
}

export default function FilterReducer(state=initialState,action){

    const{type,payload}=action;

    switch(type)
    {
        case 'SETFILTER':
            return {...state,filter_name:payload}

        case 'RESETFILTER':
            return {...state,filter_name:"All items"}
        default:
            return state
    }




}