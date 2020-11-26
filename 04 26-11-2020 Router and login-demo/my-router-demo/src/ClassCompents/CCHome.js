import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class CCHome extends Component {

    btngo2swd = () => {
        var userObj = {
            userId2: 777,
            userName: 'avi'
        };


        this.props.history.push({
            pathname: '/student/7',
            search: '?query=abc',
            state: { userData: userObj }
        });

    }

    render() {
        return (
            <div>
                <h3>Home</h3>
                <button onClick={this.btngo2swd} >go 2 student with data</button>
            </div>
        )
    }
}
export default withRouter(CCHome);
