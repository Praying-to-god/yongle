# 永乐票务

#### 路由定义

一级路由：

| 路径      | 组件名   |              |
| --------- | -------- | ------------ |
| /         | Home     |              |
| /city     | City     | 城市页面     |
| /register | Register | 注册         |
| /login    | Login    | 登录         |
| /profile  | profile  | 账号管理     |
| /ticket   | Ticket   | 购票详情页面 |
| /subject  | subject  | 谢春花详情   |
| /venue    | venue    | 场馆详情     |

二级路由：

| 路径      | 组件名   | 他的父级 | 页面     |
| --------- | -------- | -------- | -------- |
| /main     | main     | /        | 首页     |
| /category | category | /        | 分类     |
| /search   | search   | /        | 搜索     |
| /person   | person   | /        | 个人中心 |
