import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputRoot: {
        color: 'inherit',
        width: '100%'
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch'
            }
        }
    }
}));

export default function TopAppBar({ textSearch, valueSearch, onChangeSearch }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Box flex={1} />
                    {
                        onChangeSearch &&
                        <Box className={classes.search}>
                            <Box className={classes.searchIcon}>
                                <SearchIcon />
                            </Box>
                            <InputBase
                                placeholder={textSearch}
                                value={valueSearch}
                                onChange={onChangeSearch}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}