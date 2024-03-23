import { Button,Table,Popconfirm, Modal} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons"
import styles from "./AdminPanelTabLayout.module.css"
import React, { useState } from "react";

function AdminPanelTabLayout({ columns, handleDelete, showModal })
{


    const defaultColumns=[{
        
        title: 'Действия',
        dataIndex: 'operation',
        width:"40px",
        render: (_, record) =>
            <div className={styles.row_actions_container}>
                <Popconfirm title="Удалить эту запись?" onConfirm={() => handleDelete(record.key)}>
                    <DeleteOutlined/>
                </Popconfirm>
                <EditOutlined onClick={()=>handleDelete(record.key)}/>
            </div>
    }]

    const tableColumns=columns.concat(defaultColumns)
    const dataSource=[{name:"fadsf"},{name:"fsdfhsd"}]


    return(<div className={styles.tab_container}>
        
        <Button onClick={showModal}>Добавить</Button>
        {addingModal}
        <Table
            className={styles.table}
            dataSource={dataSource}
            columns={tableColumns}
        />
    </div>)
}

export default AdminPanelTabLayout;