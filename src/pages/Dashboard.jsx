import { useQuery } from '@apollo/client';
import { ContainerGrid, Card, TopBar } from '../components/index';
import COUNTRIES from '../queries/countries';

export default function Dashboard() {
    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    if (error) {
        return <h1>Houve erro</h1>;
    }

    return <>
        <TopBar textSearch='Search...' />
        <ContainerGrid>
            {data.Country.map(country => (
                <Card key={country._id}
                    name={country.name}
                    capital={country.capital}
                    imgPath={country.flag.svgFile}
                />
            ))}
        </ContainerGrid>
    </>;
};