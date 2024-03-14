 import {configureStore} from '@reduxjs/toolkit'
 import nameSlider from './slices/name'
  import videoSlice from './slices/video'


  export const store = configureStore({
    reducer: {
        video: videoSlice,
      name: nameSlider,
       
    },
  })

