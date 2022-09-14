import { useState } from "react"
import style from "./style.module.css"

const Footer = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)

  return (
    <footer className={style.Footer}>
  
      <p>{time}</p>

      <h3>Made with REACT</h3>
      
    </footer>
  )
}

export default Footer;