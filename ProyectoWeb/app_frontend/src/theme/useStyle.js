import { createMuiTheme, makeStyles } from '@material-ui/core'

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
        height: 80
    },
    icon: {
        fontSize: 60
    },
    form: {
        marginTop: 40,
        marginBottom: 10
    },
    gridmb: {
        marginBottom: 20
    },
    link: {
        marginTop: 8,
        fontSize: "1.1rem",
        fontFamily: "Roboto",
        lineHeight: 1.5,
        color: theme.palette.primary.main,
        textDecoration: "none"
    },
    appBar: {
        paddingTop: 8,
        paddingBottom: 8
    },
    grow: {
        flexGrow: 0,
        [theme.breakpoints.up('md')] : {
            flexGrow: 1
        }
    },
    linkAppBarLogo: {
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        textDecoration: "none"
    },
    mr: {
        marginRight: 3
    },
    buttonIcon: {
        fontSize: 14,
        padding: 0
    },
    linkAppBarDesktop: {
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    list: {
        width: 250
    },
    listItem: {
        padding: 0
    },
    linkAppBarMobile: {
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
        padding: "8px 16px",
        color: "inherit",
        textDecoration: "none"
    },
    listItemIcon: {
        minWidth: 35
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up('md')] : {
            display: "flex"
        }

    },
    sectionMovil: {
        display: "flex",
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display: "none"
        }
    }
})

export default useStyles;