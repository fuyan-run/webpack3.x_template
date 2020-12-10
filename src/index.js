import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import './index.less'

class Index extends React.Component {
    render () {
        const { outRouter } = this.props;
        console.log("传递进来参数", this.props);
        // console.log('全局环境的参数 <CONFIG>', CONFIG);
        return (
            <Router>
                <App outRouter={outRouter} />
            </Router>
        )
    }
}
export default Index;