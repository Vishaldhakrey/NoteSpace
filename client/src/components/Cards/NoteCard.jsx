import React from 'react'
import { MdCreate, MdOutlinePushPin, MdDelete } from "react-icons/md"
import moment from 'moment'

const NoteCard = ({ title, date, content, isPinned, onPinNote, onEdit, onDelete, tags }) => {
    return (
        <div className='border rounded p-4 bg-white dark:bg-gray-800 hover:shadow-xl transition-all ease-in-out'>
            <div className="flex items-center justify-between">
                <div>
                    <h6 className='text-md font-medium text-gray-900 dark:text-gray-100'> {title}</h6>
                    <span className='text-xs text-green-700 dark:text-green-400'>
                        {moment(date).format("Do MMM YY")}
                    </span>
                </div>

                <MdOutlinePushPin   
                    className={`icon-btn ${
                        isPinned ? "text-primary" : "text-slate-300 dark:text-gray-500"
                    }`}
                    onClick={onPinNote}
                />
            </div>
            <p className='text-sm text-slate-600 dark:text-gray-300 mt-2'>
                {content.slice(0, 150)}
            </p>

            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-slate-500 dark:text-gray-400'>
                    {tags.map((tag, index) => (
                        <span key={index}>#{tag} </span>
                    ))}
                </div>
                <div className='flex items-center gap-2'> 
                    <MdCreate 
                        className='icon-btn hover:text-green-600 dark:hover:text-green-400' 
                        onClick={onEdit}
                    />

                    <MdDelete 
                        className='icon-btn hover:text-red-500 dark:hover:text-red-400' 
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default NoteCard
