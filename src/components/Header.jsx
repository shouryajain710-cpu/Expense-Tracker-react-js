import React from 'react'

const Header = ({bal}) => {
  
  return (
    <div 
        className='Header_main_div' 
        style={{
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            justifyContent : "center"        
        }
        }
    >
      <h1>
        Expense Tracker
      </h1>
        <div>
            <h2 style={{display:'inline'}}>Total Budget : </h2><h2 style={{color: bal<0? "red" : "green" , display:'inline'}}>${bal} </h2>
        </div>
    </div>
  )
}

export default Header
