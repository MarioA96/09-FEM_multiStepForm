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
            price: 2 
        },
        { 
            id: 'customProfile', 
            title: 'Customizable profile', 
            desc: 'Custom theme on your profile',
            price: 2 
        }
    ];

</script>

{#each initialButtonsAvailable as button, index}    

    <!-- 
        Comentario importante sobre el comportamiento del formulario,
        si no especificamos el  type del button, por default es de tipo submit,
        lo cual debemos de controlarlo con preventDefault() en el evento de click.
        pero esto impide la activacion de los checkbox, por lo que ese mejor indicar al
        button que sea de tipo button. para que se haga el bind al checkbox y no se envie el formulario.
        Y dado a que este se encontraba anidado dentro de button, entonces, si button e.preventDefault(), este
        anulaba la funcionalidad del checkbox.
        Por eso es importante que se controle en el nivel superior, el form y no desde el button
    -->
    <button id={`box_pickAddOn_type_${button.id}`} 
        type="button"
        class={ cx( grid({ columns: 12 }), buttonAddOnStyles({}) )}
        style:border={ $addOns[button.id].isActive ? '1px solid blue' : `1px solid hsl(229, 24%, 87%)` }
        style:background={ $addOns[button.id].isActive ? 'hsl(229, 100%, 96%)' : 'hsl(0, 0%, 100%)' }
        on:click={ () => handleSelectAddOn(button.id) }
    >
        <div id={`box_checkbox_addOn_${button.id}`} class={ gridItem({ colSpan: 2 }) }>
            <input type="checkbox" id={`checkBox_${button.id}`} 
                bind:checked={ $addOns[`${button.id}`].isActive }
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