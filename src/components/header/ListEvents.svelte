<script lang="ts">

    import { formNumProcess } from '../../stores/form.store';

    import { cva } from '../../../styled-system/css';

    const ulStyles = cva({
        base: {
            display: 'flex', 
            flexDirection: 'row',
            '& li': {
                listStyle: 'none',
                width: '30px',
                height: '30px',
                margin: '10px',
                borderRadius: '50%',
                border: '1px solid white',
                textAlign: 'center',
                alignContent: 'center',
                fontFamily: 'ubuntu_bold',
                fontSize: '14px'
            },
            '& [id$=_unchecked]':{
                color: 'white',
                '&:hover': {
                    backgroundColor: 'hsla(229, 57%, 89%, 0.5)',
                    color: 'hsl(213, 96%, 18%)',
                }
            },
            '& [id$=_checked]': {
                backgroundColor: 'hsl(229, 57%, 89%)',
                color: 'hsl(213, 96%, 18%)'
            },
            '& button': {
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            }
        }
    })

</script>

<ul class={ulStyles({})}>

    {#if $formNumProcess === 1}
        <li id="list_1_checked">1</li>
    {:else}
        <li id="list_1_unchecked" >
            <button on:click={ () => formNumProcess.set(1) }>
                1
            </button>
        </li>
    {/if}

    {#if $formNumProcess === 2}
        <li id="list_2_checked">2</li>
    {:else}
        <li id="list_2_unchecked">
            <button on:click={ () => formNumProcess.set(2) }>
                2
            </button>
        </li>
    {/if}

    {#if $formNumProcess === 3}
        <li id="list_3_checked">3</li>
    {:else}
        <li id="list_3_unchecked">
            <button on:click={ () => formNumProcess.set(3) }>
                3
            </button>
        </li>
    {/if}

    {#if $formNumProcess === 4}
        <li id="list_4_checked">4</li>
    {:else}
        <li id="list_4_unchecked">
            <button on:click={ () => formNumProcess.set(4) }>
                4
            </button>
        </li>
    {/if}

</ul>