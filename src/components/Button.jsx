import React from "react"

export default function Button({classes,text,type,style,onClick,icon})
{
	return(
		<button
			type={type}
			className={`btn ${classes}`}
			style={style}
			onClick={onClick}
		>
		<div className="d-flex">
			{icon}
			{text ? text:"Click"}
			</div>
		</button>

		)
}