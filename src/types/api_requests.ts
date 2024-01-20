import { Language, CountryCode } from "./common";

export interface JOBS_SEARCH_PARAMETERS {
     /**
     * The day the job postings are from - format is yyyy-MM-dd. Ex : 2024-01-01
     */
    dateCreated: string;

    /**
     * The page index, for paging purpose
     */
    page: number;

    /**
     * Anything that is part of the job posting title
     */
    title?: string;

    /**
     * The language of the job posting - one or an Array of a 2-letter language code
     */
    language?: Language | Language[];

    /**
     * The country the job is located in - one or an Array of a 2-letter country code
     */
    country?: CountryCode | CountryCode[];
    
}
// { 
//     t: string,  // t for title
//     c: string,  // c for countryCode
//     d: string,  // d for day
//     p: number   // p for page
// }