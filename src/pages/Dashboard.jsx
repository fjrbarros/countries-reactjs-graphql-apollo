import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { ContainerGrid, Card, DefaultPage, Loading, Error } from '../components/index';
import { COUNTRIES } from '../graphql/queries/countries';
import { useSelector, useDispatch } from 'react-redux';
import { setDataCountry } from '../redux/country/actions';

export default function Dashboard() {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState('');
    const data = useSelector(state => state.dataCountry);
    const [getCountries, { loading, error }] = useLazyQuery(COUNTRIES, {
        variables: { filter: valueSearch },
        onCompleted: data => dispatch(Object.assign(setDataCountry(), { data: data.countries }))
    });

    useEffect(() => getCountries(), [valueSearch, getCountries]);

    if (loading && !data.length) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    function handleChangeSearch(event) {
        setValueSearch(event.target.value);
    }

    return (
        <DefaultPage
            textSearch='Name country'
            valueSearch={valueSearch}
            onChangeSearch={handleChangeSearch}
        >
            <ContainerGrid>
                {data.map(country => {
                    const itemSaveLocal = localStorage.getItem(`country-${country._id}`);
                    const { name, capital } = itemSaveLocal ? JSON.parse(itemSaveLocal) : country;

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
        </DefaultPage>
    );
};