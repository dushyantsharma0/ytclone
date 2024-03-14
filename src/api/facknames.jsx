
import Chance from 'chance'

  
 const chance= Chance()
  export const Fackmassige=()=>{
   
   return chance.sentence()
 }

  export const Facknames=()=>{
    // console.log(chance.name())
    return chance.name()
 }

 export const FackPic=()=>{
  console.log(chance.avatar({email: 'mail@victorquinn.com'}))
  return chance.avatar({email: 'mail@victorquinn.com'})

}
