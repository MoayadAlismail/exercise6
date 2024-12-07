import UserProfileCard from "@/components/UserProfileCard";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Profile({ isLoggedIn, user }) {
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) return null;

    return (
        <div>
            <h1 style={{textAlign:'center'}} >Your Profile</h1>
            <UserProfileCard user={user} />
        </div>
    );
} 