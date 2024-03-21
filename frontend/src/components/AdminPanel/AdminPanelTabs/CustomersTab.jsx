import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function CustomersTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Название компнии',
        dataIndex: 'company_name',},
        {title: 'Контактное лицо',
        dataIndex: 'contact_person',},
        {title: 'Email',
        dataIndex: 'email',},
        {title: 'УНП',
        dataIndex: 'unp',},
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default CustomersTab;