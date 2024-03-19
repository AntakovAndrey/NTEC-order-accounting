import React from "react";
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import styles from "../LoginForm/LoginForm.module.css"


function LoginForm()
{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        //ToDO: add authenticate logic
      };
    return(
        <Form
            className={styles.login_form}
            onFinish={onFinish}>
            <h1>Вход</h1>
            <Form.Item
                name="email"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите свой e-mail!',
                },]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" type="email" className={styles.login_form_input}/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите пароль!',
                },]}>
                <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="Пароль" className={styles.login_form_input}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.login_form_button}>
                Войти
                </Button>
                <p>
                    Нет аккаунта? <Link to='/register'>Зарегистрируйтесь здесь!</Link>
                </p>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;