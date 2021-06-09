import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#110c1d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& p': {
            fontSize: '25px',
            color: '#ff0000'
        }
    }
}));

export default function Error(props) {
    const classes = useStyles();
    const { textError } = props;

    return (
        <Box className={classes.root}>
            <Typography>{textError || 'Erro ao recuperar dados.'}</Typography>
        </Box>
    );
}