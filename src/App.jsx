import './App.css'
import Header from './components/Header.jsx'
import Expense_form from './components/Expense_form.jsx'
import Expense_list from './components/Expense_list.jsx'
import { useState } from 'react'


function App() {
  const[balance , setBalance] = useState(0.00)
  const[expense , setExpense] = useState([])
  const[balanceInput , setBalanceInput] = useState("")
  const[form , setForm] = useState(false)
  
  function handleExpenses(newExp){
    setExpense([...expense,newExp])
    setBalance(balance - parseInt(newExp.amount))
  }
  
  function handleRemove(clickedNum){
    setBalance(balance + parseInt(expense[clickedNum].amount))
    setExpense(expense.filter((expense , index) => index!==clickedNum))
  }

  function showForm(){
    setForm(!form)
  }

  function pushBudget(){
    if (balanceInput !== "") {
      setBalance(balance + parseInt(balanceInput))
      setForm(!form)
    }
    setBalanceInput("")
  }

  

  return (
    <div className="main_div">
      <div className='center_card'>
        <Header bal={balance} />
        <button onClick={showForm} className='app_button_form'>
          Add Form 
        </button>
      {form && 
        (<div className='form_div'>
        <input type="number" placeholder='enter budget here' value={balanceInput} onChange={(e) => setBalanceInput(e.target.value)}/>
        <button onClick={pushBudget}>push</button>
        </div>)
      }
        <Expense_form exp={handleExpenses}/>
        <Expense_list arr={expense} remove={handleRemove}/>
      </div>
    </div>
  )
}

export default App