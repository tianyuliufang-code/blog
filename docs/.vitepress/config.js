module.exports = {
    title:'Marx`s Blog',
    description:'A blog of a front-end engineer',
    lang:'zh-CN',
    //theme:'reco',
    lastUpdate:true,
    themeConfig:{
        // subSidebar:'auto',
        lastUpdated:'Last Updated',
        //导航栏
        nav:[
            {text:'Homepage',link:'/index'},
            {text:'roadmap',link:'/foo/roadmap'},
            {text:'about_me',
                items:[
                    {text:'Github',link:'https://github.com/tianyuliufang-code'},
                    {text:'gitee',link:'https://gitee.com/tianyuliufang841'},
                    {text:'挖金',link:'https://juejin.cn/user/2203845783727863'}
                ],
            }
        ],
        //侧边栏
        sidebar:[
            {text:'Welcome my Blog',link:'/index',},
            {text:'HTML',link:'/foo/html',},
            {text:'CSS',link:'/foo/css',},
            {text:'JavaScript',link:'/foo/javascript'},
            {text:'Commonly used tools',link:'/foo/tools',
            collapsable:true,//不折叠
                children:[
                    {text:'notion',link:'/foo/notion'},
                    {text:'uTools',link:'/foo/uTools'},
                    {text:'markdown',link:'/foo/markdown'}
                ]
            }
        ],
    }
}