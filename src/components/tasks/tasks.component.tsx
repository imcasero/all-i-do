import { TaskData } from "../../types";

interface TaskComponentProps {
    children: React.ReactNode;
    data: TaskData[];
}

export const TasksComponent: React.FC<TaskComponentProps> = ({ children, data }) => {
    const tasksLenght = data.length;
    const completedTaskLength = data.filter((task) => task.isCompleted).length;

    return (
        <section className="mt-12 px-5 lg:px-0">
            <div className=" w-full flex justify-between my-6 text-sm ">
                <p>Created tasks:  <span className="bg-primaryColor px-2 rounded-full text-textColorDark"> {tasksLenght}</span></p>
                <p>Completed:  <span className=" bg-primaryColor px-2 rounded-full text-textColorDark"> {completedTaskLength} of {tasksLenght}</span></p>
            </div>
            {children}
        </section>
    )
}
