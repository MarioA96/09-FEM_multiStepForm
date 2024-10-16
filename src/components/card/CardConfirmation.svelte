<script lang="ts">

import { formNumProcess } from "../../stores/form.store";

import { cva, css } from "../../../styled-system/css";

import Card from "../../ui/components/Card.svelte"; 

import Card_Header from "../../ui/components/Card_Header.svelte";
import Card_Body from "../../ui/components/Card_Body.svelte";


$: formNumProcess.set(5);

</script>

<Card>
    <Card_Header>
        <div 
            id="header-confirmation"
            class={
                css({ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '100%', 
                    height: {
                        xsm: '120px',
                        lg: '240px'
                    }, 
                    justifyContent: 'end', 
                    alignItems: 'center' 
                })
            }
        >
            <img src="/assets/images/icon-thank-you.svg" alt="icon-confirmation" 
                class={
                    css({
                        width: {
                            xsm: '50px',
                            lg: '70px'
                        },
                        height: {
                            xsm: '50px',
                            lg: '70px'
                        },
                    })
                }
            >
            <span 
                id="title-confirmation"
                class={
                    css({ 
                        marginTop: '8px', 
                        fontFamily: 'ubuntu_bold', 
                        fontSize: {
                            xsm: '22px',
                            lg: '30px'
                        }, 
                        color: 'hsl(213, 96%, 18%)' 
                    })
                }
            >
                Thank you!
            </span>
        </div>
    </Card_Header>
    <Card_Body>
        <div
            id="body-confirmation"
            class={
                css({ 
                    display: 'flex', 
                    width: '100%', 
                    height: 'fit-content',
                    fontFamily: 'ubuntu_regular',
                    fontWeight: '500',
                    fontSize: '16px',
                    color: 'hsl(231, 11%, 63%)',
                    textAlign: 'center',
                })
            }
        >
            Thanks for confirming your subscription!
            We hope you have fun using our
            platform. If you ever need support,
            please feel free to email us at
            support@loremgaming.com
        </div>
    </Card_Body>
</Card>