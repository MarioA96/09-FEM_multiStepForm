<script lang="ts">

    import { cva } from "../../../styled-system/css";
    import { grid } from "../../../styled-system/patterns";
    
    
    const StepsFooterBoxStyles = cva({
        base: {
            display: 'flex',
            position: 'absolute',
            zIndex: 2,
            height: 'fit-content',
            width: '100%',
            marginTop: 'auto',
            marginBottom: '1rem',
            backgroundColor: 'white',
            bottom: '0px',
            '& #steps_box': {
                alignItems: 'center',
                width: '100%', 
                height: '65px'
            }
        }
    })

</script>


<div id="steps_footer_box" 
    class={ StepsFooterBoxStyles({}) }
>
    <div id="steps_box" class={ grid({ columns: 12 }) }>
        
        <slot name="button_back"/>
        <slot name="button_next"/>

    </div>
</div>