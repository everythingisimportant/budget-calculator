<script>
    import {fade,fly} from "svelte/transition";
</script>

<div class="modal-container" out:fade>
    <div class="modal-content" transition:fly={{y:200}}>
        <slot></slot>
    </div>
</div>