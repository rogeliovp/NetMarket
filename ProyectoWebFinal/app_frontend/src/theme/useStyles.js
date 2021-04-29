import { createMuiTheme, makeStyles } from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles({
    containermt: {
        marginTop: 30
    },
    card: {
        padding: 30
    },
    avatar: {
        backgroundColor: '#0f80aa',
        width: 80,
        height: 80,
    },
    icon: {
        fontSize: 60 
    },
    form : {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb : {
        marginBottom: 20
    },
    link : {
        marginTop: 8,
        fontSize: "1.1rem",
        fontFamily : "Roboto",
        lineHeight: 1.5,
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    appBar : {
        paddingTop: 8,
        paddingBottom: 8
    },
    grow : {
        flexGrow : 0,
        [theme.breakpoints.up('md')] : {
            flexGrow : 1,
        }
    }, 
    linkAppBarLogo : {
        display : "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none"
    },
    mr : {
        marginRight: 3
    }, 
    buttonIcon : {
        fontSize : 14,
        padding : 0
    },
    linkAppBarDesktop : {
        display : "inline-flex",
        alignItems : "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    list : {
        width : 250
    }, 
    listItem : {
        padding: 0
    },
    linkAppBarMobile : {
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    listItemIcon : {
        minWidth : 35
    }, 
    sectionDesktop : {
        display : "none",
        [theme.breakpoints.up('md')] : {
            display: "flex"
        }
    },
    sectionMobile : {
        display: "flex",
        flexGrow : 1,
        [theme.breakpoints.up('md')] : {
            display: "none"
        }
    },
    text_title : {
        fontWeight: 600,
        color: "#494949",
        marginBottom: 10
    },
    media : {
        height: 250,
        backgroundColor: "#F2F2F2",
        margin: "15px 15px 0 15px"
    },
    price : {
        float: "right",
        padding: "0 20px 0 20px",
        backgroundColor: "#0f80aa"
    },
    text_card: {
        fontWeight: "bold",
        color: "#656565",
        marginBottom: 8
    },
    PaperImg : {
        backgroundColor: "#F2F2F2"
    },
    mediaDetalle : {
        width: 380,
        height: 380,
        margin: "auto"
    },
    text_detalle: {
        fontWeight: 500,
        color: "#494949",
        marginBottom: 5
    },
    imgProductoCC : {
        backgroundColor: "#F2F2F2",
        width: 80,
        height: 70
    },
    papperPadding : {
        padding: 20
    },
    gridPC : {
        margin: "auto",
        marginTop: 20
    },
    buttonAnterior : {
        marginRight: 8
    },
    formControl : {
        margin: 12
    },
    gridLR : {
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30
    },
    divider :{
        marginTop: 12,
        marginBottom: 12
    },
    imgProductoPC : {
        backgroundColor: "#F2F2F2",
        width: 50,
        height: 40
    },
    text_envio : {
        lineHeight: 3
    },
    alertNotDelivered : {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#ffcccc"
    },
    alertDelivered : {
        marginTop: 5,
        padding: "15px 15px 5px 15px",
        marginBottom: 20,
        backgroundColor: "#d6f5d6"
    },
    imageUploader : {
        padding: 0,
        margin: "-25px auto 15px",
        width: 0
    },
    avatarPerfil : {
        width: 130,
        height: 130,
        backgroundColor: "#0f80aa"
    },
    table : {
        border : "1px solid #e0e0e0"
    },
    iconDelivered : {
        color: "green",
        fontWeight: 900
    },
    iconNotDelivered : {
        color: "red",
        fontWeight: 900
    },
    avatarPerfilAppBar : {
        marginRight: 8,
        backgroundColor: "#F2F2F2"
    },
    listSubItem: {
        padding: "0 0 0 30px"
    },
    checkbox : {
        display: "block",
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    buttonAgregar : {
        float: "right"
    },
    avatarProducto : {
        width: 175,
        height: 175,
        backgroundColor: "#F2F2F2"
    }
})

export default useStyles;
