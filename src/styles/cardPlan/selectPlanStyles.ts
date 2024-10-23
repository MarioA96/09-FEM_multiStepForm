
import { cva } from "../../../styled-system/css";

export const boxSelectPlanStyles = cva({
    base: {
        display: 'flex',
        flexDirection: {
            xsm: 'column',
            lg: 'row',
        },
        '& button[id^=box_selectPlan_type]':{
            display: 'flex',
            flexDirection: {
                xsm: 'row',
                lg: 'column',
            },
            width: {
                xsm: '100%',
                lg: '90%',
            },
            height: {
                xsm: '70px',
                lg: '180px',
            },
            border: '1px solid hsl(229, 24%, 87%)',
            borderRadius: '8px',
            alignItems: {
                xsm: 'center',
                lg: 'start',
            },
            justifyContent: {
                xsm: 'left',
                lg: 'left',
            },
            padding: '0px 5px 0px 15px',
            margin: {
                xsm: '0px 0px 10px 0px',
                lg: '0px 15px 0px 0px',
            },
            '_hover': {
                cursor: 'pointer',
            },
            '& div[id^=box_icon_plan]':{
                display: 'flex', 
                height: '60%', 
                alignContent: 'center', 
                justifyContent: 'center',
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