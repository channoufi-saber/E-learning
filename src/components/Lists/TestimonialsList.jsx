import React, { useEffect, useState } from "react";
import testimonialData from "../../db/testimonial-list.json";
import TestimonialCard from "../page-components/TestimonialCard";

export default function TestimonialsList(){
	const [testimonials,setTestimonials]=useState(()=>{
		return JSON.parse(localStorage.getItem("testimonialData"))
	});
	useEffect(()=>{
		setTestimonials(testimonialData);
		localStorage.setItem("testimonialData",JSON.stringify(testimonialData))
	},[testimonials])
	return <>
		{testimonials && testimonials.map((item)=>(
			<TestimonialCard
				key={item.id} 
				img={item.img}
				fullName={item.fullName}
				jobTitle={item.jobTitle}
				twitterHandle={item.twitterHandle}
				text={item.text}
			 />
			))}
	</>;
}