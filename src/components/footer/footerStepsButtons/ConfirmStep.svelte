<script lang="ts">
    import { formNumProcess } from "../../../stores/form.store"

    import { gridItem } from "../../../../styled-system/patterns";
    import { css } from "../../../../styled-system/css";
</script>


{#if $formNumProcess == 4}
<div class={ gridItem({ colStart: 9, colEnd: 12 }) }>
    <button 
        class={ 
            css({ 
                width: '100%', 
                height: 'fit-content', 
                padding: '15px 5px', 
                bg: 'blue.500', 
                color: 'white', 
                fontFamily: 'ubuntu_bold',
                fontSize: '13px', 
                borderRadius: '5px', 
                cursor: 'pointer',
                '_hover': {
                    backgroundColor: 'blue.800'
                }
            }) 
        }
    >
        Confirm
    </button>
</div>
{/if}