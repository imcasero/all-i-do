import React from 'react';
import { TaskData } from '../../types';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface TaskComponentProps {
    data: TaskData;
    markAsDone: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({ data, markAsDone, deleteTask }) => {
    return (
        <div className={` p-4 my-4 flex items-center justify-between bg-textColorDark ${!data.isCompleted ? 'border-none' : ' opacity-40 text-green_text'}  rounded-lg`}>
            <div className='flex items-center gap-3'>
                <button
                    onClick={() => markAsDone(data.id)}
                    className={`${!data.isCompleted ? ' text-primaryColor ' : ''}`}
                >
                    {!data.isCompleted ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                </button>
                <div>
                    <div className={`text-lg  ${data.isCompleted ? 'line-through ' : 'text-primaryColor'}`}>{data.title}</div>
                    <div className={`text-xs ${!data.isCompleted ? ' ' : 'text-primaryColor'}`}>{data.isCompleted ? 'Completed' : 'Pending'}</div>
                </div>

            </div>
            <div className='flex gap-4'>
                <button
                    className=" px-4 py-2 rounded-lg text-primaryColor"
                    onClick={() => deleteTask(data.id)}
                >
                    <DeleteOutlineIcon />
                </button>
            </div>
        </div>
    );
};
