import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function OrdersTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Дата создания',
        dataIndex: 'orderDate',},
        {title: 'Клиент',
        dataIndex: 'customerName',},
        {
            title: 'Услуги',
            dataIndex: 'services',
            render: (_, record) =>
                <div>  
                        <a href="">Услуги</a>
                </div>
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            render: (_, record) =>
                <div >  
                    
                        <a href="">Статус</a>
                </div>
        },
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default OrdersTab;