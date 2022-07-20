<script>
  import Navbar from "./Navbar.svelte"
  import ExpenseList from "./ExpenseList.svelte";
  import expenseData from "./expenses.js"
  let expenses = [...expenseData]
  function removeExpense(event){
    expenses = expenses.filter(item => item.id !== event.detail);
  }
  function removeAllExpense(){
    expenses = []
  }
</script>

<Navbar/>
<main class="content">
  <ExpenseList {expenses} on:delete={removeExpense}/>
  <button type="button" class="btn btn-primary btn-block" on:click={removeAllExpense}>
    delete all
  </button>
</main>