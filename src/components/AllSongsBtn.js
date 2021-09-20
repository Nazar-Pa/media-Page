import { Link } from "react-router-dom"

const AllSongsBtn = () => {
    return (
        <div style={{
            position: 'relative',
            display: 'flex', alignItems: 'center'

        }}>
            <Link to='/songs' >
                
                <ion-icon style={{ fontSize: '1.5em', color: '#fff', background: '#000', marginRight: '7px' }} name="chevron-forward-outline"></ion-icon>
            </Link>
        </div>
    )
}

export default AllSongsBtn


// style={{
//     color: 'rgb(126, 126, 126)',
//     borderRadius: '50%',
//     display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#777',
//     boxShadow: "inset 0 -5px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 15px rgba(0, 0, 0, 0.2)"
// }}