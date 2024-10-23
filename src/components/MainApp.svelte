<script lang="ts">
    import { formNumProcess } from '../stores/form.store';

    import CardPersonalInfo from "./card/CardPersonalInfo.svelte"; 
    import CardSelectPlan from "./card/CardSelectPlan.svelte"; 
    import CardPickAddOns from "./card/CardPickAddOns.svelte"; 
    import CardPayment from "./card/CardPayment.svelte"; 
    import CardConfirmation from './card/CardConfirmation.svelte';
    
    import { css } from '../../styled-system/css';

</script>

<div 
    class={
        css({ 
            display: { 
                xsm: 'flex', 
                lg: 'flex' 
            },
            width: {
                xsm: '100%', 
                lg: '65%' 
            },
            height: {
                xsm: 'fit-content', 
                lg: '100%' 
            },
            justifyContent: 'center',
        })
    }
>
    {#if $formNumProcess === 1}
        <CardPersonalInfo />
    {:else if $formNumProcess === 2}
        <CardSelectPlan />
    {:else if $formNumProcess === 3}
        <CardPickAddOns />
    {:else if $formNumProcess === 4}
        <CardPayment />
    {:else if $formNumProcess === 5}
        <CardConfirmation />
    {/if}
</div>
    