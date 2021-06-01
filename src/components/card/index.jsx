import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#f5f5f5',
        padding: '1rem',
        border: '1px solid black',
        position: 'relative'
    }
}));

export default function Card(props) {
    const { country, img } = props
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <img src={img} alt='Flag' style={{ width: '100%' }} />
            <div>
                <h4>
                    <b>{country.name}</b>
                </h4>
            </div>
        </div>
    );
}