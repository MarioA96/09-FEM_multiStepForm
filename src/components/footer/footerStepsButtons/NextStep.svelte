<script lang="ts">
    import { gridItem } from "../../../../styled-system/patterns";
    import { css } from "../../../../styled-system/css";
</script>



<div class={ gridItem({ colStart: 9, colEnd: 12 }) }>
    <button 
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
    >
        Next Step
    </button>
</div>