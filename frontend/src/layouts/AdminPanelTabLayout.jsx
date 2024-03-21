import { Button,Table,Popconfirm } from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons"
import styles from "./AdminPanelTabLayout.module.css"

function AdminPanelTabLayout(props)
{
    const defaultColumns=[{
        
        title: 'Действия',
        dataIndex: 'operation',
        width:"40px",
        render: (_, record) =>
            <div className={styles.row_actions_container}>
                <Popconfirm title="Sure to delete?" onConfirm={() => props.handleDelete(record.key)}>
                    <DeleteOutlined/>
                </Popconfirm>
                <Popconfirm title="Sure to delete?" onConfirm={() => props.handleEdit(record.key)}>
                    <EditOutlined/>
                </Popconfirm>
            </div>
    }]

    const tableColumns=props.columns.concat(defaultColumns)
    const dataSource=[{name:"fadsf"},{name:"fsdfhsd"}]

    
    const onAddClick=()=>{
        console.log(props.modalName)
    }

    return(<div className={styles.tab_container}>
        <Button onClick={onAddClick}>Добавить</Button>
        <div className={styles.table}></div>
        <Table
            className={styles.table}
            dataSource={dataSource}
            columns={tableColumns}
        />
    </div>)
}

export default AdminPanelTabLayout;