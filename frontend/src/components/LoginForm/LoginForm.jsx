import React from "react";
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'



function LoginForm()
{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    return(
        <Form
        name="normal_login"
        onFinish={onFinish}>
        <h1>Вход</h1>
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите свой e-mil!',
            },]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>
        
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите пароль!',
            },]}>
            <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Пароль"/>
        </Form.Item>
        

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Войти
                </Button>
                <p>
                    Нет аккаунта? <Link href="">Зарегистрируйтесь здесь!</Link>
                </p>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;