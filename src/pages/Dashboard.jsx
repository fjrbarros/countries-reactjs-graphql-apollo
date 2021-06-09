import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ContainerGrid, Card, DefaultPage, Loading, Error } from '../components/index';
import { COUNTRIES } from '../graphql/queries/countries';
import { useSelector, useDispatch } from 'react-redux';
import { setDataCountry } from '../redux/country/actions';

export default function Dashboard() {
    const [valueSearch, setValueSearch] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataCountry);
    const [getCountries, { loading, error }] = useLazyQuery(COUNTRIES, {
        variables: {
            filter: {
                name_contains: valueSearch
            }
        },
        onCompleted: data => dispatch(Object.assign(setDataCountry(), { data: data.Country }))
    });

    useEffect(() => {
        const handler = setTimeout(() => getCountries(), 500);

        return () => clearTimeout(handler);
    }, [valueSearch, getCountries]);

    if (error) {
        return <Error />;
    }

    function handleChangeSearch(event) {
        setValueSearch(event.target.value);
    }

    return <>
        <DefaultPage
            textSearch='Name country'
            valueSearch={valueSearch}
            onChangeSearch={handleChangeSearch}
        >
            {
                loading && !data ?
                    <Loading /> :
                    <ContainerGrid>
                        {data.map(country => {
                            let name = country.name;
                            let capital = country.capital;

                            let itemSaveLocal = localStorage.getItem(`country-${country._id}`);

                            if (itemSaveLocal) {
                                let itemParse = JSON.parse(itemSaveLocal);
                                name = itemParse.name;
                                capital = itemParse.capital;
                            }

                            return (
                                <Card key={country._id}
                                    name={name}
                                    capital={capital}
                                    imgPath={country.flag.svgFile}
                                    pathDetail={`/datail/${country._id}`}
                                />
                            )
                        })}
                    </ContainerGrid>
            }
        </DefaultPage>
    </>;
};