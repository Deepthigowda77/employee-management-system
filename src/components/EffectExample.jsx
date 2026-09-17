import { useEffect } from "react"

function EffectExample() {
  useEffect(()=>{
    console.log("Component loaded");
  },[]) ;


  return(
    <h1>Employee Management System</h1>
  );

}
export default EffectExample;