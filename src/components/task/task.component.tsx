import React from 'react';
import { TaskData } from '../../types';
import { Check } from '../../assets/svg/check.component';
import { Trash } from '../../assets/svg/trash.component';

interface TaskComponentProps {
    data: TaskData;
    markAsDone: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

export const TaskComponent: React.FC<TaskComponentProps> = ({ data, markAsDone, deleteTask }) => {
    return (
        <div className={`border p-4 my-4 flex items-center justify-between ${data.isCompleted ? 'bg-primaryColor' : 'bg-white'} rounded-lg`}>
            <div>
                <div className={`text-lg font-semibold ${data.isCompleted ? 'line-through text-gray-300' : ''}`}>{data.title}</div>
                <div className="text-sm">{data.isCompleted ? 'Completed' : 'Pending'}</div>
            </div>
            <div>
                <button
                    className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-2 ${data.isCompleted ? 'hidden' : ''}`}
                    onClick={() => markAsDone(data.id)}
                >
                    <Check />
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={() => deleteTask(data.id)}
                >
                    <Trash />
                </button>
            </div>
        </div>
    );
};
