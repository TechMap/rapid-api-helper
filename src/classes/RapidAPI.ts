import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Abstract class representing a RapidAPI client
export default abstract class RapidAPI {

    // AxiosInstance for making HTTP requests
    protected _api?: AxiosInstance;

    // Constructor to initialize the RapidAPI instance
    constructor(apiKey: string, baseURL: string) {

        // Configure Axios with the base URL
        let instance = axios.create({
            baseURL
        });

        // Interceptor to modify the request before it is sent
        instance.interceptors.request.use(
            async (config: any) => {
                // Add the RapidAPI key and host to the request headers
                config.headers['x-rapidapi-key'] = apiKey;
                config.headers['x-rapidapi-host'] = baseURL!.split('://')[1];

                return config;
            },
            // Handle request interceptor errors
            err => {
                return Promise.reject(err);
            }
        );

        // Assign the configured Axios instance to the class property
        this._api = instance;
    }
}
