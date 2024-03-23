import { Form, Input, Select, Button, message, Modal } from "antd";
import { useState } from "react";

function ServiceAddingModal({onOpenModal})
{
    const[modalAddingOpen, setModalAddingOpen]=useState();

    const openAddingModal=()=>{
        setModalAddingOpen(true);
        onOpenModal();
    }

    const [messageApi,contextHolder]=message.useMessage();
    const successAdded = () => {
        messageApi.open({
          type: 'success',
          content: 'Запись успешно добавлена!',
        });
      };

    const handleFinish=(values)=>{
        successAdded()
        console.log(values);
    }

    return(<>
    <Modal
        title="Добавление записи"
        open={modalAddingOpen}
        onCancel={()=>setModalAddingOpen(false)}
        width={"60%"}
        footer={
            [<Button key="cancel" onClick={()=>setModalAddingOpen(false)}>Закрыть</Button>]
        }
    >
        <Form onFinish={handleFinish}>
            <Form.Item
                name="name"
            >
                <label>Название услуги</label>
                <Input placeholder="Название"/>
            </Form.Item>
            <Form.Item
                name="cost"
            >
                <label>Стоимость услуги</label>
                <Input placeholder="Стоимость"/>
            </Form.Item>
            <Form.Item
                name="description"
            >
                <label>Описание услуги</label>
                <Input placeholder="Описание"/>
            </Form.Item>
            <Form.Item name="category">
                <label>Категори услуги</label>
                <Select
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                    ]}
                >
                    
                </Select>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Добавить
                    </Button>
                </Form.Item>
            </Form.Item>
        </Form>
    </Modal>
    </>)
}

export default ServiceAddingModal;