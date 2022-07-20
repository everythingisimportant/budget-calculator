<script>
  import Navbar from "./Navbar.svelte"
  import ExpenseList from "./ExpenseList.svelte";
  import data from "./expenses.js"
</script>

<Navbar/>
<main class="content">
  <ExpenseList expenses={data}/>
</main>