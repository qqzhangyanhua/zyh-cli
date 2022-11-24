### 关于多包管理方案

    - lerna
    - pnpm

    pnpm 节省磁盘

### 安装的插件

- ora
- chalk
- sade
- enquirer
- np
- execa
- fs-extra
- semver

### 脚手架是一个操作系统的客户端

--force

- 输入命令--从环境变量去找到这个命令
- which vue 可以查找当前命令所在的位置

-#!/usr/bin/env node 在头部添加这个标识 告诉操作系统直接执行 - node 本身是一个客户端，是一个可执行的文件

    ### 登录
    npm login

发布 npm i -g xxx

或者 npm link 创建软链接 （npm remove -g xxx）需要移除已经安装的才能方便调试

npm link xxx 会安装创建的软连接 用于本地调试

npm unlink xxx 解除绑定
