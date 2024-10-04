<script lang="ts">

    import { planBilling } from '../../../../stores/form.store';

    import { cx, css } from "../../../../../styled-system/css";
    import { planSliderStyles } from '../../../../styles/cardPlan/planSliderStyles';


    const handleSelectBilling = (e: Event) => {
        const target = e.target as HTMLInputElement;
        target.checked ? planBilling.set('yearly') : planBilling.set('monthly');
    }
</script>


<div id="plan_type_slider" 
    class={planSliderStyles({})}
>
    <span id="switch_plan_monthly">Monthly</span>
        <label class="switch">
            <input type="checkbox" on:change={handleSelectBilling}>
            <span class="slider"></span>
        </label>
    <span id="switch_plan_yearly">Yearly</span>
</div>