# `thinkjs vscode`断点调试
1. 根目录下新建`debug.js`
```
// debug.js
const InspectorProxy = require('inspector-proxy');
const proxy = new InspectorProxy({ port: 9090 });
const childProcess = require('child_process');

const instance = childProcess.fork('./development.js', {
  execArgv: [ '--inspect' ]
});
instance.on('message', msg => {
  if (msg.act === 'inspectPort' && msg.port) {
    proxy.start({ debugPort: msg.port });
  }
});
instance.on('exit', () => proxy.end());
```
`port`要选择没有被占用的端口，并且要安装`inspector-proxy`

2. `vscode`的`debugger`模式建立`launch.json`
```
/*
 * launch.json
 * office centos是断点调试远程node的
 * hom macos是断点调试本地node的
 */
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "office centos",
            "address": "192.168.1.12",
            "port": 9090,
            "localRoot": "${workspaceFolder}",
            "remoteRoot": "/home/Github/Canvas_learn/thinkJs",
            "restart": true
        },
        {
            "name": "home macos",
            "type": "node",
            "request": "attach",
            "restart": true,
            "port": 9090
        }
    ]
}
```