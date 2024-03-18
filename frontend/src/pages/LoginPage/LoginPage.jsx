import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from "./LoginPage.module.css"

const LoginPage = () => {

  return (
    <>
      <div className={styles.login_form_container}>
        <LoginForm/>
      </div>
    </>
  );
};

export default LoginPage;