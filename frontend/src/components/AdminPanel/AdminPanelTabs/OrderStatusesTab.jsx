import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function OrderStatusesTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Название',
        dataIndex: 'name',},
        
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default OrderStatusesTab;