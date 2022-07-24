<script>
    import {getContext} from "svelte";
    import {slide} from "svelte/transition";
    export let id;
    export let name;
    export let amount;
    let displayAmount = false;
    let remove = getContext("remove")
    let modify = getContext("modify")
    function toggleAmount() {
        displayAmount = !displayAmount;
    }
</script>

<article class="single-expense">
    <div class="expense-info">
        <h2>{name}
            <button class="amount-btn" on:click={toggleAmount}>
                <i class="fas fa-caret-down"></i>
            </button>
        </h2>
        {#if displayAmount}
            <h4 transition:slide>amount: ${amount}</h4>
        {/if}
    </div>
    <div class="expense-button">
        <button class="expense-btn edit-btn" on:click={()=>modify(id)}>
            <i class="fas fa-pen"></i>
        </button>
        <button class="expense-btn delete-btn" on:click={()=>remove(id)}>
            <i class="fas fa-trash"></i>
        </button>
    </div>
</article>