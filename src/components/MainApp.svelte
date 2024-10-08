<script lang="ts">
    import { formNumProcess } from '../stores/form.store';

    import CardPersonalInfo from "./card/CardPersonalInfo.svelte"; 
    import CardSelectPlan from "./card/CardSelectPlan.svelte"; 
    import CardPickAddOns from "./card/CardPickAddOns.svelte"; 

</script>

{#if $formNumProcess === 1}
    <CardPersonalInfo />
{:else if $formNumProcess === 2}
    <CardSelectPlan />
{:else if $formNumProcess === 3}
    <CardPickAddOns />
<!--
{:else if $formNumProcess === 4}
    <CardPayment />
{:else}
    <CardPersonalInfo />
-->
{/if}
    