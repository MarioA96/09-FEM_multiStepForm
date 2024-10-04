<script lang="ts">
    import { planBilling, planType } from '../../../../stores/form.store';

    import { boxSelectPlanStyles } from '../../../../styles/cardPlan/selectPlanStyles';
    import { cx } from "../../../../../styled-system/css";
    import { grid, gridItem } from '../../../../../styled-system/patterns';


    const handleSelectPlan = (type: string) => {
        planType.set(type);
    }

</script>

<div id="box_selectPlan_yearly" class={ boxSelectPlanStyles({}) }>
                    
    <button id="box_selectPlan_type_arcade" 
        class={ grid({ columns: 8 })}
        on:click={ () => {handleSelectPlan('arcade')} }
    >
        <div id="box_icon_plan_arcade" class={ gridItem({ colSpan: 2 }) }>
            <img src="/assets/images/icon-arcade.svg" alt="arcade-icon">
        </div>
        <div id="box_info_plan_arcade" class={ cx( gridItem({ colSpan: 4 }) )}>
            <div id="info_title_arcade">Arcade</div>
            <div id="info_price_arcade">$90/yr</div>
        </div>
    </button>

    <button id="box_selectPlan_type_advanced"
        class={ grid({ columns: 8 })}
        on:click={ () => {handleSelectPlan('advanced')} }
    >
        <div id="box_icon_plan_advanced" class={ gridItem({ colSpan: 2 }) }>
            <img src="/assets/images/icon-advanced.svg" alt="advanced-icon">
        </div>
        <div id="box_info_plan_advanced" class={ cx( gridItem({ colSpan: 4 }) )}>
            <div id="info_title_advanced">Advanced</div>
            <div id="info_price_advanced">$120/yr</div>
        </div>
    </button>

    <button id="box_selectPlan_type_pro"
        class={ grid({ columns: 8 })}
        on:click={ () => {handleSelectPlan('pro')} }
    >
        <div id="box_icon_plan_pro" class={ gridItem({ colSpan: 2 }) }>
            <img src="/assets/images/icon-pro.svg" alt="pro-icon">
        </div>
        <div id="box_info_plan_pro" class={ cx( gridItem({ colSpan: 4 }) )}>
            <div id="info_title_pro">Pro</div>
            <div id="info_price_pro">$150/yr</div>
        </div>
    </button>

</div>