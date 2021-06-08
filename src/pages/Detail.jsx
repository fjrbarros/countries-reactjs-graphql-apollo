import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { DefaultPage } from '../components/index';
import { COUNTRY_ID } from '../graphql/queries/countries';
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup.object().shape({
    name: yup.string().trim().required('Nome obrigatório'),
    capital: yup.string().trim().required('Capital obrigatório'),
    area: yup.string().trim().required('Área obrigatório'),
    population: yup.number().typeError('Você deve especificar um número').required('População obrigatório'),
    topLevelDomain: yup.string().trim().required('Top-level domain obrigatório')
});

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
    const [urlImg, setUrlImg] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema), defaultValues: getDefaultValues });
    const [getCountry, { loading, error }] = useLazyQuery(COUNTRY_ID, {
        variables: { id },
        onCompleted: data => {
            data = data.Country[0];
            setUrlImg(data.flag.svgFile);
            setValues({ ...values, ...data, topLevelDomain: data.topLevelDomains[0].name });
            reset({ ...data, topLevelDomain: data.topLevelDomains[0].name });
        }
    });

    useEffect(() => {
        const itemSaveLocal = localStorage.getItem(`country-${id}`);

        if (itemSaveLocal) {
            const jsonParseData = JSON.parse(itemSaveLocal);
            setValues(jsonParseData);
            setUrlImg(jsonParseData.urlImg);
            reset(jsonParseData);
        } else {
            getCountry();
        }
    }, [getCountry, id, reset]);

    if (error) {
        return <h1>Houve erro</h1>;
    }

    function handleChange(event) {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    function onHandleSubmit() {
        localStorage.setItem(`country-${id}`, JSON.stringify({ ...values, urlImg }));
        setValues(getDefaultValues);
    }

    return (
        <DefaultPage>
            {
                loading ?
                    <h1>Carregando...</h1> :
                    <Container className={classes.root}>
                        <Box className={classes.containerImg}>
                            <Image
                                imageStyle={{ borderRadius: '50%', height: '200px', width: '200px', position: 'relative' }}
                                aspectRatio={(16 / 10)}
                                src={urlImg}
                            />
                        </Box>
                        <form
                            onSubmit={handleSubmit(onHandleSubmit)}
                            className={classes.form}
                            autoComplete='off'
                        >
                            <TextField
                                className={classes.input}
                                label='Name'
                                name='name'
                                error={!!errors?.name?.message}
                                helperText={errors?.name?.message}
                                {...register('name')}
                                value={values.name}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Capital'
                                name='capital'
                                error={!!errors?.capital?.message}
                                helperText={errors?.capital?.message}
                                {...register('capital')}
                                value={values.capital}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Area'
                                name='area'
                                error={!!errors?.area?.message}
                                helperText={errors?.area?.message}
                                {...register('area')}
                                value={values.area}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Population'
                                name='population'
                                type='number'
                                error={!!errors?.population?.message}
                                helperText={errors?.population?.message}
                                {...register('population')}
                                value={values.population}
                                onChange={handleChange}
                            />
                            <TextField
                                className={classes.input}
                                label='Top-level domain'
                                name='topLevelDomain'
                                error={!!errors?.topLevelDomain?.message}
                                helperText={errors?.topLevelDomain?.message}
                                {...register('topLevelDomain')}
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