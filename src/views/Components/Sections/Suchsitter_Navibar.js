import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
   

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
        marginLeft : '50px',
      Align : "center"
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 225,

  },
  }));

export default function Navibar() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    

  return (

<Grid item lm={12} Align Items="center">
                <Paper className={classes.paper}>
                    
                        <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root2}
                        >
                        
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Open Menu
                        </Button>
                       
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        
                        <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="맞기는날"
                            type="datetime-local"
                            defaultValue="2020-11-12T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </form>
                        <form className={classes.container} noValidate>
                        <TextField
                            id="datetime-local"
                            label="찾는날"
                            type="datetime-local"
                            defaultValue="2020-11-12T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </form>
                        <Button variant="contained" color="primary" href="#contained-buttons">
                            검색
                        </Button>
                        </BottomNavigation>

                        
                    
                    
                    </Paper>
                <Container maxWidth="lm" align="center" className={classes.heroContent} >
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
                </Container>
            </Grid>

              );
            }
            