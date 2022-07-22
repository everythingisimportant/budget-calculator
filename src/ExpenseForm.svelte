<script>
    import Title from "./Title.svelte";
    export let addExpense;
    export let editExpense;
    export let name = '';
    export let amount = null;
    export let isEditing = false;
    $: isEmpty = !name || !amount;
    function handleSubmit() {
        if(isEditing) {
            editExpense({name, amount})
        } else {
            addExpense({name, amount})
        }
        name = "";
        amount = null;
    }
</script>

<section class="form">
    <Title title="expense form"/>
    <form action="" class="expense-form" on:submit|preventDefault={handleSubmit}>
        <div class="form-control">
            <label for="name">name</label>
            <input type="text" id="name" bind:value={name}>
        </div>
        <div class="form-control">
            <label for="amount">amount</label>
            <input type="number" id="amount" bind:value={amount}>
        </div>
        {#if isEmpty}
            <p class="form-empty">please fill out all form fields</p>
        {/if}
        <button type="submit" class="btn btn-block" class:disabled={isEmpty} disabled={isEmpty}>
            {#if isEditing}edit expense{:else}add expense{/if} 
        </button>
        <button class="close-btn"><i class="fas fa-times"></i>close</button>
    </form>
</section>