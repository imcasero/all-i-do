import ThemeButtonComponent from "../themeButton/themeButton.components";

const HeaderComponent: React.FC = () => {
    return (
        <header className="w-full flex justify-between  py-6">
            <h1 className="text-primaryColor text-2xl font-semibold">All Do</h1>
            <ThemeButtonComponent />
        </header>
    );
};

export default HeaderComponent;