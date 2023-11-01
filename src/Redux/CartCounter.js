import { createSlice } from "@reduxjs/toolkit";


const cartsize = JSON.parse(localStorage.getItem('cart'))||[];
let mycart = null;
if(cartsize){
    mycart=cartsize.length;
}else{
    mycart=0
}

export const AddtoCart = createSlice({
    name:'cart',
    initialState:{
       value: mycart,
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