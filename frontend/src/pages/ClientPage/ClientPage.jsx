import {Card, Timeline, List,Collapse} from "antd";
import { useParams, Link } from "react-router-dom";

function ClientPage()
{
    const items = [
        {
          key: '1',
          label: 'This is panel header 3',
          children: <div>
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
            <Link to={"/order/"+1}>Подробнее</Link>
          </div>
        },
        {
          key: '2',
          label: 'This is panel header 3',
          children: <div>
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
            <Link to={"/order/"+1}>Подробнее</Link>
          </div>
        },
        {
          key: '3',
          label: <div style={{display:"flex",justifyContent:"space-between",marginTop:"0px"}}><p>Заказ № 321</p><p>Создан: 12.01.2023</p></div>,
          children: <div>
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
            <Link to={"/order/"+1}>Подробнее</Link>
          </div>
        },
      ];

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
            <Collapse
                defaultActiveKey={['1']}
                items={items}
            />
        </>
    )
}

export default ClientPage;