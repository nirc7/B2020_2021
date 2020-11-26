import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class CCStudent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Student</h3>
                params user id =  {this.props.match.params.userId} <br/>
                user id 2 =  {this.props.location.state.userData.userId2} <br/>
                username = {this.props.location.state.userData.userName} <br/>
            </div>
        )
    }
}
export default withRouter(CCStudent);