import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//createSlice is used if there is no async operations going on 
//createApi is used as we are fetching data from backend here and it works somewhat differently than createSlice
//fetchBaseQuery allows us to make request to backend api
import { BASE_URL} from '../constants';

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product','Order','User'],
    endpoints: (builder)=>({})
});
//tagTypes contains the data about what kind of data is fetched
//using builder we don't have to manually fetch where we use try-catch and errorhandlers