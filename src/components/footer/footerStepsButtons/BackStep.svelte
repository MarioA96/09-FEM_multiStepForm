<script lang="ts">
    import { formNumProcess } from "../../../stores/form.store"

    import { gridItem } from "../../../../styled-system/patterns";
    import { cva } from "../../../../styled-system/css";


    const handleBackStep = () => {
        formNumProcess.set($formNumProcess - 1);
    }


    const ButtonStyles = cva({
        base: {
            width: '100%', 
            height: 'fit-content', 
            padding: '15px 5px', 
            bg: 'gray.100', 
            color: 'hsl(231, 11%, 63%)',
            fontFamily: 'ubuntu_bold', 
            fontSize: '13px',
            borderRadius: '5px', 
            cursor: 'pointer',
            '_hover': {
                border: '1px solid hsl(231, 11%, 63%)'
            }
        }
    });
</script>

{#if $formNumProcess >= 2}
    <div class={ gridItem({ colStart: 2, colEnd: 5 }) }>
        <button id="button_back" 
            on:click={handleBackStep}
            class={ButtonStyles({})} 
        >
            Go Back
        </button>
    </div>
{/if}