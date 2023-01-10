import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:5445'

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder=>({
        //get category
        getCategories:builder.query({
            query:()=>'/expenses/category',
            providesTags: ['categories']
        }),

        //get Lables
        getLables:builder.query({
            query:()=>'/expenses/labels',
            providesTags: ['transaction']
        }),

        //Create new Transaction
        addTransaction:builder.mutation({
            query:(initialTransaction)=>({
                url:'/expenses/transaction',
                method:'POST',
                body:initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        //Delete Transaction
        deleteRecord:builder.mutation({
            query:recordId=>({
                url:'/expenses/transaction',
                method:'DELETE',
                body:recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
}) 

export default apiSlice;
    