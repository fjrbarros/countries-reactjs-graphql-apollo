import { makeStyles } from '@material-ui/core/styles';
import { PageWrapper } from '../index';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& p': {
            fontSize: '25px',
            color: '#414141'
        }
    }
}));

export default function Error({ textError }) {
    const classes = useStyles();

    return (
        <PageWrapper>
            <Box className={classes.root}>
                <Typography>{textError}</Typography>
            </Box>
        </PageWrapper>
    );
}