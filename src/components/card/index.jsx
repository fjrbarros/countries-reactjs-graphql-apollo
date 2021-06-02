import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import { Card as CardMu } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles(() => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardContent: {
        flex: 1
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

export default function Card(props) {
    const { country, imgPath } = props
    const classes = useStyles();

    return (
        <Paper elevation={3}>
            <CardMu className={classes.card}>
                <Image
                    aspectRatio={(16 / 10)}
                    src={imgPath}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>
                        <strong>Country:</strong> {country.name}
                    </Typography>
                    <Typography variant='h6'>
                        <strong>Capital:</strong> {country.capital}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        size='small'
                        variant='outlined'
                        color='primary'
                        startIcon={<DetailsIcon />}
                    >
                        details
                    </Button>
                </CardActions>
            </CardMu>
        </Paper>
    );
}