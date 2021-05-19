import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ToDoListChildItem from './ToDoListChildItem';

const useStyles = (theme) => ({

});

class ToDoListItem extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    // seems this function won't called on update
    renderItemProvider(){
      console.log('update');
      let MsgArray = [];
      this.props.getMessageItem().forEach(function(item, index, array) {
        MsgArray.push((<ToDoListChildItem useText={item}/>));
      });
      return MsgArray;
    }

    render(){
        const classes = this.props.classes;
        return(
          <List component="nav" aria-label="todo list">
            {this.renderItemProvider()}
            {/* <ToDoListChildItem useText={"Msg1"}/>
            <ToDoListChildItem useText={"Msg2"}/> */}
          </List>
        );
    }
}

export default withStyles(useStyles)(ToDoListItem)