import {Card, Timeline, List} from "antd";
import { useParams, Link } from "react-router-dom";

function ClientPage()
{
    const {id} = useParams();
    return(
        <>
            <h3>РУП НЦОТ</h3>
            <p>Представитель: Цымбалов Алексей Александрович</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <p>Email: ntec@gmail.com</p>
                <p>УНП:123754234</p>
            </div>
            <h3 style={{textAlign:"center"}}>Актуальные заказы</h3>
            <Card title={<><p>Заказ № {id}</p><p>12.01.2023</p></>}>
                <Timeline
                    items={[
                    {
                        children: 'Create a services site 2015-09-01',
                    },
                    {
                        children: 'Solve initial network problems 2015-09-01',
                    },
                    {
                        children: 'Technical testing 2015-09-01',
                    },
                    {
                        children: 'Network problems being solved 2015-09-01',
                    },
                    ]}
                />
                <p>Создан: 12.01.2023</p>
                <Link to={"/order/"+id}>Подробнее</Link>
            </Card>
            <List>

            </List>
        </>
    )
}

export default ClientPage;