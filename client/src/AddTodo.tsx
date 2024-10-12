import React, { useState } from "react";

export const AddTodo = () => {
    const [text, setText] = useState("");

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ text })
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}