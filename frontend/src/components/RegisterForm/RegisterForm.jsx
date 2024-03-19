import React,{useState} from "react";
import { Button, Form, Input, Select } from 'antd';
import {Link} from 'react-router-dom'
import styles from "./RegisterForm.module.css"

function RegisterForm()
{
    const [position,setPosition] = useState();


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        console.log(position)
        //ToDO: add register logic
      };
    
    return(
    <Form
        className={styles.register_form}
        onFinish={onFinish}>
        <h1>Регистрация</h1>
        <Form.Item
            name="surname"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите свой e-mail!',
            },]}>
            <Input placeholder="Фамилия" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item
            name="name"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите свой e-mail!',
            },]}>
            <Input placeholder="Имя" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item
            name="patronymic"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите свой e-mail!',
            },]}>
            <Input placeholder="Отчество" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите свой e-mail!',
            },]}>
            <Input placeholder="E-mail" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item >
            <Select
            className={styles.register_form_input}
            defaultValue="disabled"
            onChange={setPosition}
            options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
            />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите пароль!',
            },]}>
            <Input  type="password" placeholder="Пароль" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item
            name="confirm_password"
            rules={[
            {
                required: true,
                message: 'Пожалуйста, введите пароль еще раз!',
            },]}>
            <Input  type="password" placeholder="Подтвердите пароль" className={styles.register_form_input}/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.register_form_button}>
            Зарегистрироваться
            </Button>
            <p>
                Уже зарегистрированы? <Link to='/login'>Войдите здесь!</Link>
            </p>
        </Form.Item>
    </Form>)
}

export default RegisterForm;