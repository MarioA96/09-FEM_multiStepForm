<script lang="ts">
    import { cx, css } from "../../../styled-system/css"; 
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

    </div>

</div>