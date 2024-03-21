import ServicesTab from "./ServicesTab"

const AdminPanelTabs = [
    {label:'Услуги',
    key:'1',
    children:<ServicesTab/>},

    {label:'Категории услуг',
    key:'2',
    children:<ServicesTab/>},

    {label:'Клиенты',
    key:'3',
    children:<ServicesTab/>},

    {label:'Заказы',
    key:'4',
    children:<ServicesTab/>},

    {label:'Статусы выполнения услуг',
    key:'5',
    children:<ServicesTab/>},

    {label:'Оплаты',
    key:'6',
    children:<ServicesTab/>},

    {label:'Типы оплты',
    key:'7',
    children:<ServicesTab/>},

    {label:'Статусы выполнения заказов',
    key:'8',
    children:<ServicesTab/>},

    {label:'Пользователи',
    key:'9',
    children:<ServicesTab/>},
    
    {label:'Должности',
    key:'10',
    children:<ServicesTab/>},
]

export default AdminPanelTabs