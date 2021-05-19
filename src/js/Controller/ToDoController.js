import { ContactsOutlined, ThreeSixtySharp } from '@material-ui/icons';
import React from 'react';
import ToDoView from '../View/ToDoComponent/ToDoView';

class ToDoController extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            message : [],
            temp : '',
        }
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
        this.onAddTextChange = this.onAddTextChange.bind(this);
        this.getMessageItem = this.getMessageItem.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}

    onAddButtonClick(event){
        this.state.message.push(this.state.temp);
        this.setState({message:this.state.message});
    }

    onAddTextChange(event){
        this.state.temp = event.target.value;
    }

    getMessageItem(){
        return this.state.message;
    }

    render(){
        return(
            <ToDoView
                onAddButtonClick = {this.onAddButtonClick}
                getMessageItem = {this.getMessageItem}
                onAddTextChange = {this.onAddTextChange}
            />
        );
    }
}

export default ToDoController