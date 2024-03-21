import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function ServiceStatusesTab()
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

export default ServiceStatusesTab;