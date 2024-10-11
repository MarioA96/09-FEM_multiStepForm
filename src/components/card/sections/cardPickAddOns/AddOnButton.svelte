<script lang="ts">
    import { planBilling, addOns } from "../../../../stores/form.store";

    import { cx } from "../../../../../styled-system/css";
    import { grid, gridItem } from "../../../../../styled-system/patterns";
    import { buttonAddOnStyles } from "../../../../styles/cardPickAddOns/buttonAddOnStyles";

    import { useCardAddOns }  from "../../../../hooks/useCardAddOns";
    //import type { PreinitializedWritableAtom } from "nanostores"; 


    const { 
        //borderOnline,
        //backgroundOnline,
        handleSelectAddOn 
    } = useCardAddOns();

    type ButtonsType = {
        id: "online" | "largerStorage" | "customProfile";
        title: string;
        desc: string;
        //properties: {
        //    border: PreinitializedWritableAtom<string>;
        //    background: PreinitializedWritableAtom<string>;
        //};
        price: number;
    };

    const initialButtonsAvailable: ButtonsType[] = [
        { 
            id: 'online', 
            title: 'Online service', 
            desc: 'Access to multiplayer games', 
            //properties: {
            //    border: borderOnline, 
            //    background: backgroundOnline
            //},
            price: 1 
        },
        { 
            id: 'largerStorage', 
            title: 'Larger storage', 
            desc: 'Extra 1TB of cloud save',
            price: 2 },
        { 
            id: 'customProfile', 
            title: 'Customizable profile', 
            desc: 'Custom theme on your profile',
            price: 2 
        }
    ];
</script>

{#each initialButtonsAvailable as button, index}    

    <button id={`box_pickAddOn_type_${button.id}`} 
        class={ cx( grid({ columns: 12 }), buttonAddOnStyles({}) )}
        on:click={ () => handleSelectAddOn(button.id) }
        style:border={ $addOns[button.id] ? '1px solid blue' : `1px solid hsl(229, 24%, 87%)` }
        style:background={ $addOns[button.id] ? 'hsl(229, 100%, 96%)' : 'hsl(0, 0%, 100%)' }
    >
        <div id={`box_checkbox_addOn_${button.id}`} class={ gridItem({ colSpan: 2 }) }>
            <input type="checkbox" name={button.id} id={`checkBox_${button.id}`} 
                bind:checked={$addOns[button.id]}
            >
        </div>
        <div id={`box_info_plan_${button.id}`} class={ cx( gridItem({ colSpan: 8 }) ) }>
            <div id={`info_title_${button.id}`}>
                {button.title}
            </div>
            <div id={`info_desc_${button.id}`}>
                {button.desc}
            </div>
        </div>
        <div id={`box_price_addOn_${button.id}`} class={gridItem({ colSpan: 2 })}>
            
            {#if $planBilling === 'monthly'}
                <div id={`info_price_${button.id}`}>+${`${button.price}`}/mo</div>
            {:else if $planBilling === 'yearly'}
                <div id={`info_price_${button.id}`}>+{`${button.price * 10}`}/yr</div>
            {/if}

        </div>
    </button>

{/each}