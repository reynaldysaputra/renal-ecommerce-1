export const styleNavigation  = {
    containerMobileDevice : {
        width : 'full',
        height : 'full',
        position : 'absolute',
        top : '0', left : '0', right : '0', bottom : '0',
        align : 'center',
        background : '#2C2E3F',
        color : 'white',
    },
    NavlinkMobile : {
        marginTop : 10,
        fontSize : 'xl',
        display : 'block',
        transition : '.2s',
        textDecoration : 'none',
    },
    containerDesktopDevice : {
        background : 'white',
        color : 'fontColorFirst',
        boxShadow : {
            base : 'md' , md : 'md', xl : 'base', lg : 'base'
        },
        position : 'fixed',
        width : '100%',
        top : '0'
    }
}