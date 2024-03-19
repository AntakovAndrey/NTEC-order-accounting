import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css"
function RegisterPage()
{
    return(
        <div className={styles.register_from_container}>
            <RegisterForm/>
        </div>)
}

export default RegisterPage;