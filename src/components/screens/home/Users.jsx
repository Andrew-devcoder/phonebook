import React, { useState, useEffect } from "react";
import axios from "axios";
import style from './Users.module.css'

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // Оновити стан "data" з отриманими даними
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []); // Пустий масив дозволяє виконувати ефект тільки після монтування компонента

    return (
        <div className={style.container}>
            {data.map((user) => (
                <div key={user.id} className={style.user}>
                    <p>Name: {user.name}</p>
                    <p>User-name: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: <br></br>
                        street: {user.address.street}<br></br>
                        suite: {user.address.suite}</p>
                </div>
            ))}
        </div>
    );
};

export default Users;
