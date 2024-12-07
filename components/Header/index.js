import styles from '@/styles/Header.module.css';

export default function Header({ isLoggedIn, user, logoutUserFunction }) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Offices of Moayad Alismail Esq.</h1>
                <nav>
                    <ul className={styles.nav}>
                        <li><a href="/">Home</a></li>
                        {!isLoggedIn ? (
                            <>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/createUser">Create Account</a></li>
                            </>
                        ) : (
                            <>
                                <li><a href="/profile">Profile</a></li>
                                <li><a onClick={logoutUserFunction}>Logout</a></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}