import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import '../assets/styles/main.css'

const useStyles = ({
    typographyStyles: {
        color: 'white'
    },
    buttonStyles: {
        display: 'block',
        backgroundColor: '#f2b76c'
    },
    iconStyles: {
        color: 'white',
        display: 'inline-block',
        fontSize: '2.25rem',
        paddingRight: '1rem'
    },
    paragraph: {
        color: 'white',
    },
    bodyContainerStyles: {
        backgroundColor: 'rgba(0, 0, 0, .7)',
        marginTop: '100px',
        padding: '50px 0 50px 75px'
    }
})

export class Body extends Component {
    render() {
        const { classes } = this.props
        return (
                <Grid className={classes.bodyContainerStyles} container item direction='column'>
                    <Grid style={{'paddingBottom': '75px'}}>
                        <Typography className={classes.typographyStyles} variant='h3'>
                            Japan<br/>A New World
                        </Typography>
                    </Grid>
                    <Grid style={{'paddingBottom': '75px'}}>
                        <AiOutlinePlayCircle className={classes.iconStyles}/>
                        <Grid style={{'display': 'inline-block'}}>
                            <Typography className={classes.paragraph}>
                                Watch video
                            </Typography>
                            <Typography className={classes.paragraph}>
                                Japan August 28, 2020
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Button id='body-button' className={classes.buttonStyles} variant="contained" color="primary">Primary</Button>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Body)