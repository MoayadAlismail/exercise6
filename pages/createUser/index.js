import CreateUserForm from "@/components/CreateUserForm";
import { createUser } from "@/utils/firebase/auth";
import { useRouter } from 'next/router';

export default function CreateUser() {
    const router = useRouter();

    const handleCreateUser = async (formData) => {
        try {
            await createUser(formData.email, formData.password, formData.displayName);
            router.push('/profile');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Create Account</h1>
            <CreateUserForm onSubmit={handleCreateUser} />
        </div>
    );
}