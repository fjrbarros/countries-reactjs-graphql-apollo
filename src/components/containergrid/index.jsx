import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    containerGrid: {
        padding: '10px',
        margin: '0 auto',
        display: 'grid',
        gridGap: '2rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    }
}));

export default function ContainerGrid(props) {
    const { children } = props;
    const classes = useStyles();

    return (
        <div className={classes.containerGrid}>
            {children}
        </div>
    );
}