import React, { Component } from 'react';
import { createStyles, makeStyles, withStyles ,Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: 'rgba(0, 0, 0, .7)',
      boxShadow: 'none'
    }
})

export class Nav extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
              <AppBar className={classes.appbar} position="static">
                <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                    Japan - A New World
                  </Typography>
                  <Button style={{'marginRight': '1.5rem'}} color="inherit">Prices</Button>
                  <Button style={{'marginRight': '1.5rem'}} color="inherit">History</Button>
                  <Button style={{'marginRight': '1.5rem'}} color="inherit">Contacts</Button>
                  <Button style={{'marginRight': '1.5rem'}} color="inherit">Q&A</Button>
                </Toolbar>
              </AppBar>
            </div>
          );
    }
}

export default withStyles(useStyles)(Nav)
