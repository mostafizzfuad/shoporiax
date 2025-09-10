import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
	const [message, setMessage] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<section className="h-screen flex items-center justify-center p-2">
			<div className="shadow bg-[#f4e5ec] p-8 max-w-sm mx-auto ">
				<h2 className="text-2xl font-semibold pt-5">
					Please Register!
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-3 max-w-sm mx-auto pt-6 min-w-[20rem] mb-4"
				>
					<input
						{...register("username", { required: true })}
						type="text"
						name="username"
						placeholder="Username"
						className="w-full bg-gray-100 focus:outline-none px-5 py-3 mb-6"
					/>
					{errors.username && (
						<p className="text-red-500">Username is required</p>
					)}

					<input
						{...register("email", { required: true })}
						type="email"
						name="email"
						placeholder="Email"
						className="w-full bg-gray-100 focus:outline-none px-5 py-3 mb-6"
					/>
					{errors.email && (
						<p className="text-red-500">Email is required</p>
					)}

					<input
						{...register("password", { required: true })}
						type="password"
						placeholder="Password"
						className="w-full bg-gray-100 focus:outline-none px-5 py-3 mb-6"
					/>
					{errors.password && (
						<p className="text-red-500">Password is required</p>
					)}

					{message && <p className="text-red-500">{message}</p>}
					<button className="w-full bg-[#ed3849] hover:bg-[#ed3849]/90 text-white font-medium rounded-md px-5 py-3">
						Register
					</button>
				</form>
				<div className="italic text-sm text-center">
					Have an account? Please{" "}
					<Link to="/login" className="text-red-700 px-1">
						Login
					</Link>{" "}
					here.
				</div>
			</div>
		</section>
	);
};

export default Register;
