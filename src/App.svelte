<script>
  import Navbar from "./Navbar.svelte"
  import ExpenseList from "./ExpenseList.svelte";
  import Total from "./Total.svelte";
  // import expenseData from "./expenses.js"
  import ExpenseForm from "./ExpenseForm.svelte";
  import Modal from "./Modal.svelte";
  import {setContext, onMount, afterUpdate} from "svelte";
  import Github from "./Github.svelte";

  onMount(() => {
    expenses = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : [];
  });
  
  afterUpdate(() => {
    setLocalStorage();
  })

  setContext("remove", removeExpense);
  setContext("modify", modifyExpense);
  let setID = null;
  let setName = null;
  let setAmount = null;
  let isFormOpen = false;
  let expenses = [];
  // let expenses = [...expenseData];

  $: total = expenses.reduce((a,b)=>a+ b.amount,0) || 0;
  $: isEditing = setID ? true : false;

  function removeExpense(id) {
    expenses = expenses.filter(item => item.id !== id);
  }

  function removeAllExpense() {
    let deleteConfirm = prompt("Are you sure to delete all your expenses?");
    deleteConfirm.match(/^(?!.*no).*/gi) ? expenses = [] : console.log("User denied!");
  }

  function addExpense({name, amount}) {
    let expense = {id: Math.random() * Date.now(), name, amount};
    expenses = [expense, ...expenses];
  }

  function modifyExpense(id) {
    let expense = expenses.find(item => item.id === id);
    setID = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
    showForm();
  }

  function editExpense({name, amount}) {
    expenses = expenses.map(item => item.id === setID ? {...item, name, amount} : item);
    setID = null;
    setName = "";
    setAmount = null;
  }

  function showForm() {
    isFormOpen = true;
  }

  function hideForm() {
    isFormOpen = false;
    setID = null;
    setName = "";
    setAmount = null;
  }

  function setLocalStorage() {
    localStorage.setItem("expense", JSON.stringify(expenses))
  }
</script>

<Navbar {showForm}/>
<main class="content">
  <Github/>
  <!-- {#if isFormOpen}
    <Modal>
      <ExpenseForm {addExpense} {editExpense} name={setName} amount={setAmount} {isEditing} {hideForm}/>
    </Modal>
  {/if}
    <Total title="total expenses" {total}/>
  <ExpenseList {expenses}/>
  {#if expenses.length>0}
    <button type="button" class="btn btn-primary btn-block" on:click={removeAllExpense}>
      delete all
    </button>
  {/if} -->
</main>