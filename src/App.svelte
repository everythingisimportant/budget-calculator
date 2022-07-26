<script>
  import Navbar from "./Navbar.svelte"
  import Total from "./Total.svelte";
  import ExpenseList from "./ExpenseList.svelte";
  import ExpenseForm from "./ExpenseForm.svelte";
  import Modal from "./Modal.svelte";
  import {setContext, onMount, afterUpdate} from "svelte";
  import {setupI18n} from "./i18n.js";

  // reactive
  $: total = expenses.reduce((a,b)=>a+ b.amount,0) || 0;
  $: isEditing = setID ? true : false;

  // variables
  let setID = null;
  let setName = null;
  let setAmount = null;
  let isFormOpen = false;
  let expenses = [];

  // functions
  onMount(() => expenses = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : []);
  
  afterUpdate(() => setLocalStorage());
  
  const addExpense = ({name, amount}) => {
    let expense = {id: Math.random() * Date.now(), name, amount};
    expenses = [expense, ...expenses];
  }

  const modifyExpense = (id) => {
    let expense = expenses.find(item => item.id === id);
    setID = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
    showForm();
  }

  const editExpense = ({name, amount}) => {
    expenses = expenses.map(item => item.id === setID ? {...item, name, amount} : item);
    setID = null;
    setName = "";
    setAmount = null;
  }

  const removeExpense = (id) => expenses = expenses.filter(item => item.id !== id);

  const removeAllExpense = (_) => {
    let deleteConfirm = prompt("Are you sure to delete all your expenses?");
    deleteConfirm.match(/^(?!.*no).*/gi) ? expenses = [] : console.log("User denied!");
  }

  setContext("remove", removeExpense);
  setContext("modify", modifyExpense);

  const showForm = () => isFormOpen = true;

  const hideForm = () => {
    isFormOpen = false;
    setID = null;
    setName = "";
    setAmount = null;
  }

  const setLocalStorage = (_) => localStorage.setItem("expense", JSON.stringify(expenses))
  setupI18n({withLocale: 'en'});
</script>

<Navbar {showForm}/>
<main class="content">
  {#if isFormOpen}
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
  {/if}
</main>
