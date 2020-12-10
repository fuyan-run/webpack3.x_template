import React from "react";
import {
    withRouter
} from 'react-router-dom';

@withRouter
class Index extends React.Component {
    render () {
        return (
            <>
                🈯Other🈯
                <p onClick={() => this.props.history.push('/home')}>点我跳转到home</p>
            </>
        );
    }
}

export default Index;