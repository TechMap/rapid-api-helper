import RapidAPI from "./RapidAPI";
import { JobSearchResponse } from "../types/api_responses";
import { JOBS_SEARCH_PARAMETERS } from "../types/api_requests";

// Base URL for the IMDb API
const BASE_URL = "https://" + process.env.RAPIDAPI_JOBS_HOST;

// Enum representing API endpoints
enum ENDPOINTS {
    search = '/api/v2/jobs/search'
}

// Class representing Techmap's Job Posting API operations using RapidAPI
export class RAPIDAPI_API extends RapidAPI {

    // Constructor initializes the IMDb API with the provided API key
    constructor(apiKey: string) {
        super(apiKey, BASE_URL);
    }

    // Search for job postings based on provided parameters
    async search(params: JOBS_SEARCH_PARAMETERS): Promise<JobSearchResponse | null> {
        try {
            // console.log(params, BASE_URL)
            // Make GET request to the search endpoint
            const res = await this._api?.get(ENDPOINTS.search, {
                params
            });

            // Check if the response is null or undefined
            if (!res) {
                return null;
            }

            // Extract data from the response and return
            const data = res.data as JobSearchResponse;
            return data;
        } catch (e) {
            // Log error and return null in case of an exception
            console.error('Error requesting search data', e);
            return null;
        }
    }

    // Get overview information for a specific movie or TV show
    // async getOverview(params: { i: string, type?: string, callback?: string, r?: string, v?: string, plot?: string }): Promise<RA_OverViewResponse | null> {
    //     try {
    //         // Make GET request to the overview endpoint
    //         const res = await this._api?.get(ENDPOINTS.search, {
    //             params
    //         });

    //         // Check if the response is null or undefined
    //         if (!res) {
    //             return null;
    //         }

    //         // Extract data from the response and return
    //         const data = res.data as RA_OverViewResponse;
    //         return data;
    //     } catch (e) {
    //         // Log error and return null in case of an exception
    //         console.error('Error requesting overview data', e);
    //         return null;
    //     }
    // }
}
