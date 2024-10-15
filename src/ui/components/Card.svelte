<script lang="ts">
    import { cx, css } from "../../../styled-system/css"; 
  import BackStep from "../../components/footer/footerStepsButtons/BackStep.svelte";
  import ConfirmStep from "../../components/footer/footerStepsButtons/ConfirmStep.svelte";
  import NextStep from "../../components/footer/footerStepsButtons/NextStep.svelte";
  import FooterStepsLayout from "../../components/footer/FooterStepsLayout.svelte";
</script>


<div id="main_box" 
    class={ 
        cx( 
            css({
                display: 'flex',
                position: {
                    xsm: 'absolute',
                    lg: 'relative'
                }, 
                zIndex: {
                    xsm: 2, 
                    lg: 0
                },
                width: { 
                    xsm: '95%', 
                    lg: '100%' 
                }, 
                height: { 
                    xsm: 'fit-content', 
                    lg: '100%' 
                },
                marginTop: { 
                    xsm: '-50px', 
                    lg: '0px' 
                },
                justifyItems: 'center',
                justifyContent: 'center',
            })
        )
    }
>

    <div id="card_box" 
        class={
            css({
                display: 'flex',
                flexDirection: 'column',
                width: { 
                    xsm: '90%', 
                    lg: '100%' 
                },
                height: 'fit-content',
                bg: 'white',
                borderRadius: '10px',
            })
        }	
    >
        
        <slot />

        <FooterStepsLayout>
            <BackStep slot="button_back"/>
            <NextStep slot="button_next"/>
            <ConfirmStep slot="button_confirm"/>
        </FooterStepsLayout>

    </div>

</div>