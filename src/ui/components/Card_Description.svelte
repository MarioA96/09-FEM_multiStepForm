<script lang="ts">
    import { css } from "../../../styled-system/css";
</script>

<div id="card_description" 
    class={
        css({
            display: 'flex',
            width: '100%',
            height: 'fit-content',
            padding: '0px 20px 25px 20px'
        })
    }
>
    <slot />
</div>