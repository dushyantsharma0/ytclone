import {createSlice}   from '@reduxjs/toolkit' 

 const videoSlice=createSlice({
     name:'videos',
     initialState:{
         videos:[],
         catagery:'music',
        
     },
     reducers:{
         videoHandle(state,action){
             state.videos=action.payload
         },
        catageryHandle(state,action){
             state.catagery=action.payload
             console.log( "my action is ",action.payload)
         }
     }
 })
 

  export const {videoHandle,catageryHandle}=videoSlice.actions
  export default videoSlice.reducer