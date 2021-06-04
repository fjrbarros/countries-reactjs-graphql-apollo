import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ContainerGrid, Card, TopBar } from '../components/index';
import COUNTRIES from '../queries/countries';

export default function Dashboard() {
    const [valueSearch, setValueSearch] = useState('');
    const [getCountries, { loading, error, data, }] = useLazyQuery(COUNTRIES);

    useEffect(() => {
        const handler = setTimeout(() => getCountries({
            variables: {
                filter: {
                    name_contains: valueSearch
                }
            }
        }), 500);

        return () => clearTimeout(handler);
    }, [valueSearch, getCountries]);

    if (error) {
        return <h1>Houve erro</h1>;
    }

    function handleChangeSearch(event) {
        setValueSearch(event.target.value);
    }

    return <>
        <TopBar
            textSearch='Search...'
            valueSearch={valueSearch}
            onChangeSearch={handleChangeSearch}
        />
        {
            loading ?
                <h1>Carregando...</h1> :
                <ContainerGrid>
                    {data?.Country.map(country => (
                        <Card key={country._id}
                            name={country.name}
                            capital={country.capital}
                            imgPath={country.flag.svgFile}
                        />
                    ))}
                </ContainerGrid>

        }
    </>;
};