import { createSlice } from "@reduxjs/toolkit";

const counterslices = createSlice({
    name  : 'count' ,      
    initialState : {
        count : 0 
    } , 
    reducers : { // defining reducres 
        increment :(state) =>{
            state.value+1;    
        }, 
        decrement : (state) =>{
            state.value-1; 
        }
    }
})  
export const {increment , decrement} = counterslices.actions;  
export default counterslices.reducer; 