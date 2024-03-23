import AdminPanelTabLayout from "../../../layouts/AdminPanelTabLayout";
import ServiceAddingModal from "../AdminPanelModals/AddingModals/ServiceAddingModal";

function ServicesTab()
{
    const showModal = () => {
        setModalAddingOpen(true);
    };

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

    const handleDelete=(key)=>{
        console.log(key)
    }

    return(<>
        <AdminPanelTabLayout columns={columns} showModal={showModal} handleDelete={(key) => handleDelete(key)} />
    </>)
}

export default ServicesTab;