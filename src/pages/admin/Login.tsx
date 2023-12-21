import { apiRoute } from "helpers/ApiRoute";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";

interface LoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const form = useForm<LoginForm>({});
    const navigate = useNavigate();

    async function onSubmit(data: LoginForm) {
        console.log(data);
        const response = await fetch(apiRoute("auth/login"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const json = await response.json().catch((e) => {
            console.log(e);
        });
        if (json.data != null) {
            localStorage.setItem('authToken', json.data.token);

            return navigate("/admin/dashboard");
        } else {
            for (var error of json?.info?.message?.errors) {
                form.setError(error.error, {
                    message: error.message
                });
            }
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="email" {...form.register("email")} />
            <label>Password</label>
            <input type="password" {...form.register("password")} />
            <button type="submit">Login</button>
        </form>
    );
}
