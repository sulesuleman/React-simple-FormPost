import { Card } from 'antd';
import React from 'react';    
const { Meta } = Card;
const Cards=(props) => {
    return( 
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title={props.title} description={props.description} />
        </Card>
      )
    }
export default Cards;