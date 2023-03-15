import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Picture, Pictures, PictureDTO, SearchResponse } from '../types/picture';

const BASE_URL = 'https://api.unsplash.com/';
const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;
const HEADERS = {
  Authorization: `Client-ID ${API_ACCESS_KEY}`,
};
const RANDOM_PICTURES_COUNT = 12;

const getPictureFromDto = ({
  id,
  alt_description,
  description,
  location: { name } = { name: null },
  urls: { regular, small },
  color,
  views,
  downloads,
  links: { download },
  created_at,
}: PictureDTO): Picture => ({
  id,
  description: (alt_description ?? description) as string,
  locationName: name,
  urlRegular: regular,
  urlSmall: small,
  color,
  views,
  downloads,
  downloadLink: download,
  creationDate: created_at,
});

export const pictureAPI = createApi({
  reducerPath: 'pictureAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getRandomPictures: builder.query<Pictures, void>({
      query: () => ({
        url: 'photos/random',
        params: {
          count: RANDOM_PICTURES_COUNT,
        },
        headers: HEADERS,
      }),
      transformResponse: (responseData: PictureDTO[]) => responseData.map(getPictureFromDto),
    }),
    getPictureById: builder.query<Picture, string>({
      query: (id) => ({
        url: `photos/${id}`,
        headers: HEADERS,
      }),
      transformResponse: (responseData: PictureDTO) => getPictureFromDto(responseData),
    }),
    searchPictures: builder.query<Pictures, { keyword: string; count: number }>({
      query: ({ keyword, count }) => ({
        url: 'search/photos',
        params: {
          query: keyword,
          per_page: count,
        },
        headers: HEADERS,
      }),
      transformResponse: (responseData: SearchResponse) =>
        responseData.results.map(getPictureFromDto),
    }),
  }),
});

export const { useGetRandomPicturesQuery, useGetPictureByIdQuery, useSearchPicturesQuery } =
  pictureAPI;
