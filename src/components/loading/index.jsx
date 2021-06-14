import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& p': {
            marginTop: '10px'
        }
    }
}));

export default function Loading({ textLoading }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <CircularProgress />
                <Typography>{textLoading || 'Carregando...'}</Typography>
            </Box>
        </Box>
    );
}