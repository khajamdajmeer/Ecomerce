import { createSlice } from "@reduxjs/toolkit";


const cartsize = JSON.parse(localStorage.getItem('cart'))||[];

const changecart =()=>{
    if(cartsize){
        return cartsize.length;
    }else{
        return 0
    }
}

export const AddtoCart = createSlice({
    name:'cart',
    initialState:{
       value: changecart(),
    },
    reducers:{
        Add:(state)=>{
            state.value +=1;
        },
        remove:(state)=>{
            state.value-=1;
        }
    }
})

export const {Add,remove} = AddtoCart.actions
export default AddtoCart.reducer