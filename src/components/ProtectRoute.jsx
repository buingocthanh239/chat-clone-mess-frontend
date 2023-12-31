import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
function ProtectRoute({children}) {
    const { authenticate } = useSelector(state => state.auth)
    return ( 
        authenticate ? children : <Navigate to='/messenger/login' />
     );
}

export default ProtectRoute;