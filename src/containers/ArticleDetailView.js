import React from 'react';
import axios from 'axios';
import {Card} from 'antd'; 
class ArticleDetail extends React.Component {
    
    state ={
        article: {} 
    }
    
    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://localhost:8000/api/farmerProducts/${articleID}`)
        .then(res => {
            this.setState({
                article:res.data
            });
        })
        
    }
    
    render() {
        return (
            <Card title={this.state.article.productName}>
                <p>{this.state.article.username}</p>
                <p>{this.state.article.productPicture}</p>
                <p>{this.state.article.productQuantity}</p>
                <p>{this.state.article.prodyctType}</p>
                <p>{this.state.article.productPrice}</p>
                <p>{this.state.article.description}</p>
            
            </Card>

        )
    }

}
export default ArticleDetail;