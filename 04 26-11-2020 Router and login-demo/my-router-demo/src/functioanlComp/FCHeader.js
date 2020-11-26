import React from 'react';
import { Link } from 'react-router-dom';

export default function FCHeader() {
    return (
        <div style={{margin:20}}>
            <Link to="/">Home</Link>  &nbsp;&nbsp;&nbsp; |
            <Link to="/about">About</Link> |
            <Link to="/student/888">Student</Link>
        </div>
    )
}
