import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({

});

class ToDoHeader extends React.Component{    
    constructor(props){
        super(props);       
    }
    componentDidMount(){}
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
            <Typography component="h3" variant="h3">ToDo-List</Typography>
        );
    }
}

export default withStyles(useStyles)(ToDoHeader)