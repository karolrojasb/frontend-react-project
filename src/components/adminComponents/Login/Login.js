import React from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons"

import "./Login.scss"
export default function Login() {
  return (
    <Form className="login-form">
      <Form.Item>
        <Input
            prefix      = { < UserOutlined />}
            type        = "email"
            name        = "email"
            placeholder = "Correo electrónico"
            className   = "login-form_input"
        />
      </Form.Item>
      <Form.Item>
        <Input
            prefix      = { < UserOutlined />}
            type        = "password"
            name        = "password"
            placeholder = "Contraseña"
            className   = "login-form_input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form_button">
            Entrar
        </Button>
      </Form.Item>
    </Form>
  )
}
