<script lang="ts">

    import { formNumProcess, planBilling, addOns } from "../../stores/form.store";

    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";

    import { cva, cx, css } from "../../../styled-system/css";
    import { grid, gridItem } from "../../../styled-system/patterns";

    $: formNumProcess.set(3);

    $: borderOnline = $addOns.online ? '1px solid blue' : '1px solid hsl(229, 24%, 87%)';

    let stateButtonOnline = false;

    const handleSelectAddOn = (addOn: string, typeEvent: string) => {
        if( typeEvent === 'button' && !stateButtonOnline ){
            addOns.set({
                ...$addOns,
                [addOn]: true,
            });
            stateButtonOnline = true;
        }
        else if( typeEvent === 'button' && stateButtonOnline ){
            addOns.set({
                ...$addOns,
                [addOn]: false,
            });
            stateButtonOnline = false;
        }
    }

    const buttonAddOnStyles = cva({
        base: {
            width: '100%', 
            borderRadius: '8px', 
            padding: '10px 0px 10px 5px', 
            alignItems: 'center', 
            marginBottom: '10px',
            cursor: 'pointer',
            "& input[id^='checkBox_']":{
                width: '18px', 
                height: '18px',
                accentColor: 'blue.900'
            },
            "& div[id^='info_title_']": {
                fontFamily: 'ubuntu_bold', 
                fontSize: '15px', 
                color: 'blue.900', 
                textAlign: 'left'
            },
            "& div[id^='info_desc_']": {
                fontFamily: 'ubuntu_bold', 
                fontSize: '12px', 
                color: 'gray.400', 
                textAlign: 'left'
            },
            "& div[id^='box_price_addOn_']": {
                fontFamily: 'ubuntu_regular', 
                fontWeight: '600', 
                fontSize: '12px', 
                color: 'hsl(243, 100%, 62%)', 
                marginLeft: '-25px'
            }
        }
    });

</script>


<Card>
    <Card_Header>
        <div id="title_pickAddOns"
            class={
                css({
                    fontFamily: 'ubuntu_bold',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'hsl(213, 96%, 18%)',
                })
            }	
        >
            Pick add-ons
        </div>
    </Card_Header>
    <Card_Description>
        <div id="description_pickAddOns"
            class={
                css({
                    fontFamily: 'ubuntu_regular', 
                    fontSize: '16px',
                    color: 'gray.400',
                })
            }
        >
            Add-ons help enhance your gaming experience.
        </div>
    </Card_Description>
    <Card_Body>
        
        <form id="form_pickAddOns" 
            class={
                css({ 
                    flexDirection: 'column',
                    width: '100%', 
                    height: 'fit-content'
                })
            }
            on:submit={ (e) => e.preventDefault() }
        >
            <div id="box_pickAddOn_monthly">

                <button id="box_pickAddOn_type_online" 
                    class={ cx( grid({ columns: 12 }), buttonAddOnStyles({}) )}
                    on:click={ () => handleSelectAddOn('online', 'button') }
                    style:border={borderOnline}
                >
                    <div id="box_checkbox_addOn_online" class={ gridItem({ colSpan: 2 }) }>
                        <input type="checkbox" name="online" id="checkBox_online" 
                            on:click={ () => handleSelectAddOn('online', 'checkbox') }
                            bind:checked={$addOns.online}
                        >
                    </div>
                    <div id="box_info_plan_online" class={ cx( gridItem({ colSpan: 8 }) ) }>
                        <div id="info_title_online">
                            Online service
                        </div>
                        <div id="info_desc_online">
                            Access to multiplayer games
                        </div>
                    </div>
                    <div id="box_price_addOn_online" class={gridItem({ colSpan: 2 })}>
                        
                        {#if $planBilling === 'monthly'}
                            <div id="info_price_online">+$1/mo</div>
                        {:else if $planBilling === 'yearly'}
                            <div id="info_price_online">+10/yr</div>
                        {/if}

                    </div>
                </button>

                <button id="box_pickAddOn_type_largerStorage" 
                    class={ cx( grid({ columns: 12 }), buttonAddOnStyles({}) )}
                >
                    <div id="box_checkbox_addOn_largerStorage" class={ gridItem({ colSpan: 2 }) }>
                        <input type="checkbox" name="" id="checkBox_largerStorage">
                    </div>
                    <div id="box_info_plan_largerStorage" class={ cx( gridItem({ colSpan: 8 }) ) }>
                        <div id="info_title_largerStorage">
                            Larger storage
                        </div>
                        <div id="info_desc_largerStorage">
                            Extra 1TB of cloud save
                        </div>
                    </div>
                    <div id="box_price_addOn_largerStorage" class={ gridItem({ colSpan: 2 }) }>
                        
                        {#if $planBilling === 'monthly'}
                            <div id="info_price_largerStorage">+$2/mo</div>
                        {:else if $planBilling === 'yearly'}
                            <div id="info_price_largerStorage">+20/yr</div>
                        {/if}

                    </div>
                </button>
                
                <button id="box_pickAddOn_type_customProfile" 
                    class={ cx( grid({ columns: 12 }), buttonAddOnStyles({}) )}
                >
                    <div id="box_checkbox_addOn_customProfile" class={ gridItem({ colSpan: 2 }) }>
                        <input type="checkbox" name="" id="checkBox_customProfile">
                    </div>
                    <div id="box_info_plan_customProfile" class={ cx( gridItem({ colSpan: 8 }) ) }>
                        <div id="info_title_customProfile">
                            Larger storage
                        </div>
                        <div id="info_desc_customProfile">
                            Extra 1TB of cloud save
                        </div>
                    </div>
                    <div id="box_price_addOn_customProfile" class={ cx( gridItem({ colSpan: 2 }) ) }>
                        
                        {#if $planBilling === 'monthly'}
                            <div id="info_price_customProfile">+$2/mo</div>
                        {:else if $planBilling === 'yearly'}
                            <div id="info_price_customProfile">+20/yr</div>
                        {/if}

                    </div>
                </button>

            </div>
        </form>

    </Card_Body>
</Card>