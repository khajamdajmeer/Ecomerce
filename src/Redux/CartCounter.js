import { createSlice } from "@reduxjs/toolkit";


const cartsize = JSON.parse(localStorage.getItem('cart'))||[];
export const AddtoCart = createSlice({
    name:'cart',
    initialState:{
       value: cartsize.length,
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