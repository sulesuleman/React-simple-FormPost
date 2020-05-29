import React from 'react';
import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
    
   
    const IconText = ({ icon, text }) => (
      <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
      </span>
    );
    

const Articles=(props) =>{
return(
    
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.data}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.username}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.productPicture}       />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.productPicture} />}
              title={<a href={item.href}>{item.productName}</a>}
              description={item.description}
            />
            {item.username}
          </List.Item>
        )}
      />
     )     
        }

        export default Articles;