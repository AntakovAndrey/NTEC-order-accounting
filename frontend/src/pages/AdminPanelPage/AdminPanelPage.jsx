import React from 'react';
import { Tabs } from 'antd';
import AdminPanelTabs from '../../components/AdminPanel/AdminPanelTabs';

function AdminPanelPage()
{
    
    return(<>
        <Tabs
            defaultActiveKey='1' 
            items={AdminPanelTabs}
        />
    </>)
}
export default AdminPanelPage;