import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function OrderPaymentsTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Номер заказа',
        dataIndex: 'orderId',},
        {title: 'Дата оплаты',
        dataIndex: 'paymentDate',},
        {title: 'Сумма',
        dataIndex: 'amount',},
        {title: 'Тип оплаты',
        dataIndex: 'orderPaymentTypeName',},
        
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default OrderPaymentsTab;