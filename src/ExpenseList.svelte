<script>
    import Expense from "./Expense.svelte";
    import SectionTitle from "./Title.svelte";
    export let expenses = [];
</script>

<section>
    <SectionTitle title="Expenses List"/>
    <ul>
        {#each expenses as exp, index}
        <Expense {...exp}/>
        {:else}
        <h2>Currently you have to expense</h2>
        {/each}
    </ul>
</section>