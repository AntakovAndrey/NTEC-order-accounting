import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";

function UsersTab()
{
    const columns=[
        {title: 'Id',
        dataIndex: 'id',},
        {title: 'Фамилия',
        dataIndex: 'surname',},
        {title: 'Имя',
        dataIndex: 'name',},
        {title: 'Отчество',
        dataIndex: 'patronymic',},
        {title: 'Email',
        dataIndex: 'email',},
        {title: 'Пароль',
        dataIndex: 'password',},
        {title: 'Должность',
        dataIndex: 'positionName',},
    ]
    return(<>
        <AdminPanelTabLayout columns={columns} modalName="Услуги" />
    </>)
}

export default UsersTab;