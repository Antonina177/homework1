import fetch from 'node-fetch';
import { ApiData, transformToSimplified } from './abstraction';

const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

interface ApiResponse {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

async function fetchData(url: string): Promise<ApiData> {
    const response = await fetch(url);
    const data = await response.json() as ApiResponse;


    const details = {
        description: `${data.username}, ${data.email}`,
        value: data.id
    };

    return new ApiData(data.id.toString(), data.name, details);
}

fetchData(apiUrl)
    .then((apiData) => {
        apiData.display();
        const simplified = transformToSimplified(apiData);
        console.log(`Simplified Summary: ${simplified.summary}`);
        console.log(`Total Value: ${simplified.totalValue}`);
    })
    .catch((error) => console.error('Error fetching data:', error));
