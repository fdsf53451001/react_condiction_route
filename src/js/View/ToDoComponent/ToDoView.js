import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ToDoHeader from './ToDoHeader';
import ToDoAddForm from './ToDoAddForm';
import ToDoListItem from './ToDoListItem';

const useStyles = (theme) => ({
    
});

class ToDoView extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
            [
              <ToDoHeader/>,
              <ToDoAddForm 
                onAddButtonClick={this.props.onAddButtonClick} 
                onAddTextChange = {this.props.onAddTextChange}
              />,
              <ToDoListItem getMessageItem={this.props.getMessageItem}/>
            ]
        );
    }
}

export default withStyles(useStyles)(ToDoView)