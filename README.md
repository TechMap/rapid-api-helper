# RapidAPI Helper

A wrapper for [RapidAPI](https://rapidapi.com) to help use [Techmap's Job Data APIs](https://jobdatafeeds.com/job-api)

This is a TypeScript helper package that simplifies the process of interacting with the Job Posting API provided by Techmap. It provides type-safe interfaces and methods for making API requests, retrieving data, and managing authentication.

Right now has limited support for the [Daily International Job Postings API](https://rapidapi.com/techmap-io-techmap-io-default/api/daily-international-job-postings/).

It uses `axios` as a dependency to make the api requests.

## Installation & Setup
To install `rapid-api-helper` into your project, use the following command:

```bash
npm install rapid-api-helper
```
or
```bash
yarn add rapid-api-helper
```

> NOTE: you need to copy your `RAPIDAPI_JOBS_API_KEY` into the `.env.local` file (but never share it with someone else or on GitHub)


## Using the Jobs Postings API

### Authentication
You need to subscribe to the API on RapidAPI and enter the `API_KEY` in the `.env.local` file before you can create an API connection. To create an API client use the following:
```ts
import {RAPIDAPI_API} from 'rapid-api-helper';

const jobsAPI = new RAPIDAPI_API(process.env.RAPIDAPI_JOBS_API_KEY);
```

### Making API Requests
The RAPIDAPI_API class provides methods for making API requests to different endpoints of the Job Posting API. For example, to retrieve the first 10 job postings for "Data Scientist" in the United States on 1. January 2024:


```ts
    const response = await jobsAPI.search({
        title: 'Data Scientist',
        dateCreated: '2024-01-01',
        page: 1
    });

    console.log(response.data);
```

The `search` method returns a promise that resolves to an object containing the API response. The data property of the response object contains an array of up to 10 JobPosting objects.

### Job Posting Data

Each object represents a job posting and contains the job's searchable data as well as the core data in [Schema.org JobPosting format](https://schema.org/JobPosting) using [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD), such as:

* `url`: The URL of the job posting
* `title`: The title of the job posting
* `description`: The description of the job posting
* `datePosted`: The date and time the job posting was created
* `hiringOrganization`: The company that posted the job
* `jobLocation`: The location of the job posting
* `baseSalary`: The salary (range) as mentioned in the job posting

... and many more.

---
### More Documentation on the API can be found here:
* Developer Resources: https://jobdatafeeds.com/developers
* Data Description: https://jobdatafeeds.com/job-data-overview
* OpenAPI definition: https://api.techmap.io

