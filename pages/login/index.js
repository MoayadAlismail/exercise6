import LoginForm from "@/components/LoginForm";
import { loginUser } from "@/utils/firebase/auth";
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const handleLogin = async (formData) => {
        try {
            await loginUser(formData.email, formData.password);
            router.push('/profile');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}