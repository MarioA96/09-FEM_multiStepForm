
import { cva } from "../../../styled-system/css";

export const boxSelectPlanStyles = cva({
    base: {
        '& button[id^=box_selectPlan_type]':{
            width: '100%',
            height: '70px',
            border: '1px solid hsl(229, 24%, 87%)',
            borderRadius: '8px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px 5px 0px 15px',
            marginBottom: '10px',
            '_focus': {
                bg: 'blue.50',
                cursor: 'pointer',
                border: '1px solid hsl(213, 96%, 18%)',
            },
            '& div[id^=box_icon_plan]':{
                display: 'flex', 
                height: '60%', 
                alignContent: 'center', 
                justifyContent: 'center'
            },
            '& div[id^=box_info_plan]':{
                height: '70%',
                textAlign: 'start',
                '& div[id^=info_title]': {
                    fontWeight: '700', 
                    fontSize: '14px', 
                    color: 'hsl(213, 96%, 18%)'
                },
                '& div[id^=info_price]': {
                    fontWeight: '600', 
                    fontSize: '14px', 
                    color: 'gray.500'
                }
            }
        }
    }
})