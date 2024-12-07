import styles from '@/styles/UserProfile.module.css';

export default function UserProfileCard({ user }) {
    if (!user) return null;

    return (
        <div className={styles.card}>
            <div className={styles.profileInfo}>
                <p><strong>Name:</strong> {user.displayName}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {user.photoURL && (
                    <div className={styles.profileImage}>
                        <img src={user.photoURL} alt={user.displayName} />
                    </div>
                )}
            </div>
        </div>
    );
}
