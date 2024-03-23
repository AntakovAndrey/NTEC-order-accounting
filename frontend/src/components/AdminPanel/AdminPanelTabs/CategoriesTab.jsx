import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function CategoriesTab()
{
        const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Название',
        dataIndex: 'name',}
    ]
    return(<>
        
        <AdminPanelTabLayout columns={columns} />
    </>)
}

export default CategoriesTab;