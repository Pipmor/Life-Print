
import  "./footerStyle.css"
import localicon from "./footericons/local-two.png"
import timeIcon from "./footericons/time.png"
import email from "./footericons/mail.png"
import phone from "./footericons/phone-telephone.png"
import telegram from "./footericons/telegram.png"
import tiktok from "./footericons/tiktok.png"
import insta from "./footericons/Brand.png"

export default function Footer(){

  const styleP={
    maxWidth:"395px"
  }
  // const styleH1={
  //   marginBottom:"10px"
  // }
  
return(
  <footer className="footer">
     <div className="footer-container">
      <div className="contactContainer">
      
      <h1>LOGO</h1>
      
        <div className="icon-container">
                <div><img src={localicon} alt="Address Icon"/></div>
                <p>г.Бишкек,ул.Безымянная 9/11</p>
            </div>
        <div className="icon-container">
                <div><img src={timeIcon} alt="time icon"/></div>
                <p>Пн-Сб с 10.00 до 20.00</p>
            </div>
      <p style={styleP}>Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. 
        Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. </p>
       
        <div className="icon-container">
                <div><img src={email} alt="email"/></div>
                <p>Default123mail.com</p>
            </div>
        <div className="icon-container">
                <div><img src={phone} alt="Address Icon"/></div>
                <p>+996 707 777 777 | +996 707 777 777 </p>
            </div>
      
            </div>
            <hr />

            <div className="socialMedia-container">
              <p>2023.Все правы защищены</p>
              <ul className="ul">
                <li><a href=""><img src={telegram} alt="telegram" /></a></li>
                <li><a href=""><img src={tiktok} alt="tiktok" /></a></li>
                <li><a href=""><img src={insta} alt="instagram" /></a></li>
              </ul>

            </div>

      </div> 
  </footer>
)
}