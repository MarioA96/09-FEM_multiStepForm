<script lang="ts">
    import { formNumProcess, formPersonalInfo, formPersonalInfoIsValid } from '../../stores/form.store';

    import { z } from 'astro/zod';
    

    import { css } from "../../../styled-system/css";
    
    import Card from "../../ui/components/Card.svelte"; 
    import Card_Header from "../../ui/components/Card_Header.svelte";
    import Card_Description from "../../ui/components/Card_Description.svelte";
    import Card_Body from "../../ui/components/Card_Body.svelte";

    import FooterStepsLayout from '../footer/FooterStepsLayout.svelte';
    import BackStep from '../footer/footerStepsButtons/BackStep.svelte';
    import NextStep from '../footer/footerStepsButtons/NextStep.svelte';
    import ConfirmStep from '../footer/footerStepsButtons/ConfirmStep.svelte';

    import { FormStyles } from '../../styles/cardPersonalInfo/formStyles';
    import { grid, gridItem } from '../../../styled-system/patterns';
   
    $: formNumProcess.set(1);


    let inputNameValue = $formPersonalInfo.username;
    $: setInputNameValue = (e: Event) => {
        const input = e.target as HTMLInputElement;
        inputNameValue = input.value;
    }
    let inputEmailValue = $formPersonalInfo.email;
    $: setInputEmailValue = (e: Event) => {
        const input = e.target as HTMLInputElement;
        inputEmailValue = input.value;
    }
    let inputPhoneNumberValue = $formPersonalInfo.phoneNumber;
    $: setInputPhoneNumberValue = (e: Event) => {
        const input = e.target as HTMLInputElement;
        inputPhoneNumberValue = input.value;
    }

    let errorMessages = {
        name: {
            required: 'Name is required',
            invalid: {
                isInvalid: false,
                message: '',
            },
        },
        email: {
            required: 'Email is required',
            invalid: {
                isInvalid: false,
                message: '',
            }
        },
        phoneNumber: {
            required: 'Phone number is required',
            invalid: {
                isInvalid: false,
                message: '',
            }
        },
    }

    const formSchema = z.object({
        username: z.string().regex(/^[\p{L} \.'\-]+$/u).min(2).max(50),
        email: z.string().email(),
        phoneNumber: z.string().regex(/^\+?[0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{3}$/),
    });

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // const numOfInputs = Object.keys(data).length;

        try {
            formSchema.parse({
                username: data.fpersonalInfo_name,
                email: data.fpersonalInfo_email,
                phoneNumber: data.fpersonalInfo_phoneNumber,
            });
            formPersonalInfo.set({
                username: data.fpersonalInfo_name.toString(),
                email: data.fpersonalInfo_email.toString(),
                phoneNumber: data.fpersonalInfo_phoneNumber.toString(),
            });
            
            formPersonalInfoIsValid.set(true);
            formNumProcess.set(2);
            
        } catch (error) {
            //Checks if the input is valid after another input is typed
            if ( formSchema.shape.username.safeParse(data.fpersonalInfo_name).success ) {
                errorMessages.name.invalid.isInvalid = false;
            }
            if ( formSchema.shape.email.safeParse(data.fpersonalInfo_email).success ) {
                errorMessages.email.invalid.isInvalid = false;
            }
            if ( formSchema.shape.phoneNumber.safeParse(data.fpersonalInfo_phoneNumber).success ) {
                errorMessages.phoneNumber.invalid.isInvalid = false;
            }

            if (error instanceof z.ZodError) {
                error.errors.map((err) => {
                    if(err.path[0] === 'username'){
                        errorMessages.name.invalid.isInvalid = true;
                        if (err.code === 'too_small') {
                            errorMessages.name.invalid.message = 'Name' + ' ' + 'must be at least 2 characters long';
                        } else if (err.code === 'too_big') {
                            errorMessages.name.invalid.message = 'Name' + ' ' + 'must be at most 50 characters long';
                        } else if (err.code === 'invalid_string') {
                            errorMessages.name.invalid.message = 'Name' + ' ' + 'must contain only letters';
                        }
                    }
                    else if(err.path[0] === 'email'){
                        errorMessages.email.invalid.isInvalid = true;
                        if (err.code === 'invalid_string') {
                            errorMessages.email.invalid.message = 'Email' + ' ' + 'must be valid';
                        }
                    }
                    else if(err.path[0] === 'phoneNumber'){
                        errorMessages.phoneNumber.invalid.isInvalid = true;
                        if (err.code === 'invalid_string') {
                            errorMessages.phoneNumber.invalid.message = 'Phone number' + ' ' + 'must be in a valid format';
                        }
                    }
                });
            } else {
                console.log('Error: ', error);
            }
        }
    }

</script>

<Card>
    <Card_Header>
        <div id="title_personalInfo"
            class={
                css({
                    fontFamily: 'ubuntu_bold',
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
                    fontFamily: 'ubuntu_regular',
                    fontWeight: '600', 
                    fontSize: '16px',
                    color: 'gray.400',
                })
            }
        >
            Please provide your name, email, address, and phone number.
        </div>
    </Card_Description>
    <Card_Body>
        
        <form id="form_personalInfo" class={FormStyles({})} on:submit={handleSubmit}>

            <div id="box_personalInfo_name">
                <label for="fpersonalInfo_name" class={grid({columns: 12})}>
                    <span class={gridItem({colStart: 1, colEnd: 5})}>
                        Name
                    </span>
                    {#if inputNameValue.length === 0}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.name.required}
                        </span>
                    {/if}
                    {#if errorMessages.name.invalid.isInvalid}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.name.invalid.message}
                        </span>
                    {/if}
                </label>
                <input type="text" name="fpersonalInfo_name" id="fpersonalInfo_name" placeholder="e.g. Stephen King" required
                    on:input={ (e) => setInputNameValue(e) }
                    value={$formPersonalInfo.username}
                />
            </div>
            <div id="box_personalInfo_email">
                <label for="fpersonalInfo_email" class={grid({columns: 12})}>
                    <span class={gridItem({colStart: 1, colEnd: 5})}>
                        Email Adress
                    </span>
                    {#if inputEmailValue.length === 0}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.email.required}
                        </span>
                    {/if}
                    {#if errorMessages.email.invalid.isInvalid}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.email.invalid.message}
                        </span>
                    {/if}
                </label>
                <input type="email" name="fpersonalInfo_email" id="fpersonalInfo_email" placeholder="e.g. stephenking@lorem.com" required
                    value={$formPersonalInfo.email}
                    on:input={ (e) => setInputEmailValue(e) }
                />
            </div>
            <div id="box_personalInfo_phoneNumber">
                <label for="fpersonalInfo_phoneNumber" class={grid({columns: 12})}>
                    <span class={gridItem({colStart: 1, colEnd: 6})}>
                        Phone Number
                    </span>
                    {#if inputPhoneNumberValue.length === 0}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.phoneNumber.required}
                        </span>
                    {/if}
                    {#if errorMessages.phoneNumber.invalid.isInvalid}
                        <span class={gridItem({colStart: 6, colEnd: 12})} style="color: red;">
                            {errorMessages.phoneNumber.invalid.message}
                        </span>
                    {/if}
                </label>
                <input type="text" name="fpersonalInfo_phoneNumber" id="fpersonalInfo_phoneNumber" placeholder="e.g. +1 234 567 890" required
                    value={$formPersonalInfo.phoneNumber}
                    on:input={ (e) => setInputPhoneNumberValue(e) }
                />
            </div>

        </form>

    </Card_Body>

    <FooterStepsLayout>
        <BackStep slot="button_back"/>
        <NextStep slot="button_next" idForm="form_personalInfo"/>
    </FooterStepsLayout>
</Card>
