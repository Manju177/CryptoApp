import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Header from './Components/Header'
import Home from './Components/Home'
import CoinPage from './Components/CoinPage'
import { makeStyles } from '@material-ui/core/styles';

function App() {
  const [count, setCount] = useState(0)
  const useStyles = makeStyles({
    App: {
      backgroundColor: 'black',
    },
  });
  const classes = useStyles();

  return (

    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
      <Route path='/' component={<Home/>} exact/>
      <Route path='/coins/:id' component={<CoinPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
