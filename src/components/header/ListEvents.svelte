<script lang="ts">

    import { formNumProcess } from '../../stores/form.store';

    import { css } from '../../../styled-system/css';
    import { grid, gridItem } from '../../../styled-system/patterns';
    import { ulStyles } from '../../styles/header/ListEvents.styles';

    type Step = {
        id: number;
        info: string;
    }

    const arrayOfSteps: Step[]  = [
        { id: 1, info: 'YOUR INFO' },
        { id: 2, info: 'SELECT PLAN' },
        { id: 3, info: 'ADD-ONS' },
        { id: 4, info: 'SUMMARY' }
    ];


</script>

<ul class={ulStyles({})}>

    {#each arrayOfSteps as step, index}
        {#if $formNumProcess === index + 1}
            <li id="list_{step.id}_checked" class={grid({columns: 12})}>
                <button id="{step.id}_button_checked" class={gridItem({colSpan: 2})} disabled={($formNumProcess === 5 || $formNumProcess === 1) ? true : false}>
                    {index + 1}
                </button>
                <p id="{step.id}_description_checked" class={ gridItem({colSpan: 10}) }>
                    <span id="{step.id}_description_title" class={css({ display: 'flex' })}>
                        STEP {step.id}
                    </span>
                    <span id="{step.id}_description_info" class={css({ display: 'flex' })}>
                        {step.info}
                    </span>
                </p>
            </li>
        {:else}
            <li id="list_{step.id}_unchecked" class={grid({columns: 12})}>
                <button id="{step.id}_button_unchecked" on:click={ () => formNumProcess.set(index + 1) } class={gridItem({colSpan: 2})} disabled={ ($formNumProcess === 5 || $formNumProcess === 1) ? true : false}>
                    {index + 1}
                </button>
                <p id="{step.id}_description_unchecked" class={ gridItem({colSpan: 10}) }>
                    <span id="{step.id}_description_title" class={css({ display: 'flex' })}>
                        STEP {step.id}
                    </span>
                    <span id="{step.id}_description_info" class={css({ display: 'flex' })}>
                        {step.info}
                    </span>
                </p>
            </li>
        {/if}
    {/each}

</ul>