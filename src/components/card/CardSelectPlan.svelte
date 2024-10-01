<script lang="ts">
    import { planBilling } from '../../stores/form.store';

    import { cx, cva, css } from "../../../styled-system/css";
    import { grid, gridItem } from "../../../styled-system/patterns";
    
    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";
    
    const FormStyles = cva({
        base: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'fit-content',
            '& div[id^=box_selectPlan_type]':{
                width: '100%',
                height: '70px',
                border: '1px solid hsl(229, 24%, 87%)',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0px 5px 0px 15px',
                marginBottom: '10px',
                '_focus': {
                    bg: 'blue.50',
                    cursor: 'pointer',
                    border: '1px solid hsl(213, 96%, 18%)',
                },
                '& div[id^=box_icon_plan]':{
                    display: 'flex', 
                    height: '60%', 
                    alignContent: 'center', 
                    justifyContent: 'center'
                },
            }
        }
    });
</script>

<Card>
    <Card_Header>
        <div id="title_selectPlan"
            class={
                css({
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'hsl(213, 96%, 18%)',
                })
            }	
        >
            Select your plan
        </div>
    </Card_Header>
    <Card_Description>
        <div id="description_selectPlan"
            class={
                css({
                    fontSize: '16px',
                    color: 'gray.500',
                })
            }
        >
            You have the option of monthly or yearly billing.
        </div>
    </Card_Description>
    <Card_Body>
        
        <form id="form_selectPlan" class={FormStyles({})}>

            {#if $planBilling === 'monthly'}
                <div id="box_selectPlan_monthly">
                    
                    <div id="box_selectPlan_type_arcade" 
                        class={ grid({ columns: 8 })}
                    >
                        <div id="box_icon_plan_arcade" class={ gridItem({ colSpan: 2 }) }>
                            <img src="/assets/images/icon-arcade.svg" alt="arcade-icon">
                        </div>
                        <div id="box_info_plan_arcade" class={ cx( gridItem({ colSpan: 4 }), css({ height: '70%', bg: 'green.200' }) )}>

                        </div>
                    </div>

                    <div id="box_selectPlan_type_advanced"
                        class={ grid({ columns: 8 })}
                    >
                        <div id="box_icon_plan_advanced" class={ gridItem({ colSpan: 2 }) }>
                            <img src="/assets/images/icon-advanced.svg" alt="advanced-icon">
                        </div>
                        <div id="box_info_plan_advanced" class={ cx( gridItem({ colSpan: 4 }), css({ height: '70%', bg: 'green.200' }) )}>

                        </div>
                    </div>

                    <div id="box_selectPlan_type_pro"
                        class={ grid({ columns: 8 })}
                    >
                        <div id="box_icon_plan_pro" class={ gridItem({ colSpan: 2 }) }>
                            <img src="/assets/images/icon-pro.svg" alt="pro-icon">
                        </div>
                        <div id="box_info_plan_pro" class={ cx( gridItem({ colSpan: 4 }), css({ height: '70%', bg: 'green.200' }) )}>

                        </div>
                    </div>

                </div>
            {:else if $planBilling === 'yearly'}
                <div id="box_selectPlan_yearly">
                    <div id="box_selectPlan_arcade">
                        yearly
                    </div>
                    <div id="box_selectPlan_advanced">
                    </div>
                    <div id="box_selectPlan_pro">
                    </div>
                </div>
            {/if}

        </form>

    </Card_Body>
</Card>