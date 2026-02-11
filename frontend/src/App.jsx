import React from 'react'
import home from './pages/home'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path=  '/ ' element={<home/>}/>

     </Routes>
      
    </div>
  )
}

export default App
