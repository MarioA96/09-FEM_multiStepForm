import { cva } from "../../../styled-system/css";


export const FormStyles = cva({
    base: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'fit-content',
        '& div[id^=box_personalInfo]':{
            display: 'flex', 
            flexDirection: 'column',
            '& label': {
                fontFamily: 'ubuntu_regular',
                fontSize: '14px',
                fontWeight: '600',
                color: 'blue.950',
                marginBottom: '2px'
            },
            '& input': {
                fontFamily: 'ubuntu_regular',
                height: '40px',
                border: '0.5px solid gray',
                borderRadius: '5px',
                padding: '0px 15px',
                marginBottom: '1rem'
            }
        }
    }
});