import React from "react";
import {
    withRouter
} from 'react-router-dom';

@withRouter
class Index extends React.Component {
    render () {
        return (
            <>
                🏡HOME🏡
                <p onClick={() => this.props.history.push('/other')}>点我跳转到other</p>
            </>
        );
    }
}

export default Index;