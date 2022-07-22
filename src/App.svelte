<script>
  import Navbar from "./Navbar.svelte"
  import ExpenseList from "./ExpenseList.svelte";
  import Total from "./Total.svelte";
  import expenseData from "./expenses.js"
  import ExpenseForm from "./ExpenseForm.svelte";
  import {setContext} from "svelte";

  let remove = setContext("remove", removeExpense);
  let modify = setContext("modify", modifyExpense);
  let setID = null;
  let setName = null;
  let setAmount = null;
  let expenses = [...expenseData];
  let total = expenses.reduce((a,b)=>a+ b.amount,0) || 0;
  $: isEditing = setID ? true : false;

  function removeExpense(id) {
    expenses = expenses.filter(item => item.id !== id);
  }
  function removeAllExpense() {
    expenses = [];
  }
  function addExpense({name, amount}) {
    let expense = {id: Math.random() * Date.now(), name, amount};
    expenses = [expense, ...expenses];
  }
  function editExpense({name, amount}) {
    console.log(name, amount);
  }
  function modifyExpense(id) {
    let expense = expenses.find(item => item.id === id);
    setID = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
  }
</script>

<Navbar/>
<main class="content">
  <ExpenseForm {addExpense} {editExpense} name={setName} amount={setAmount} {isEditing}/>
  <Total title="total expenses" {total}/>
  <ExpenseList {expenses}/>
  <button type="button" class="btn btn-primary btn-block" on:click={removeAllExpense}>
    delete all
  </button>
</main>