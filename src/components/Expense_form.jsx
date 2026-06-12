import React from 'react'
import './Expense_form.css'
import { useState } from 'react'


const Expense_form = ({exp}) => {
  const[amount , setAmount] = useState("")  
  const[title , setTitle] = useState("")

  function handleAdd(){
    const newExp = {
      title : title,
      amount : amount
    }
    if (title!=="" && amount!=="") {
      exp(newExp) 
      setAmount("")
      setTitle("")
    }
  }

  return (
    <div className='expense_form_main_div'>
      <div className='forms'> 
        <h2>Add Expense</h2>
            <div className='forms_input'>
              <input 
                type="text" 
                placeholder='enter title here'
                value={title}
                onChange={(e) => setTitle(e.target.value)}  
              />
            
              <input 
                type="number" 
                placeholder='enter value here'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button className='add_button_header' onClick={handleAdd}>Add</button>
            </div>
            {/* <div className='display_forms'>
              <h3>{title}</h3> <h3>${amount}</h3>
            </div> */}
      </div>
    </div>
  )
  
}

export default Expense_form
