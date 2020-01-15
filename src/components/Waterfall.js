import React from 'react';
import { Radio, Tooltip, Icon, Button } from 'antd';
import { getMinValueOfArr, getMaxValueOfArr, getMinIndexOfArr } from './util';
import style from './style.css';

export default class Waterfall extends React.Component {
    constructor(){
        super();
        this.state = {
            columns:6,
            addItems:[],
        }
    }

    _sortItem(state){
        var container = this.container;
        var { columns } = state;
        if (container){
            var children = container.childNodes;
            var heightArr = [];
            var containerWidth = container.offsetWidth;
            var itemWidth = Math.floor(containerWidth/columns);
            for(var i=0,len=children.length;i<len;i++){
                var child = children[i];
                var childHeight = child.offsetHeight;
                child.style.width = itemWidth+'px';
                if (i<columns){
                    heightArr.push(childHeight);
                    child.style.left = i * itemWidth + 'px';
                    child.style.top = '0';
                } else {
                    var minHeight = getMinValueOfArr(heightArr);
                    var minIndex = getMinIndexOfArr(heightArr, minHeight);
                    //console.log(minHeight,minIndex);
                    child.style.top = minHeight + 'px';
                    child.style.left = minIndex * itemWidth + 'px';
                    heightArr[minIndex] = minHeight + childHeight;
                }
                var maxHeight = getMaxValueOfArr(heightArr);
                container.style.height = maxHeight +'px';
                //console.log(heightArr);
            }

        }
    }

    componentDidMount(){
        this._sortItem(this.state);
    }

    componentDidUpdate(){
        this._sortItem(this.state);
    }
    
    handleChangeShowMode(e){
        var value = e.target.value;
        this.setState({columns:Number(value)});
        this.setState((state)=>{
            this._sortItem(state);
        })
    }

    componentWillUnmount(){
        this.container = null;
    }

    render(){
        var { data } = this.props;
        var { columns } = this.state;
        return (
            <div>
                <div style={{padding:'10px 0'}}>
                    <Radio.Group onChange={this.handleChangeShowMode.bind(this)} defaultValue="6" size="small">
                        <Radio.Button value="6"><Tooltip title="6列模式"><Icon type="appstore" /></Tooltip></Radio.Button>
                        <Radio.Button value="4"><Tooltip title="4列模式"><Icon type="unordered-list" /></Tooltip></Radio.Button>
                        <Radio.Button value="2"><Tooltip title="2列模式"><Icon type="column-width" /></Tooltip></Radio.Button>
                    </Radio.Group>
                </div>
                <div className="container" ref={container=>this.container=container}>
                    {
                        data && data.length 
                        ?
                        data.map((item,index)=>(
                            <div key={index} 
                                className="item" 
                            >
                                {item}
                            </div>
                        ))
                        
                        :
                        null
    
                    }
                </div>
            </div>
        )
    }
}


