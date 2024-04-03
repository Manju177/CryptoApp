import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Container, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from "react-router-dom";
import { Cryptocon } from '../CryptoContext';

const useStyles =makeStyles(()=>({
    typograpy:{
        color:'gold',
        flex:1,
        fontFamily:'Helvetica',
        fontSize:'20px',
        fontWeight:'bold',
       cursor:'pointer'
    }
}))
function Header() {
const {setCurrency,currency}=Cryptocon()
const navigate=useNavigate()
  const classes = useStyles();
  return (
    <AppBar position="static" color='transperant' >
    <Container>
    <Toolbar>
      <Typography className={classes.typograpy} onClick={()=>{
        navigate('/')
      }} >
        Crypto App
      </Typography>
      <Select variant="outlined" style={{
        width:100,
        height:40,
        
      }}
      value={currency}
      onChange={(e)=>{
          setCurrency(e.target.value)
      }}
      >
         <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
      </Select>
    </Toolbar>
    </Container>
  </AppBar>
    
  )
}

export default Header