import { TopBar } from '../index';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#f5f0f0',
        width: '100vw',
        height: '100vh'
    },

    teste: {
        height: 'calc(100vh - 64px)',
        overflowY: 'auto'
    }
}));

export default function DefaultPage(props) {
    const classes = useStyles();
    const { textSearch, valueSearch, onChangeSearch, children } = props;

    return (
        <Box className={classes.root}>
            <TopBar
                textSearch={textSearch}
                valueSearch={valueSearch}
                onChangeSearch={onChangeSearch}
            />
            <Box className={classes.teste}>
                {children}
            </Box>
        </Box>
    )
}