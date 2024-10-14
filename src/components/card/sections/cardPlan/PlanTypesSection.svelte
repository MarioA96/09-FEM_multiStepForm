<script lang="ts">
    import { planBilling, planType } from '../../../../stores/form.store';
    
    import type { PlanType } from '../../../../interfaces/PlanType.interface';

    import { boxSelectPlanStyles } from '../../../../styles/cardPlan/selectPlanStyles';
    import { cx } from "../../../../../styled-system/css";
    import { grid, gridItem } from '../../../../../styled-system/patterns';

    
    const handleSelectPlan = (planName: keyof PlanType) => {

        console.log(planName);

        switch (planName) {
            case 'Arcade':
                planType.set({ 
                    Arcade: { ...planType.get().Arcade, active: true },

                    Advanced: { ...planType.get().Advanced, active: false },
                    Pro: { ...planType.get().Pro, active: false },
                    Default: { ...planType.get().Default, active: false }
                });
                console.log(planType.get());
                break;
            case 'Advanced':
                planType.set({ 
                    Advanced: { ...planType.get().Advanced, active: true },

                    Arcade: { ...planType.get().Arcade, active: false },
                    Pro: { ...planType.get().Pro, active: false },
                    Default: { ...planType.get().Default, active: false }
                });
                console.log(planType.get());
                break;
            case 'Pro':
                planType.set({ 
                    Pro: { ...planType.get().Pro, active: true },

                    Arcade: { ...planType.get().Arcade, active: false },
                    Advanced: { ...planType.get().Advanced, active: false },
                    Default: { ...planType.get().Default, active: false }
                });
                console.log(planType.get());
                break;
            default:
                break;
        }

    }

    type ButtonsType = {
        id: "arcade" | "advanced" | "pro";
        title: keyof PlanType;
        desc: string;
        imgSrc: string;
        monthlyPrice: number;
        yearlyPrice: number;
    };

    const initialButtonsAvailable: ButtonsType[] = [
        { 
            id: 'arcade', 
            title: 'Arcade', 
            desc: 'Access to multiplayer games',
            imgSrc: '/assets/images/icon-arcade.svg',
            monthlyPrice: planType.get().Arcade.monthlyPrice,
            yearlyPrice: planType.get().Arcade.yearlyPrice,
        },
        { 
            id: 'advanced', 
            title: 'Advanced', 
            desc: 'Extra 1TB of cloud save',
            imgSrc: '/assets/images/icon-advanced.svg',
            monthlyPrice: planType.get().Advanced.monthlyPrice,
            yearlyPrice: planType.get().Advanced.yearlyPrice,
        },
        { 
            id: 'pro', 
            title: 'Pro', 
            desc: 'Custom theme on your profile',
            imgSrc: '/assets/images/icon-pro.svg',
            monthlyPrice: planType.get().Pro.monthlyPrice,
            yearlyPrice: planType.get().Pro.yearlyPrice,
        }
    ]
</script>

<div id="box_selectPlan_monthly" class={ boxSelectPlanStyles({}) }>
                
    {#each initialButtonsAvailable as button, index}

        <button id={`box_selectPlan_type_${button.id}`} 
            class={ grid({ columns: 8 })}
            on:click={ () => {handleSelectPlan(button.title)} }
        >
            <div id={`box_icon_plan_${button.id}`} class={ gridItem({ colSpan: 2 }) }>
                <img src={`${button.imgSrc}`} alt={`${button.id}-icon`}>
            </div>
            <div id={`box_info_plan_${button.id}`} class={ cx( gridItem({ colSpan: 4 }) )}>
                <div id={`info_title_${button.id}`}>{button.title}</div>

                {#if $planBilling === 'monthly'}
                    <div id={`info_price_${button.id}`}>${button.monthlyPrice}/mo</div>
                {:else if $planBilling === 'yearly'}
                    <div id={`info_price_${button.id}`}>${button.yearlyPrice}/yr</div>
                {/if}

            </div>
        </button>

    {/each}
    

</div>