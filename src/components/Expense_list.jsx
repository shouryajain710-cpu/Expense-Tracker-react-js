import React from 'react'
import './Expense_list.css'

const Expense_list = ({arr , remove}) => {
  return (
    <div>
      <h2>Transactions</h2>
      {arr.map((expense , index) => (
        <div 
        className='expense_list_div'
        key={index}
        > 
          <h3>{expense.title}</h3>
          <p>${expense.amount}</p>
          <button onClick={()=>remove(index)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Expense_list
