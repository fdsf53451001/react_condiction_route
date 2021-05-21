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
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onAddTextChange = this.onAddTextChange.bind(this);
        this.getMessageItem = this.getMessageItem.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}

    onAddButtonClick(event){
        this.state.message.push(this.state.temp);
        this.setState({message:this.state.message});
    }

    onDeleteButtonClick(event,text){
        console.log(text);
        
        this.setState(
            {message:this.state.message.filter(
                function(value,index,arr){
                    return value !== text;
                }
            )}
        );

        // var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // var filtered = array.filter(function(value, index, arr){ 
        //     return value > 5;
        // });
        // filtered => [6, 7, 8, 9]
        // array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] will not change
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
                onDeleteButtonClick = {this.onDeleteButtonClick}
                getMessageItem = {this.getMessageItem}
                onAddTextChange = {this.onAddTextChange}
            />
        );
    }
}

export default ToDoController