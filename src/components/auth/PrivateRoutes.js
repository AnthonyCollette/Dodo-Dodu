import { Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoutes = () => {
    const dispatch = useDispatch()

    onAuthStateChanged(getAuth(), (user) => {
        if (user === null) {
            dispatch(setAuth(false))
        } else {
            dispatch(setAuth(true))
        }
    })

    const auth = useSelector((state) => state?.user?.isAuthenticated)
    return (
        auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes