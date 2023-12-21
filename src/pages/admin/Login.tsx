import { TextField } from "@mui/material";
import { apiRoute } from "helpers/ApiRoute";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
        <div className="bg-neutralPrimary w-screen min-h-screen h-full flex flex-col justify-center">
            <div className="mx-auto bg-white w-1/3 rounded-3xl shadow-pink-400/70 shadow-lg p-5">
                <img
                    src="/favicon.png"
                    className="w-1/3 mx-auto"
                    alt="logo"
                />
                <p className="text-4xl font-bold text-primary flex justify-center my-3">
                    Login Admin Friendease
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <TextField
                        id="standard-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        {...form.register("email")}
                    />
                    <TextField
                        id="standard-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        {...form.register("password")}
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-primary text-white font-semibold rounded-lg py-2 px-5"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
