import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { DefaultPage, Loading, Error } from '../components/index';
import { COUNTRY_ID } from '../graphql/queries/countries';
import { makeStyles } from '@material-ui/core/styles';
import { validateForm } from '../util/index';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    root: {
        width: '40%',
        padding: '20px',
        '@media(max-width:1280px)': {
            width: '50%'
        },
        '@media(max-width:768px)': {
            width: '100%'
        }
    },

    containerImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& div': {
            paddingTop: '0!important',
            backgroundColor: 'transparent!important'
        }
    },

    form: {
        display: 'flex',
        flexDirection: 'column'
    },

    input: {
        marginTop: '15px'
    },

    saveButton: {
        width: '50%',
        marginTop: '15px',
        marginLeft: '50%',
        transform: 'translate(-50%)'
    }
}));

function getDefaultValues() {
    return {
        name: '',
        capital: '',
        area: '',
        population: '',
        topLevelDomain: ''
    }
}

export default function Detail(props) {
    const { id } = useParams();
    const classes = useStyles();
    const [values, setValues] = useState(getDefaultValues);
    const [errors, setErrors] = useState(getDefaultValues);
    const [urlImg, setUrlImg] = useState('');
    const [getCountry, { loading, error }] = useLazyQuery(COUNTRY_ID, {
        variables: { id },
        onCompleted: data => {
            data = data.Country[0];
            setUrlImg(data.flag.svgFile);
            setValues({ ...values, ...data, topLevelDomain: data.topLevelDomains[0].name });
        }
    });

    useEffect(() => {
        const itemSaveLocal = localStorage.getItem(`country-${id}`);

        if (itemSaveLocal) {
            const jsonParseData = JSON.parse(itemSaveLocal);
            setValues(jsonParseData);
            setUrlImg(jsonParseData.urlImg);
        } else {
            getCountry();
        }
    }, [getCountry, id]);

    if (error) {
        return <Error />;
    }

    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errors = {};
        validateForm(values, (campo, msg) => errors[campo] = msg);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            localStorage.setItem(`country-${id}`, JSON.stringify({ ...values, urlImg }));
            setValues(getDefaultValues);
        }
    }

    return (
        <DefaultPage>
            {
                loading ?
                    <Loading /> :
                    <Container className={classes.root}>
                        <Box className={classes.containerImg}>
                            <Image
                                imageStyle={{
                                    borderRadius: '50%',
                                    height: '200px',
                                    width: '200px',
                                    position: 'relative'
                                }}
                                aspectRatio={(16 / 10)}
                                src={urlImg}
                            />
                        </Box>
                        <form
                            onSubmit={handleSubmit}
                            className={classes.form}
                            autoComplete='off'
                        >
                            <TextField
                                className={classes.input}
                                label='Name'
                                name='name'
                                error={!!errors.name}
                                helperText={errors.name}
                                value={values.name}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Capital'
                                name='capital'
                                error={!!errors.capital}
                                helperText={errors.capital}
                                value={values.capital}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Area'
                                name='area'
                                type='number'
                                error={!!errors.area}
                                helperText={errors.area}
                                value={values.area}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Population'
                                name='population'
                                type='number'
                                error={!!errors.population}
                                helperText={errors.population}
                                value={values.population}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Top-level domain'
                                name='topLevelDomain'
                                error={!!errors.topLevelDomain}
                                helperText={errors.topLevelDomain}
                                value={values.topLevelDomain}
                                onChange={handleChange}
                            />
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.saveButton}
                                startIcon={<SaveIcon />}
                                type='submit'
                            >
                                Save
                            </Button>
                        </form>
                    </Container>

            }
        </DefaultPage>
    );
}