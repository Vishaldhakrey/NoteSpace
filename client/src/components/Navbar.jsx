import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    logoutFailure, 
    logoutStart, 
    signInSuccess 
} from '../redux/user/userSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }
    }

    const onClearSearch = () => {
        setSearchQuery("")
        handleClearSearch()
    }

    const onLogout = async () => {
        try {
            dispatch(logoutStart())

            const res = await axios.get("http://localhost:3000/api/auth/logout", {
                withCredentials: true
            })
            
            if(res.data.success === false) {
                dispatch(logoutFailure(res.data.message))
                toast.error(res.data.message)
                return
            }

            toast.success(res.data.message)
            dispatch(signInSuccess())
            navigate("/login")

        } catch (error) {
            toast.error(error.message)
            dispatch(logoutFailure(error.message))
        }
    }
    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow  dark:bg-gray-800'>
            <Link to={'/'}>
                <h2 className='text-xl font-medium text-black py-2'>
                    <span className='text-slate-500'>
                        Note
                    </span>
                    <span className='text-slate-900'>
                        Space
                    </span>
                </h2>
            </Link>
            <SearchBar 
                value={searchQuery}
                onChange = {({target}) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>

        </div>
    )
}

export default Navbar