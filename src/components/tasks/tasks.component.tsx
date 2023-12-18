interface TaskComponentProps {
    children: React.ReactNode;
}

export const TasksComponent: React.FC<TaskComponentProps> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    )
}
