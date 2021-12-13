import React from 'react'
import { HeroesList } from '../hero/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            <HeroesList publisher='DC Comics'/>
        </div>
    )
}
