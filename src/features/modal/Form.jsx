import "./modal.css"

export  default function Form(){
  return(
    <form className="form">
    <div className="inputs">
      <input type="text" id="имя" name="имя" placeholder="Имя"   maxLength={50} required/>
      <input type="tel" id="номер-телефона" name="номер-телефона"placeholder="Номер телефона" required/>
      <input type="email"placeholder="Электронная почта" id="email" name="email" />
      </div>
      
      <div className="textarea">
      <textarea name="комментарий" id="комментарий" maxLength={300} placeholder="Комментарий(необязательно)">
      </textarea>
      </div>
   
     
        <div className="button"><button id="button">Оставить заявку</button></div>
    
    </form>
  )
}



