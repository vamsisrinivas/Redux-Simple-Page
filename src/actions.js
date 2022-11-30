export  const INCaction=(value)=> async dispatch=>{
dispatch ({
   type:"INCREMENT" ,
   payload:value
})
}

export const DECaction=()=> async dispatch=>{
    dispatch ({
       type:"DECREMENT" 
    })
    }


    