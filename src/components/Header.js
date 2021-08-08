import React,{useEffect,useState} from 'react';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        fontFamily:"'STIX Two Text', serif",
        

    },
    appbar:{
        background:'none',
        fontFamily:"'STIX Two Text', serif",
        

    },
    icon:{
        color:'#FF69B4',
        fontSize:'3rem',

    },
    appbarTitle:{
        flexGrow:'1',
        color: '#FF69B4'
        
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto'
    },
    colorText:{
        color:'#FFFF00',

    },
    container:{
        textAlign: 'center',

    },
    title:{
        color:'#FF69B4',
        fontSize:'3rem',
    },
    yourTitle:{
        fontFamily: "'Pacifico', cursive",
        fontSize:'4.5rem',
        color:'#FF69B4',
    },
    goDown:{
        color:'#FF69B4',
        fontSize: '4rem',
    }

}));

export default function Header() {
    const classes = useStyles();
    const [checked,setChecked]= useState(false);
    useEffect(()=>{
       setChecked(true);
    },[])
    return (
    <div className={classes.root} id='header'>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>World</span></h1>
            <IconButton>
                <MenuIcon className={classes.icon}/>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse in={checked} {...(checked ? { timeout: 3000 } : {})} collapsedHeight={40}>
        <div className={classes.container}>
            <h1 className={classes.yourTitle}>
                Welcome To my<br/><span className={classes.colorText}> World of Heaven</span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>

            
            <IconButton>
                <ArrowDownwardIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    </div>
    )
}