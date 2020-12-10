import React from "react";
import {
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import { Spin } from "antd"

import Home from "view/Home"
import Other from "view/Other"

// 图片的引入方式
// const liuxing = require('static/img/liuxing.png').default

@withRouter
class Index extends React.Component {

    state = {
        visible: true,
    }

    componentDidMount = () => {
    }

    render () {
        let match = ''
        try {
            match = this.props.outRouter.match
        } catch (error) {
            match = this.props.match
        }
        return (
            <div className="tms-template--style" style={{padding: '20px'}}>
                {`_🐾当前根目录🐾_( ${match.path} )`}
                <h2 className="test">测试开发组件之路由展示</h2>
                <Switch>
                    <Route path={`${match.path}other`}>
                        <Other />
                    </Route>
                    <Route path={`${match.path}home`} component={Home} />
                </Switch>
                <div style={{border: '2px solid red', width: '300px'}}>
                    <p onClick={() => this.props.history.push(`${match.path}home`)}>点我到home</p>
                    <p onClick={() => this.props.history.push(`${match.path}other`)}>点我到other</p>
                    <p onClick={() => this.props.history.push(`${match.path}`)}>点我回到主页</p>
                </div>
            </div>
        );
    }
}
export default Index;