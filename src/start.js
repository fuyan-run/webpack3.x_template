import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import './index.less'

class Index extends React.Component {
    render () {
        // console.log('全局环境的参数 <CONFIG>', CONFIG);
        return (
            <Router>
                <App />
            </Router>
        )
    }
}
ReactDom.render(<Index />, document.getElementById("app"))