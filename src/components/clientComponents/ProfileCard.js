import React from "react"
import ProfilePhoto from "../../assets/img/jpg/profile_photo.jpg"
import { Card } from "antd";
import "./MenuTop.scss"

export default function ProfileCard(){
  return (
    <Card
      size="large"
      title="Profile"
      style={{ width: 500 }}
    >
      <div className="photo_container">
        <img className="photo" alt="Logo" src={ProfilePhoto} width='80px' height='120px'></img>
      </div>
      <div className="card_body">
        <h5>Nombre:</h5>
        <p> Karol Liseth</p>
        <h5>Apellido: </h5>
        <p>Rojas Bermúdez</p>
        <h5>Edad: </h5>
        <p>22</p>
        <h5>Correo: </h5>
        <p>karol.rojasb@gmail.com</p>
      </div>
    </Card>
  )
}
