const displaydata=(data)=>{
     output.value+=data
}
const removeall=()=>{
      output.value=""
      output.placeholder="0"
}
const removelast=()=>{
       output.value=output.value.slice(0,-1)
}
const showresult=()=>{
    try{
        console.log("inside try block");
        
    output.value=eval(output.value)
    }
    catch(err){
        console.log("inside catch block");
        
        output.placeholder="Invalid Expression"
        output.value=""
    }
    finally{
        console.log("inside finally block");
        
    }
}