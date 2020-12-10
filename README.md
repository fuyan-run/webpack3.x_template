#### tms_webpack_antd.4.x 
##### | 根据tms项目特性开发的---通用的组件化的webpack模板 |
```
--------------
| 参数的传递 |
--------------

1. {outRouter} *外部的路由对象 (注: 为了更好的嵌入到其它系统，不传默认当前match.path为根节点"/")*
```
#### 常用命令(打包命令: npm build-library)和(本地开发: npm start)，多环境可扩展
```
- 本地开发           |  yarn start
- 打包lib            |  yarn build-library
- 登录               |  yarn login
- 升级版本           |  yarn p
- 发布               |  yarn pub
```
#### 依赖详见 peerDependencies
#### 默认开发library，依赖都是靠外部 所以 `dependencies` 为空
#### 如有需要，可以将 `peerDependencies` 添加到 `dependencies`

*antd 3.x 和 antd 4.x 的样式 貌似能通用*
*这里就不打包antd 3.x 样式进去了， 遇到样式问题再做改进*
