import { ChangeEvent, FormEvent, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
interface InputComponentProps {
    onAddTask: (taskTitle: string) => void;
}

export const InputComponent: React.FC<InputComponentProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState<string>("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (title) {
            onAddTask(title);
            setTitle("");
        }
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }


    return (
        <section className=" min-w-full flex justify-center mt-4 lg:px-0 px-5">
            <form className="min-w-full flex justify-center lg:gap-6 gap-2" onSubmit={handleSubmit}>
                <input className="w-3/4 rounded-lg border-none py-2 px-4 text-textColorDark" type="text" placeholder="add a new task" value={title} onChange={onChangeTitle} />
                <button className="w-auto flex items-center bg-primaryColor text-textColorDark py-2 px-4 rounded-lg border-none gap-2" type="submit" >
                    Add
                    <AddCircleOutlineIcon />
                </button>
            </form>
        </section>

    );
};

