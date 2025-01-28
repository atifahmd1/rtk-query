// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({ //res typ, qry_typ
        getPosts: builder.query<Post[], void>({   // query is for GET request and mutation is for POST, PUT, DELETE request
            query: () => 'posts',
            providesTags: ['Posts'],
        }),

        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

//?export const  {getPosts} = api.endpoints; // getPosts is a hook that can be used in components to fetch data
// hm aese bhi kr skte hain, lekin since we are using react, we can import from '@reduxjs/toolkit/query/react' and use hooks from there

export const { useGetPostsQuery, useCreatePostMutation } = api; // this is a hook that can be used in components to fetch data