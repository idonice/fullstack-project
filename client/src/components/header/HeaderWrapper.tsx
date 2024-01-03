import Header from "./Header";

const HeaderWrapper: React.FC = () => {
    // no header in auth page
    const isAuthPage = window.location.pathname.startsWith('/auth');

    return (
        <div>
            {!isAuthPage && <Header />}
        </div>
    );
};

export default HeaderWrapper;