import { Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from '../Components/Banner/Carousel'

const useStyles=makeStyles(()=>({
  bannerContents:{
    backgroundImage: "url(./crypto.jpg)"
  
  },
  bannerSize:{
    height:400,
    paddingTop:20,
    display: "flex",
    flexDirection: "column",
    justifyContent:'space-around',

  },
  tagline:{
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent:'center',
    textAlign: 'center',
  }
}))
function Home() {

  const classes=useStyles()
  return (
    <div className={classes.bannerContents}>
      <Container className={classes.bannerSize}>
        <div className={classes.tagline}>
        <Typography variant='h2'
        style={{
          fontWeight:'bold',
          fontFamily:'Montserrat',
        }}
        >
          Crypto Currency
        </Typography>
        <Typography variant='subtitle1'
        style={{
          color: 'darkgrey',
          textTransform:'capitalize',
          fontFamily:'Montserrat',
        }}
        >
          Invest for the future 
        </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Home