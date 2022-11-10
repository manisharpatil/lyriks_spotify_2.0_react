import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3fcbb2a8bbmsh67c3653024b1660p1ad2d9jsn9a11b13a5dea');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({ query: ({ songid }) => '/tracks/details?track_id=${songid}' }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;