import React from 'react'
import { HeroesList } from '../hero/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroesList publisher='Marvel Comics'/>
        </div>
    )
}
