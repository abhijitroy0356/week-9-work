import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [comp, updateComp]= useState(false)

  function Onlinesee(){
    const [isOnline, setUseOnline]= useState(window.navigator.onLine)

    useEffect(()=>{
      window.addEventListener('online',()=>{
        setUseOnline(true)
      })

      window.addEventListener('offline',()=>{
        setUseOnline(false)
      })
    },[])

  useEffect(()=>{
    setTimeout(()=>{
      updateComp(true)
    }, 2000)
  },[])
  
    return isOnline
  }
  const onlinestats= Onlinesee()

  const {x,y} =seequads()

  return (
    <> 
     {/* {onlinestats ? "yay on" : " go online bruf"} */}
     your mouse point at {Math.floor(x)} {Math.floor(y)}
    </>
  )
}
function Mycomp() {
  useEffect(() => {
    // This is the cleanup function
    return () => {
      console.log("Component unmounted"); // Example cleanup action
    };
  }, []);

  // Render JSX for the component
  return (
    <>
      <div>hello bro</div>
    </>
  );
}
const seequads=()=>{
  const [quad, setQuad]= useState({x:0 , y:0})
  const handlemouse= (e)=>{
    setQuad({x: e.clientX , y: e.clientY})
  }

  useEffect(()=>{
    window.addEventListener("pointermove",handlemouse);
    return ()=>{
      window.removeEventListener("pointermove",handlemouse)
    }
  },[])
  return quad
}
export default App
