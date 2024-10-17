<script lang="ts">

    import { formNumProcess } from "../../stores/form.store";

    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";

    import AddOnButton from "./sections/cardPickAddOns/AddOnButton.svelte";

    import { css } from "../../../styled-system/css";

    import FooterStepsLayout from '../footer/FooterStepsLayout.svelte';
    import BackStep from '../footer/footerStepsButtons/BackStep.svelte';
    import NextStep from '../footer/footerStepsButtons/NextStep.svelte';
    import ConfirmStep from '../footer/footerStepsButtons/ConfirmStep.svelte';


    $: formNumProcess.set(3);

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        formNumProcess.set(4);
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
            Pick add-ons
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
            on:submit={ (e) => handleSubmit(e) }
        >
            <div id="box_pickAddOn">
                <AddOnButton />
            </div>
        </form>

    </Card_Body>

    <FooterStepsLayout>
        <BackStep slot="button_back"/>
        <NextStep slot="button_next" idForm="form_pickAddOns"/>
        <ConfirmStep slot="button_confirm"/>
    </FooterStepsLayout>
</Card>