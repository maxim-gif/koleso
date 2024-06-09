import './kol.css';
import{ useRef } from 'react';


export const Koleso = () => {
    const containerRef = useRef(null);

   
    // let btn = document.getElementById('spin')
    let number = Math.ceil(Math.random()*1000)
    
const Rotate = () => {
    if (containerRef.current) {
        containerRef.current.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random()*1000)
    }

}

  return (
   <div className="box">
    <div className="arrow"></div>
        <div className="roulette">
            <div className="container" ref={containerRef}>
                <button id='spin'></button>
                <div className="one"><span>Скидка</span></div>
                <div className="two"><span>Скидка</span></div>
                <div className="three"><span>Скидка</span></div>
                <div className="four"><span>Скидка</span></div>
                <div className="five"><span>Скидка</span></div>
                <div className="six"><span>Скидка</span></div>
                <div className="seven"><span>Скидка</span></div>
                <div className="eight"><span>Скидка</span></div>
            </div>
        </div>
       <span className="title">Получите бонус сейчас!</span>
       <span className="subTitle">Крутите колесо и выигрывайте приз</span>
       <input type='text' placeholder='Ваш телефон' className="input"></input>
       <button className="button"  onClick={() => {Rotate()}}>Крутите колесо</button>
       <span className="footer">Вы даете согласие на обработку персональных данных</span>
       <span className="footer">Обратный звонок</span>
    </div>
  );
}