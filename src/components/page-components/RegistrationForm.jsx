import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import Button from "../Button";
import FormGroup from "../FormGroup";

export default function RegistrationForm({handleCancel,showLogin,registred,handleRegistration}){

	// References
	let fullName=useRef();
	useEffect(()=>{
		fullName.current.focus();
	},[])

	// state

	const[registration,setRegistration]=useState({
		fullName:"",
		email:"",
		password:"",
		passwordConf:"",
	})

	// Handlers
	const handlerInputChange=(e)=>{
		setRegistration({...registration,[e.target.name]:e.target.value})
	}

	function handleRegistration(e){
		e.preventDefault();
		const events={
			fullName:registration.fullName,
			email:registration.email,
			password:registration.password,
			passwordConf:registration.passwordConf,
			id:Math.floor(Math.random()*1000),
		}
		const validateRegistrationForm=(obj)=>{
			console.log(obj)
			if (Object.values(obj).every(
				(value) =>value || (typeof value === "number" && value===0)
				)) {
				resetForm();
				window.alert("Success");
				showLogin()
			} else {
				window.alert("Complete all fields");
			}
		};
		validateRegistrationForm(events)
		function resetForm() {
			setRegistration({
				fullName:"",
				email:"",
				password:"",
				passwordConf:"",
			})
		}
	}
	return(
		<div className="form fadeIn" style={{maxWidth:500}}>
			<Title text="Register" classes={"text-center mb-4"} />
			<Button
			className={"btn-close"}
			text={"x"}
			style={{position:"absolute",top:20,right:30}}
			onClick={handleCancel}

			 />
			 <form onSubmit={handleRegistration} >
			 	<FormGroup
			 	label={"Name"}
			 	placeholder={"Enter your name"}
			 	reference={fullName}
			 	value={registration.fullName}
			 	onChange={handlerInputChange}
			 	name="fullName"
			 	 />

			 	 <FormGroup
			 	label={"Email"}
			 	placeholder={"Enter your email"}
			 	type={"email"}
			 	value={registration.email}
			 	onChange={handlerInputChange}
			 	name="email"
			 	 />

			 	 <FormGroup
			 	label={"password"}
			 	placeholder={"Enter your password"}
			 	type={"password"}
			 	value={registration.password}
			 	onChange={handlerInputChange}
			 	name="password"
			 	 />

			 	 <FormGroup
			 	label={"passwordConf"}
			 	placeholder={"Enter your password"}
			 	type={"password"}
			 	value={registration.passwordConf}
			 	onChange={handlerInputChange}
			 	name="passwordConf"
			 	 />
			 <div className="d-flex space-between">
				<Button classes={"btn-primary btn-lg"} type={"submit"} text={"Register"}
						onClick={()=>window.alert("Registered")}
				 />
				
				<Button type={"button"} text={"Login"} classes={"btn-lg"} onClick={showLogin} />
			</div>
			 </form>
		</div>

		)
}