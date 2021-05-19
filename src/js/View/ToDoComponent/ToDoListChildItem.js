import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Done';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = (theme) => ({

});

class ToDoListChildItem extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            finish : false,
        } 
        this.setIcon = this.setIcon.bind(this);
        this.onStateClick = this.onStateClick.bind(this);
    }
    componentDidMount(){}
    componentWillUnmount(){}

    setIcon(){
        if(this.state.finish){
            return (<DoneIcon/>);
        }
        return (<WarningIcon/>);
    }

    onStateClick(state){
        this.setState({finish:!this.state.finish});
    }

    render(){
        const classes = this.props.classes;
        return(          
          <ListItem button onClick={this.onStateClick}>
            <ListItemIcon>
              {this.setIcon()}
            </ListItemIcon>
            <ListItemText primary={this.props.useText}/>
          </ListItem>
        );
    }
}

export default withStyles(useStyles)(ToDoListChildItem)