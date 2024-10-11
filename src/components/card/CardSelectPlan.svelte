<script lang="ts">
    import { formNumProcess } from '../../stores/form.store';

    import { cx, cva, css } from "../../../styled-system/css";
    import { grid, gridItem } from "../../../styled-system/patterns";
    
    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";

    import PlanTypesSection from "./sections/cardPlan/PlanTypesSection.svelte";
    import PlanTypeSlider from "./sections/cardPlan/PlanTypeSlider.svelte";

    $: formNumProcess.set(2);
    
    const FormStyles = cva({
        base: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'fit-content',
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
                    fontFamily: 'ubuntu_regular',
                    fontWeight: '600', 
                    fontSize: '16px',
                    color: 'gray.400',
                })
            }
        >
            You have the option of monthly or yearly billing.
        </div>
    </Card_Description>
    <Card_Body>
        
        <form id="form_selectPlan" class={FormStyles({})} on:submit={ (e) => e.preventDefault() }>

            <PlanTypesSection />

            <PlanTypeSlider />
            
        </form>

    </Card_Body>
</Card>