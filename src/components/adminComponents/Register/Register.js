import { React, useState} from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons"

import "./Register.scss"

export default function Register() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    privacyPolicy: false
  })

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      })
    } else{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
    }
  }
  return (
    <Form className="register-form" onChange={ changeForm }>
      <Form.Item>
        <Input
            prefix      = { < UserOutlined />}
            type        = "email"
            name        = "email"
            placeholder = "Correo electrónico"
            className   = "register-form_input"
            value={ inputs.email }
        />
      </Form.Item>
      <Form.Item>
        <Input
            prefix      = { < UserOutlined />}
            type        = "password"
            name        = "password"
            placeholder = "Contraseña"
            className   = "register-form_input"
            value={ inputs.password }
        />
      </Form.Item>
      <Form.Item>
        <Input
            prefix      = { < UserOutlined />}
            type        = "repeatedPassword"
            name        = "repeatedPassword"
            placeholder = "Repetir contraseña"
            className   = "register-form_input"
            value={ inputs.repeatedPassword }
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={ inputs.privacyPolicy }>
          He leído y acepto la política de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form_button">
            Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  )
}
