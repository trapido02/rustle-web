import { useState } from "react"

function Login() {
	const [ formData, setFormData ] = useState({
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		fetch("http://localhost:3001/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
				<input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login