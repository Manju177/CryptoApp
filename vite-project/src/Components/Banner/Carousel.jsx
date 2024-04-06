import { Hidden, makeStyles } from '@material-ui/core'
import React, {useState,useEffect} from 'react'
import { TrendingCoins } from '../../config/api'
import { Cryptocon } from '../../CryptoContext'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';

const useStyles=makeStyles((theme)=>({
    carousel:{
        height:'50%',
        display: 'flex',
        alignItems:"center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
}))

function Carousel() {
    const {currency}=Cryptocon();
    const [trending,setTrending]=useState([]);

   useEffect(() => {
    fetchData()
   }, [currency])
   
    function fetchData(){
    setTimeout(async() => {
      
      try { 
        const data=await fetch(TrendingCoins(currency))
        const response=await data.json();
        console.log(response)
        setTrending(response) 
      } catch (error) {
        console.log(error)
      }
    }, 5000);
   }

    const classes=useStyles()

    const items=trending.map((coin)=>{
      return (
        <Link
        className={classes.carouselItem}
        to={`/coins/${coin.id}`}
        >
          <img src={coin.image} alt={coin.name} height='80' style={{marginBottom: 10}} />
        </Link>
      )
    })
    const responsive={
      0: {
          items: 2,
      },
      512: {
          items: 4,
          itemsFit: 'contain',
      }
    }
  return (
    <div className={classes.carousel}>
      <AliceCarousel
      mouseTracking items={items}
      infinite
      autoplayInterval={1000}
      animationDuration={1500}
      responsive={responsive}
      autoPlay
       />
    </div>
  )
}

export default Carousel