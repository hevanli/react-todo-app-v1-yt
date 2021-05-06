// add types for react
// yarn add --dev @types/react

// git init: initialize git in a project

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react'
import {TodoFormProps, TodoNote} from '../types';

var g_generatedItems = 0; // TODO replace with Redux controlled state

function TodoForm(props : TodoFormProps) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef<null|HTMLInputElement>(null);

	useEffect(()=>{
		inputRef.current?.focus();
	})

	const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		++g_generatedItems;
		props.onSubmit({
			id: g_generatedItems, // <-- not random
			text: input
		});
		setInput('');
	}
	var buttonText = null, placeholderText = null, fieldClassName = null, buttonClassName = null;
	if (!props.edit) {
		buttonText = "Add todo";
		placeholderText = "Add a todo";
		fieldClassName = "todo-input";
		buttonClassName = "todo-button";
	} else {
		buttonText = "Update";
		placeholderText = "Update your item";
		fieldClassName = "todo-input edit";
		buttonClassName = "todo-button edit";
	}
	return (
		<form className="todo-form" onSubmit={handleSubmit}>
		<input 
			type="text"
			placeholder={placeholderText}
			value={input}
			name="text"
			className={fieldClassName}
			onChange={handleChange}
			ref={inputRef}
		/>
		<button className={buttonClassName}>{buttonText}</button>
		</form>
	)
}

export default TodoForm