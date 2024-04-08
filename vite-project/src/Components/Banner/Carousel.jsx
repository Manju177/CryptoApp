import { Hidden, LinearProgress, makeStyles } from '@material-ui/core'
import React, {useState,useEffect} from 'react'
import { TrendingCoins } from '../../config/api'
import { Cryptocon } from '../../CryptoContext'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
// import LinearDeterminate from '../../assets/LinearProgressBar'

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

export const numberWithRounding=(x)=>{
 return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
   
}
function Carousel() {
    const {currency,symbol}=Cryptocon();
    const [trending,setTrending]=useState([]);

   useEffect(() => {
    //debouncing update
    
    const time=setTimeout(()=>{
      fetchData()
    },1000)
    return ()=>{
      clearTimeout(time)
    }
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
      let profit=coin.price_change_percentage_24h>=0
      return (
        <Link
        className={classes.carouselItem}
        to={`/coins/${coin.id}`}
        >
          <img src={coin.image} alt={coin.name} height='80' style={{marginBottom: 10}} />
          <span>{coin?.symbol}</span>
          &nbsp;
          <span>
            {profit && '+'}{coin.price_change_percentage_24h?.toFixed(2)}
          </span>
          <span style={{fontSize:22, fontWeight:500}}>
            {symbol}{numberWithRounding(coin?.current_price.toFixed(2))}
          </span>
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
    <>
    {/* <LinearDeterminate/> */}
    <div className={classes.carousel}>
      <AliceCarousel
      mouseTracking items={items}
      infinite
      autoplayInterval={1000}
      animationDuration={1500}
      responsive={responsive}
      autoPlay
      disableButtonsControls
      disableDotsControls
       />
    </div>
    </>
  )
}

export default Carousel