import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function ServicesTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Название',
        dataIndex: 'name',},
        {title: 'Стоимость',
        dataIndex: 'cost',},
        {title: 'Описание',
        dataIndex: 'description',},
        {title: 'Категория',
        dataIndex: 'categoryName',},
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default ServicesTab;