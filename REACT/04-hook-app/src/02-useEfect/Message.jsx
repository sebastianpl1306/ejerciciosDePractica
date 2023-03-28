import { useEffect } from "react"

export const Message = () => {
    useEffect(() => {
      console.log("Montando componente");
    
      return () => {
        console.log("desMontando componente");
      }
    }, [])
    
  return (
    <>
        <h5>Usuario No Existe</h5>
    </>
  )
}
