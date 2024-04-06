import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Header from './Components/Header'
import Home from './Pages/Home'
import CoinPage from './Pages/CoinPage'
import { makeStyles,createTheme,ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  App: {
    color: 'white',
  },
}));

const theme = createTheme({
  palette: {
    type: 'dark'
  }
});
function App() {
  const [count, setCount] = useState(0)
  const classes = useStyles();

  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
    <div className={classes.App} >
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>
    </div>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
