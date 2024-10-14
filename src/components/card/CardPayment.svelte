<script lang="ts">
    import { formNumProcess, planBilling, planType, addOns } from "../../stores/form.store";
    
    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";
    
    import { cva, cx, css } from "../../../styled-system/css";
    import { grid, gridItem } from "../../../styled-system/patterns";
    
    import type { Plan } from "../../interfaces/PlanType.interface";

    $: formNumProcess.set(4);

    
    const planTypeData: string = planType.get().Arcade.active ? 'Arcade' : planType.get().Advanced.active ? 'Advanced' : 'Pro';
    
    const plan: Plan = planType.get().Arcade.active ? planType.get().Arcade : planType.get().Advanced.active ? planType.get().Advanced : planType.get().Pro;
    const planPriceByBilling: number = planBilling.get() === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
    
    const planBillingCase = planBilling.get() === 'monthly' ? 'mo' : 'yr';

    type AddOnsProperties = {
        id: string;
        title: string;
        isActive: boolean;
    };

    const addOnsProperties: AddOnsProperties[] = [
        {
            id: 'online',
            title: 'Online service',
            isActive: addOns.get().online.isActive
        },
        {
            id: 'largerStorage',
            title: 'Larger storage',
            isActive: addOns.get().largerStorage.isActive
        },
        {
            id: 'customProfile',
            title: 'Customizable profile',
            isActive: addOns.get().customProfile.isActive
        },
    ];

    const labelCard = cva({
        base: {
            width: '100%',
            height: 'fit-content',
            bg: 'blue.50',
            padding: '12px 15px',
            borderRadius: '5px',
            '& .box_labelCard_info_plan': {
                display: 'flex',
                width: '100%'
            },
            "& div[id^='box_labelCard_price']": {
                display: 'flex',
                fontFamily: 'ubuntu_bold', 
                fontWeight: '800', 
                fontSize: '14px',
                color: 'blue.900',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }
    });

    const getTotal = (): number => {
        let total = planPriceByBilling;

        if(addOns.get().online.isActive){
            total += planBilling.get() === 'monthly' ? addOns.get().online.priceMonthly : addOns.get().online.priceYearly;
        }
        if(addOns.get().largerStorage.isActive){
            total += planBilling.get() === 'monthly' ? addOns.get().largerStorage.priceMonthly : addOns.get().largerStorage.priceYearly;
        }
        if(addOns.get().customProfile.isActive){
            total += planBilling.get() === 'monthly' ? addOns.get().customProfile.priceMonthly : addOns.get().customProfile.priceYearly;
        }

        return total;
    }

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
            Finishing up
        </div>
    </Card_Header>
    <Card_Description>
        <div id="description_pickAddOns"
            class={
                css({
                    fontFamily: 'ubuntu_regular',
                    fontWeight: '600', 
                    fontSize: '16px',
                    color: 'gray.400',
                })
            }
        >
            Double-check everything looks OK before confirming.
        </div>
    </Card_Description>
    <Card_Body>

        <form id="form_payment" 
            class={
                css({ 
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%', 
                    height: 'fit-content'
                })
            }
            on:submit={ (e) => e.preventDefault() }
        >

            <!-- Tiene que ser obligatorio elegir el plan, el billing si es default monthly -->
            <div id="box_labelCard_plan" class={ cx(grid({ columns: 12 }), labelCard({}) )}>

                <div id="box_labelCard_info_plan" class={ cx( grid({}), gridItem({ colSpan: 9 }) )}>
                    <span class={ css({ fontFamily: 'ubuntu_bold', fontWeight: '600', color: 'blue.800', }) }>{planTypeData} ({$planBilling.charAt(0).toUpperCase()+$planBilling.slice(1)})</span>
                    <a href="./" class={css({ width: 'fit-content', textDecoration:'underline', fontWeight: '500', color: 'gray.400', marginTop: '-15px' })}>Change</a>
                </div>
                <div id="box_labelCard_price_plan" class={ cx( gridItem({ colSpan: 3 }) )}>
                    ${ planPriceByBilling }/{ planBillingCase }
                </div>

            </div>
            
            <hr class={css({ border: 'none', height: '1px', width: '80%', bg: 'gray.300', alignSelf: 'center' })}>

            {#each addOnsProperties as addOn, index}
                {#if addOn.isActive}
                    <div id="box_labelCard_service_Arcade" class={ cx(grid({ columns: 12 }), labelCard({}) )}>

                        <div id="box_labelCard_info_Arcade" class={ cx( grid({}), gridItem({ colSpan: 9 }), css({ display: 'flex', alignItems: 'center', marginTop: '15px' }) )}>
                            <span class={css({ fontWeight: '500', color: 'gray.400', marginTop: '-15px' })}>
                                {addOn.title}
                            </span>
                        </div>
                        <div id="box_labelCard_price_Arcade" class={ cx( gridItem({ colSpan: 3 }) )}>
                            ${ $planBilling === 'monthly' ? $addOns[addOn.id].priceMonthly : $addOns[addOn.id].priceYearly  }/{ planBillingCase }
                        </div>

                    </div>
                {/if}
            {/each}
            <!-- Esto se debe de generar de forma dinamica para cada estado donde este un servicio -->

            <hr class={css({ border: 'none', height: '20px' })}>

            <div id="box_labelCard_service_total" class={ cx(grid({ columns: 12 }), labelCard({}) )}>

                <div id="box_labelCard_info_total" class={ cx( grid({}), gridItem({ colSpan: 9 }), css({ display: 'flex', alignItems: 'center', marginTop: '15px' }) )}>
                    <span class={css({ fontWeight: '500', color: 'gray.400', marginTop: '-15px' })}>
                        Total (per {$planBilling==='monthly' ? 'month' : 'year'})
                    </span>
                </div>
                <div id="box_labelCard_price_total" class={ cx( gridItem({ colSpan: 3 }) )}>
                    +${getTotal()}/{ planBillingCase }
                </div>

            </div>

            <!--
                TODO: agregar la validacion de campos del formulario de la primera card al opimir NextStep
                TODO: Arreglar el bug del switch que cuando uno pasa de una card a otra se pierde el estado
                TODO: Hacer que cuando se oprima el boton en la segunda card esta permanezca en el mismo estado
                TODO: Hacer que los datos de la segunda card permanezca de acuerdo al estado del store
                //: Hacer que la 4ta card se muestre de acuerdo a los datos del store
                TODO: Hacer la version desktop de la aplicacion completa
                TODO: Las validaciones de cada carta deben ocurrir cada que se de en Next
                TODO: Al oprimir el boton de confirmar de la 4ta card se debe de mostrar un mensaje de confirmacion
                TODO: Simplificar la 4ta card mediante custom hooks
            -->

        </form>

    </Card_Body>

</Card>