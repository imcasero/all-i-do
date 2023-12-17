import { Add } from "../../assets/svg/add.component";

const InputComponent: React.FC = () => {

    return (
        <section className=" min-w-full flex justify-center">
            <form className="min-w-full flex justify-center gap-6" >
                <input className="w-3/4 rounded-lg border-none py-2 px-4 text-textColorDark" type="text" placeholder="add a new task" />
                <button className="w-auto flex items-center bg-primaryColor py-2 px-4 rounded-lg border-none gap-2" type="button" >
                    Add
                    <Add />
                </button>
            </form>
        </section>

    );
};

export default InputComponent;