import { Language, CountryCode } from "./common";

export interface JobSearchResponse {
    Search: {
        api: string;
        apiVersion: string;
        page: number;
        pageSize: 10;
        totalCount: string;
        resultSizeInBytes: number;
        query: Object;
        result: JobPosting[];
    }[];
    totalResults: string;
    Response: string
}

export interface JobPosting {
    occupation: string;
    city: string;
    timezone: string;
    language: Language;
    industry: string;
    jsonLD: JSONLD;
    source: string;
    locale: string;
    geoPoint: {
        lon: number;
        lat: number;
    };
    title: string;
    skills: string[];
    dateCreated: Date;
    timezoneOffset: number;
    countryCode: CountryCode;
    workType: string[];
    company: string;
    state: string;
    portal: string;
    workPlace: string[];
}

export interface JSONLD {
    "@context":"https://schema.org";
    "@type": "JobPosting";
    identifier: string;
    title: string;
    description: string;
    url: string;
    datePosted: string;
    hiringOrganization: object;
    jobLocation: string;
    jobLocationType: object;
    employmentType: string;
    salaryCurrency: string;
    skills: string[];
    industry: string;
    relevantOccupation: string;
    applicantLocationRequirements: string;
    validThrough: string;
}
