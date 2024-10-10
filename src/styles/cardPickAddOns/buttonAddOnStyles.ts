import { cva } from "../../../styled-system/css";


export const buttonAddOnStyles = cva({
    base: {
        width: '100%', 
        borderRadius: '8px', 
        padding: '10px 0px 10px 5px', 
        alignItems: 'center', 
        marginBottom: '10px',
        cursor: 'pointer',
        "& input[id^='checkBox_']":{
            width: '18px', 
            height: '18px',
            accentColor: 'blue.900'
        },
        "& div[id^='info_title_']": {
            fontFamily: 'ubuntu_bold', 
            fontSize: '15px', 
            color: 'blue.900', 
            textAlign: 'left'
        },
        "& div[id^='info_desc_']": {
            fontFamily: 'ubuntu_bold', 
            fontSize: '12px', 
            color: 'gray.400', 
            textAlign: 'left'
        },
        "& div[id^='box_price_addOn_']": {
            fontFamily: 'ubuntu_regular', 
            fontWeight: '600', 
            fontSize: '12px', 
            color: 'hsl(243, 100%, 62%)', 
            marginLeft: '-25px'
        }
    }
});