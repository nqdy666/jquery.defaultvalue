# jquery.defaultvalue
### 效果
![defaultvalue.png](http://qjzd.qiniudn.com/Fj92lqVIO5EEkGCFhwFHb6PF2gHr)
### 依赖
jquery-1.11.2.min.js
### 使用
引用css
`<link rel="stylesheet" type="text/css" href="defaultvalue.css"/>`
引用js
`<script type="text/javascript" src="jquery.defaultvalue.js"></script>`
### 基本方法
```
input需带上一个defaultValue属性
<input type="text" defaultValue="请输入名字">
$("input").setDefauleValue();
```
### 高级用法
```
初始化
$.QjzdDefaultValue({defaultValue: "您好"});
```
