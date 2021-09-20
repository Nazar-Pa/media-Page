import React, { } from 'react'
import Songs from './Songs'
import Films from './Films'
import Books from './Books'
import { useLocation } from 'react-router'

function Screens() {
    const location = useLocation()
        return (
        
    <div className="screens"> 
        {location.pathname === '/' && (
            <div>
            <Songs/>
            <Books/>
            <Films/>
            </div>
        )}
    </div>
        
        )
    
}

export default Screens
