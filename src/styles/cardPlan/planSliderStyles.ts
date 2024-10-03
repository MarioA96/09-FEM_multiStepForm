import { cva } from "../../../styled-system/css";

export const planSliderStyles = cva({
    base: {
        display: 'flex', 
        width: '100%', 
        height: '40px', 
        alignItems: 'center', 
        justifyContent: 'center',
        bg: 'gray.100',
        borderRadius: '8px',
        marginTop: '20px',
        '& .switch': {
            position: 'relative',
            display: 'inline-block',
            width: '30px',
            height: '15px',
            '& input': {
                opacity: '0',
                width: '0',
                height: '0',
            },
            '& .slider': {
                position: 'absolute',
                cursor: 'pointer',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'hsl(229, 24%, 87%)',
                transition: '.4s',
                borderRadius: '8px',
                '&:before': {
                    position: 'absolute',
                    content: '""',
                    height: '13px',
                    width: '13px',
                    left: '2px',
                    bottom: '1px',
                    backgroundColor: 'white',
                    transition: '.4s',
                    borderRadius: '50%'
                }
            },
            '& input:checked + .slider': {
                backgroundColor: 'hsl(213, 96%, 18%)',
            },
            '& input:checked + .slider:before': {
                transform: 'translateX(13px)',
            }
        },
        '& span[id^=switch_plan]': {
            fontSize: '12px', 
            fontWeight: '700', 
            color: 'hsl(213, 96%, 18%)',
            marginRight: '15px',
            marginLeft: '15px'
        }
    }
});