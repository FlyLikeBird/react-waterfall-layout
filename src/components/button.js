import React from 'react';
import { Modal } from 'antd';
export default class ButtonComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            count:0,
            visible:false
        }
    }

    handleModalVisible(){
        this.setState({visible:!this.state.visible});
    }

    render(){
        var { visible } = this.state;
        return (
            <div>
                <button onClick={()=>this.setState({count:++this.state.count})}>click 55</button>
                { this.state.count }
                <button onClick={this.handleModalVisible.bind(this)}> hello world lalala</button>
                {
                    visible
                    ?
                    <Modal visible={visible} onCancel={this.handleModalVisible.bind(this)}>
                        <p>hello world 22233</p>
                    </Modal>
                    :
                    null
                }
            </div>
        )
    }
}


