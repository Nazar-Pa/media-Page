import React from 'react'
import { Link } from 'react-router-dom'

const AllFilmsBtn = () => {
    return (
        <div style={{
            position: 'relative',
            display: 'flex', alignItems: 'center'
        }}>
            <Link to='/films' >
            <ion-icon style={{ fontSize: '1.5em', color: '#fff', background: '#000', marginRight: '7px' }} name="chevron-forward-outline"></ion-icon>            </Link>
        </div>
    )
}

export default AllFilmsBtn
