import { useQuery } from '@apollo/client';
import { ContainerGrid, Card } from '../components/index';
import COUNTRIES from '../queries/countries';

export default function Dashboard() {
    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    if (error) {
        return <h1>Houve erro</h1>;
    }

    return (
        <ContainerGrid>
            {data.countries.map(country => (
                <Card key={country.name}
                    country={country}
                    img={`../../flags/${country.code.toLowerCase()}.png`}
                />
            ))}
        </ContainerGrid>
        // <ul>
        //     {
        //         data.countries.map(item => <li key={item.name}>{item.name}</li>)
        //     }
        // </ul>
        // <ContainerGrid >
        //     {results.map(person => <Card key={person.id} person={person} />)}
        // </ContainerGrid>
    );
};