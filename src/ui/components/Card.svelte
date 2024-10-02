<script lang="ts">
    import { cx, css } from "../../../styled-system/css"; 
</script>


<div id="main_box" 
    class={ 
        cx( 
            css({
                display: 'flex',
                position: 'absolute', 
                zIndex: 2,
                width: { 
                    xsm: '100%', 
                    lg: '20%' 
                }, 
                height: { 
                    xsm: 'fit-content', 
                    lg: '100%' 
                },
                marginTop: { 
                    xsm: '100px', 
                    lg: '400px' 
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
                width: '90%',
                height: 'fit-content',
                bg: 'white',
                borderRadius: '10px',
            })
        }	
    >
        
        <slot />

    </div>

</div>