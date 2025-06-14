'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Animecards() {
    // const [isLoading, setIsLoading] = useState(true)
    // const [data, setData] = useState<{ id: number; title: string }[]>([])

    // useEffect(() => {
    //     axios.get('http://localhost:4000/animes').then((res) => {
    //         setData(res.data)
    //         setIsLoading(false)
    //     })
    // }, [])

    const { isLoading, data } = useQuery({
        queryKey: ['animes'],
        queryFn: () => axios.get('http://localhost:4000/animes'),
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1> Top Rated Animes</h1>
            {data?.data.map((animes: { id: number; title: string }) => {
                return <div key={animes.id}>{animes.id}. {animes.title} </div>
            })}
        </div>
    )
}

