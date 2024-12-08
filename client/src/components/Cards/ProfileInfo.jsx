import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ userInfo, onLogout }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full
                text-slate-950 font-medium bg-slate-100 dark:bg-slate-800 dark:text-slate-200'>
                {getInitials(userInfo?.username)}
            </div>
            <button 
                className='text-sm bg-red-500 p-2 rounded-md text-white hover:bg-red-600 transition-colors'
                onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}

export default ProfileInfo
