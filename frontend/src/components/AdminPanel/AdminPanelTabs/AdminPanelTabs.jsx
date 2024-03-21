import CategoriesTab from "./CategoriesTab"
import CustomersTab from "./CustomersTab"
import ServicesTab from "./ServicesTab"
import PositionsTab from "./PositionsTab"
import UsersTab from "./UsersTab"
import PaymentTypesTab from "./PaymentTypesTab"
import ServiceStatusesTab from './ServiceStatusesTab'
import OrderStatusesTab from './OrderStatusesTab'
import OrderPaymentsTab from "./OrderPaymentsTab"
import OrdersTab from './OrdersTab'

const AdminPanelTabs = [
    {label:'Услуги',
    key:'1',
    children:<ServicesTab/>},

    {label:'Категории услуг',
    key:'2',
    children:<CategoriesTab/>},

    {label:'Клиенты',
    key:'3',
    children:<CustomersTab/>},

    {label:'Заказы',
    key:'4',
    children:<OrdersTab/>},

    {label:'Статусы выполнения услуг',
    key:'5',
    children:<ServiceStatusesTab/>},

    {label:'Оплаты',
    key:'6',
    children:<OrderPaymentsTab/>},

    {label:'Типы оплты',
    key:'7',
    children:<PaymentTypesTab/>},

    {label:'Статусы выполнения заказов',
    key:'8',
    children:<OrderStatusesTab/>},

    {label:'Пользователи',
    key:'9',
    children:<UsersTab/>},

    {label:'Должности',
    key:'10',
    children:<PositionsTab/>},
]

export default AdminPanelTabs