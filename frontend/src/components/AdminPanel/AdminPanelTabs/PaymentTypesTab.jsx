import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function PaymentTypesTab()
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

export default PaymentTypesTab;