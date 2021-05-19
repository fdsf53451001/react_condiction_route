import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({

});

class ToDoAppForm extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
            [
              <TextField id='add_item' variant='outlined' label='Todo-List' onChange={this.props.onAddTextChange}></TextField>,
              <Button variant='outlined' color='primary' onClick={this.props.onAddButtonClick}>Add</Button>
            ]
        );
    }
}

export default withStyles(useStyles)(ToDoAppForm)