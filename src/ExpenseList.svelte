<script>
    import Expense from "./Expense.svelte";
    import SectionTitle from "./Title.svelte";
    import {fly} from "svelte/transition";
    import {flip} from "svelte/animate";
    export let expenses;
</script>

<section>
    <SectionTitle title="Expenses List"/>
    <ul>
        {#each expenses as expense, index (expense.id)}
        <div in:fly={{x:200, delay:200*index}} out:fly={{x:-200}} animate:flip>
            <Expense {...expense}/>
        </div>
        {:else}
            <h2>Currently you have no expenses</h2>
        {/each}
    </ul>
</section>