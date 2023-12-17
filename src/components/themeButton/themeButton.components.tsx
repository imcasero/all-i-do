import { Moon } from "../SVG/moon.component";

const ThemeButtonComponent: React.FC = () => {
    return (
        <button className="bg-primaryColor text-textColorDark py-2 px-4 rounded-full">
            <Moon />
        </button>
    );
};

export default ThemeButtonComponent;