# 李德胜
---

### 求职意向：web前端开发工程师

|    age     |      sex      |           email           |
|:----------:|:-------------:|:-------------------------:|
|     **     |     male      |     null     |
| **nation** | **telephone** |        **address**        |
|    Han     |  null  | Baiyun District,Guangzhou |


### 专业技能

---

* 掌握使用HTML+CSS，JavaScript，   Vue全家桶，ES6, nodejs，express，
* 掌握百分比布局，rem布局，响应式布局和Less CSS预编译适配各种手机和移动端浏览器
* 掌握Ajax，jsonp，axios进行前后端交互和Eelment-UI, Art-template引擎Layui框架等渲染页面
* 掌握使用主流框架Vue.js, Vuex，Element-UI进行组件化开发
* 掌握使用npm包依赖管理工具，以及熟练使用git分布式版本工具和webpack自动化构建工具
* 了解MVVM，MVC架构


### 项目经历

---

* 2022.05 育婴网站移动端
> 技术栈：
>> 项目描述：PostCSS Preset Env插件和postcss-pxtorem插件 
> 

* 2021.11 电商网站项目开发
> 技术栈： Vue+webpack+Vuex+vue-router
>> 项目描述：开发一个电商网站项目，涉及如商品列表按照价格，销量排序，商品列表按照品牌，价格过滤，动态的购物车，使用优惠码等内容
>>> 责任描述：<br/>1，该项目请求远程数据用setTimeout模拟异步获取全量的商品数据，从数据源(product.js)里通过数组的find()方法拿到指定的id数据完成数据mock，筛选和排序都是在本地完成。<br/>
2，商品列表页由路由组件list.vue(负责数据请求，过滤相关的逻辑)和简介组件product.vue(每个商品的卡品)组成。<br/>
3，将商品加入购物车通过Vuex来完成，在下单之前,可以对每个商品数量进行加减或者删除商品，下单的操作通过Vuex的action完成，完成后清空购物车数据。<br/>
>>>> 项目地址: https://gitee.com/tianyuliufang841/universal-shop

* 2021.07 电商后台管理系统

> 技术栈：Vue+Element-UI+Vue-Router+Axios+Echarts（前端）<br/>
&emsp;&emsp;&emsp;&emsp; Node.js+Express+Jwt+Mysql+Sequelize(ORM) （后端）
>> 项目描述：整体采用前后端分离的开发模式，前端是基于Vue的SPA项目，主要采用Vue+Elemen-UI实现
>>> 一，用户登录和退出登录<br/>
二，用户管理，权限管理（角色列表，权限列表），商品管理（商品列表，分类管理，参数管理）<br/>
三，订单管理，以及数据统计，项目优化<br/>
责任描述：<br/>1，构建前端的全部内容，包括页面设计排版，模块化思维对页面进行逐个开发，通过对后端数据库开放的接口获取对应的数据渲染到前端的页面中，配置axios发起登录请求，通过路由导航守卫控制页面访问权限。<br/>
2，运用element-ui布局组件完成对主页的基本布局实现，渲染菜单结构，点击左侧的菜单选项对应的内容右侧展示，创建对应的各种路由规则，v-model实现双向数据绑定，用户列表数据的分页实现，用户信息的添加，编辑和删除功能，用户角色权限的渲染及角色分配或删除权限等操作。<br/>
3，商品功能区域组件的创建，对商品的数据等信息通过表格展示（vue-table-with-tree-grid）及分页,商品分类区域使用自定义模板列渲染表格数据（同时通过作用域插槽获取对应的数据）,分类参数（通过Tab页签展示）区域的动态参数和静态属性的设定以及控制参数的编辑和删除等操作。<br/>
4，创建全局过滤器对时间进行处理，商品添加及图片上传（upload组件实现）等操作设定，构建富文本编辑器的使用，后期的项目优化及部署上线等等。
>>>> 项目地址: https://gitee.com/tianyuliufang841/vue_shop

* 2021.10 网页日报开发

> 技术栈： Vue+webpack+Node.js+axios
>> 项目描述：一款基于Vue开发的资讯类阅读单页面应用
>>> 责任描述：<br/>因接口跨域限制遂基于axios开发一个代理(proxy.js)，封装ajax, 应用分左中右三栏, 左栏菜单分“每日推荐”和“主题日报”两个类型,中间是文章列表,右侧是文章正文和评论,每日推荐按日期排列,中栏滚动至底部时自动加载前一天的推荐内容,开发了一个实时时间转换指令v-time用于时间戳转换
>>>> 项目地址: https://gitee.com/tianyuliufang841/zhihu


