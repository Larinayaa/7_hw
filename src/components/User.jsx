import React from "react";
const User = ({ name, email, body }) => {
    return (
        <div className="user-card">
            <h5>{name}</h5>
            <p><strong>Email:</strong> {email}</p>
            <p>{body}</p>
            <hr />
        </div>
    );
};
export default User;
