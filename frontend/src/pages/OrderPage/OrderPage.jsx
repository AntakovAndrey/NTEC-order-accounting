import { useParams } from "react-router-dom";
import styles from "./OrderPage.module.css"

function OrderPage()
{
    const {orderId} = useParams()
    return(<>
        <h1>Заказ</h1>
    </>)
}

export default OrderPage;