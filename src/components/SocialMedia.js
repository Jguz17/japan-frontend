import React, { Component } from 'react'
import {CgFacebook, CgInstagram} from 'react-icons/cg';
import {IoLogoTwitter} from 'react-icons/io';
import { withStyles } from '@material-ui/styles';
import { Grid} from '@material-ui/core'

const useStyles = ({
    iconStyles: {
        color: 'white',
        fontSize: '1.25rem'
    }
})

export class SocialMedia extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid style={{'paddingTop': '100px'}}>
                <CgFacebook className={classes.iconStyles}/>
                <IoLogoTwitter className={classes.iconStyles}/>
                <CgInstagram className={classes.iconStyles}/>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(SocialMedia)
