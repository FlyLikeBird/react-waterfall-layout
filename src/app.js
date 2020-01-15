import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { hot } from 'react-hot-loader/root';
import Waterfall from './components/Waterfall';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[],
            addItems:[],
        }
    }

    componentWillMount(){
        var imgContainer = [];
        for(var i=0;i<20;i++){
            imgContainer.push(
                <div style={
                    {
                        
                        height:`${Math.floor(200+Math.random()*200)}px`,
                        backgroundImage:`url(http://localhost:3000/img${i}.jpeg)`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition: 'center'
                    }
                }>
                </div>
            )
            
        }
        this.setState({data:imgContainer,addItems:imgContainer});
    }

    handleLoadMore(){
        var { data, addItems } = this.state;
        var newArr = data.concat(addItems);
        console.log(newArr);
        this.setState({data:newArr});
    }

    render(){
        var { data } = this.state;
        return (
            <div>
                <h2>react实现瀑布流布局</h2>
                <Waterfall data={data} />
                <Button type="primary" style={{margin:'10px 0'}} onClick={this.handleLoadMore.bind(this)} >加载更多</Button>
            </div>
        )
    }
}

hot(App);
const render = Component =>{
    ReactDOM.render(<Component/>,document.getElementById('root'))
}

render(App);



