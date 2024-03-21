import React from 'react';
import { Tabs } from 'antd';
import AdminPanelTabs from '../../components/AdminPanel/AdminPanelTabs/AdminPanelTabs';
import styles from "./AdminPanelPage.module.css"

function AdminPanelPage()
{
    
    return(<>
        <div className={styles.page_container}>
            <Tabs
                defaultActiveKey='1' 
                items={AdminPanelTabs}
            />
        </div>    
    </>)
}
export default AdminPanelPage;