import {createSlice}   from '@reduxjs/toolkit' 

 const nameSlice = createSlice({
     name: 'name',
     initialState:[],
     reducers: {
         nameHandle: (state, action) => {
            if(state.length==30){
                state.shift()
            }
           state.push(action.payload)
           
         }
           
     }
 })
  
   export const {nameHandle}=nameSlice.actions;
    export default nameSlice.reducer;