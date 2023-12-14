import Header from "./Header";

const HeaderWrapper: React.FC = () => {
    // Check the route to determine whether to render the Header
    const isAuthPage = window.location.pathname.startsWith('/auth');

    return (
        <div>
            {!isAuthPage && <Header />}
        </div>
    );
};

export default HeaderWrapper;