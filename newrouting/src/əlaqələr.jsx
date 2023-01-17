import React from 'react'
import "./əlaqələr.css"
export default function Əlaqələr() {
  return (
    <div>
      <h1>My Contacs</h1>
      <div className="wrapper7">
        <div className="forflex">
          <div className="left">
            <img className="logo" src="../img2/logo_mobile_white 1.svg" alt="logo" />
            <div className="social">
              <img className="insta" src="../img2/instalogo.svg" alt="insta" />
              <img className="fb" src="../img2/fb.svg" alt="fb" />
              <img className="vk" src="../img2/vk.svg" alt="vk" />
              <img className="wp" src="../img2/wp.svg" alt="vp" />
            </div>
          </div>
          <div className="connect">
            <div className="phoneflex">
              <img className="phonepic" src="../img2/phone_white.svg" alt="phone" />
              <p className="number">+7 (499) 39-146-39</p>
            </div>
            <div className="mailflex">
              <img className="mailpic" src="../img2/mail_white.svg" alt="mail" />
              <p className="gmail">hello@synchronize.ru</p>
            </div>
          </div>
        </div>
        <footer>
          <p className="footp">© Синхронизация, 2020</p>
        </footer>
      </div>
    </div>
  )
}
