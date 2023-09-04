import { useEffect, useState } from "react";

const User = ({ name }) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
    }, []);
    
    return (
        <div className="userCard m-3 p-3 bg-gray-50 rounded-lg">
            <h1>count = {count}</h1>
            <h1>count = {count2}</h1>
            <h3>Name: {name}</h3>
            <h4>Location: Chennai</h4>
            <h4>Contact: @gmail.com</h4>
        </div>
    );
};

export default User;