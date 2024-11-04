import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"


const Firms = () => {

  const {getFirms}= useStockRequest()

  useEffect(() => {
    getFirms()
  }, [])
  

  return (
    <div>Firms</div>
  )
}

export default Firms