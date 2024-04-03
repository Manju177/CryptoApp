import React, { createContext } from 'react'
import { useContext,useState,useEffect  } from 'react'


const Crypto=createContext();

function CryptoContext({children}) {
    const [currency,setCurrency]=useState('INR')
    const [symbol,setSymbol]=useState('₹')

    useEffect(() => {
      if(currency==='INR') setSymbol("₹") ;
      else if(currency==='USD') setSymbol("$");
    }, [])
    

  return (
   <Crypto.Provider value={{setCurrency,currency,setSymbol,symbol}} >
    {children}
   </Crypto.Provider>
  )
}

export const Cryptocon = () => {
  return useContext(Crypto)
}


export default CryptoContext;