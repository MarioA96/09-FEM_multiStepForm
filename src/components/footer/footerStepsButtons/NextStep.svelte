<script lang="ts">
    import { formNumProcess } from "../../../stores/form.store"

    import { gridItem } from "../../../../styled-system/patterns";
    import { css } from "../../../../styled-system/css";

    //const handleNextStep = () => {
    //    formNumProcess.set($formNumProcess + 1);
    //}

    export let idForm: string;
</script>


{#if $formNumProcess <= 3}
<div class={ gridItem({ colStart: 9, colEnd: 12 }) }>
    <input 
        type="submit"
        form={idForm}
        
        class={ 
            css({ 
                width: '100%', 
                height: 'fit-content', 
                padding: '15px 5px', 
                bg: 'hsl(213, 96%, 18%)', 
                color: 'white', 
                fontFamily: 'ubuntu_bold',
                fontSize: '13px', 
                borderRadius: '5px', 
                cursor: 'pointer',
                '_hover': {
                    backgroundColor: 'gray.500'
                }
            }) 
        }
        value="Next Step"
    />
</div>
{/if}