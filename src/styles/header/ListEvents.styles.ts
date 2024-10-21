import { cva } from "../../../styled-system/css"

export const ulStyles = cva({
    base: {
        display: 'flex', 
        flexDirection: {
            xsm: 'row',
            lg: 'column'
        },
        width: {
            xsm: 'fit-content',
            lg: '100%'
        },
        '& li': {
            listStyle: 'none',
            width: {
                xsm: '30px',
                lg: '90%'
            },
            height: {
                xsm: '30px',
                lg: 'fit-content'
            },
            margin: '10px',
            textAlign: 'left',
            alignItems: 'center'
        },
        '& [id$=button_unchecked]':{
            color: 'white',
            '&:hover': {
                backgroundColor: {
                    xsm: 'hsl(229, 57%, 89%)',
                    lg: 'hsl(229, 57%, 89%)',
                }
            }
        },
        '& [id$=button_checked]': {
            backgroundColor: {
                xsm: 'hsl(229, 57%, 89%)',
                lg: 'none'
            }
        },
        '& button': {
            fontFamily: 'ubuntu_bold',
            fontSize: '14px',
            cursor: 'pointer',
            width: {
                xsm: '30px',
                lg: '30px'
            },
            height: {
                xsm: '100%',
                lg: '30px'
            },
            bg: {
                xsm: 'transparent',
                lg: 'transparent'
            },
            border: '1px solid white',
            borderRadius: '50%',
        },
        "& p[id*=description]": {
            fontSize: '14px',
            marginLeft: '10px',
            display: {
                xsm: 'none',
                lg: 'block'
            },
            "& span[id$=description_title]": {
                fontFamily: 'ubuntu_regular',
                color: 'gray.400',
            },
            "& span[id$=description_info]": {
                fontFamily: 'ubuntu_bold',
                color: 'white',
            }
        }
    }
})