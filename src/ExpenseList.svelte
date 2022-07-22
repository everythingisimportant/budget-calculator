<script>
    import Expense from "./Expense.svelte";
    import SectionTitle from "./Title.svelte";
    export let expenses;
</script>

<section>
    <SectionTitle title="Expenses List"/>
    <ul>
        {#each expenses as exp}
        <Expense {...exp} on:delete/>
        {:else}
        <h2>Currently you have no expenses</h2>
        {/each}
    </ul>
</section>