<script lang="ts">
    import { cva, css } from "../../../styled-system/css";
    
    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";
    
    const FormStyles = cva({
        base: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: 'fit-content',
            '& div[id^=box_personalInfo]':{
                display: 'flex', 
                flexDirection: 'column',
                '& label': {
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'blue.950',
                    marginBottom: '2px'
                },
                '& input': {
                    height: '40px',
                    border: '0.5px solid gray',
                    borderRadius: '5px',
                    padding: '0px 15px',
                    marginBottom: '1rem'
                }
            }
        }
    });
</script>

<Card>
    <Card_Header>
        <div id="title_personalInfo"
            class={
                css({
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'hsl(213, 96%, 18%)',
                })
            }	
        >
            Personal Info
        </div>
    </Card_Header>
    <Card_Description>
        <div id="description_personalInfo"
            class={
                css({
                    fontSize: '16px',
                    color: 'gray.500',
                })
            }
        >
            Please provide your name, email, address, and phone number.
        </div>
    </Card_Description>
    <Card_Body>
        
        <form id="form_personalInfo" class={FormStyles({})}>

            <div id="box_personalInfo_name">
                <label for="fpersonalInfo_name">Name</label>
                <input type="text" name="fpersonalInfo_name" placeholder="e.g. Stephen King" required/>
            </div>
            <div id="box_personalInfo_email">
                <label for="fpersonalInfo_email">Email Address</label>
                <input type="email" name="fpersonalInfo_email" placeholder="e.g. stephenking@lorem.com" required/>
            </div>
            <div id="box_personalInfo_phoneNumber">
                <label for="fpersonalInfo_phoneNumber">Phone Number</label>
                <input type="text" name="fpersonalInfo_phoneNumber" placeholder="e.g. +1 234 567 890" required/>
            </div>

        </form>

    </Card_Body>
</Card>