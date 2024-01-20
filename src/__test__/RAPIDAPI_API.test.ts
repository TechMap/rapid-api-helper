import {RAPIDAPI_API} from "../classes/RAPIDAPI_API";

const apiKey = process.env.RAPIDAPI_JOBS_API_KEY || ''; // Provide a default empty string if undefined
const api = new RAPIDAPI_API(apiKey);

it('return search results', async ()=> {
    const data = await api.search({title: 'Data Scientist', dateCreated: '2024-01-01', page: 1});

    expect(data).toBeTruthy();
});
