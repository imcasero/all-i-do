import React from 'react';
import { TaskData } from '../../types';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface TaskComponentProps {
    data: TaskData;
    markAsDone: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({ data, markAsDone, deleteTask }) => {
    return (
        <div className={` p-4 my-4 flex items-center justify-between ${!data.isCompleted ? 'bg-primaryColor text-textColorDark border-none' : 'bg-green-800 opacity-50'} rounded`}>
            <div>
                <div className={`text-lg  ${data.isCompleted ? 'line-through' : ''}`}>{data.title}</div>
                <div className="text-sm">{data.isCompleted ? 'Completed' : 'Pending'}</div>
            </div>
            <div className='flex gap-4'>
                <button
                    onClick={() => markAsDone(data.id)}
                >
                    {data.isCompleted ? <RadioButtonUncheckedIcon /> : <CheckCircleOutlineIcon />}
                </button>
                <button
                    className=" px-4 py-2 rounded-lg"
                    onClick={() => deleteTask(data.id)}
                >
                    <DeleteOutlineIcon />
                </button>
            </div>
        </div>
    );
};
