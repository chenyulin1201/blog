module.exports = {
    title: "Chen YuLin",
    dest: 'example/dist',
    base: '/blog/',
    plugins: {
        '@vuepress/back-to-top': true
    },
    theme: require.resolve('../../packages/vuepress-theme-gnas'),
    head: [
        [
            'link', { rel: 'icon', href: '/img/favico.png' }
        ]
    ],
    themeConfig: {
        smoothScroll: true,
        themeMode: {
            enable: true,
            default: 'light'
        },
        // 首屏加载动画
        firstLoading: false,
        firstLoadingDuration: 2000,
        // blog文章所在位置
        blogBase: '/views/blog',
        // blogItem配置
        blogItemCofig: {
            // 日期格式化
            dateFormat: 'MM dd,yyyy',
        },
        // 全站访问量
        globalAccess: false,
        // 评论系统 文档：https://valine.js.org/，支持valine所有配置
        valine: {
            enable: false,
            appId: 'xxx',
            appKey: 'xxx',
        },

        // 加入公益404计划，默认为true
        notFoundPagePublicWelfare: true,
        // 音乐播放器
        music: {
            enable: false,
            autoplay: false,
            list: [{
                    name: 'Fine乐团_没有人不比我快乐',
                    href: '/music/Fine乐团_没有人不比我快乐.mp3'
                },
                {
                    name: 'Fine乐团_呼吸决定',
                    href: '/music/Fine乐团_呼吸决定.mp3'
                }
            ]
        },
        home: {
            titleLogo: '/img/titleLogo.gif',
            title: 'Chen YuLin Blog',
            description: 'Think twice before you do.',

            bannerList: [
                '/img/bg2.jpg',
                '/img/bg3.jpg',
            ],
            authorConfig: {
                enable: true,
                avatar: '/img/avatar.jpg',
                bookmark: true,
                github: 'https://github.com/chenyulin1201',
                qq: 1395748818,
                wx: '1395748818',
                email: '1395748818@qq.com',
                alipay: '',
            },
            loveConfig: {
                enable: true,
                boy: '/img/avatar.jpg',
                girl: '/img/girl.jpg',
                img: '/img/loveImg.ico',
                startDay: ''
            },
            carouselConfig: {
                enable: true,
                list: [
                    // {
                    //     title: '日记',
                    //     content: '做一个热爱生活的人，把生活记录下来。',
                    //     bg: '/img/carousel1.jpg',
                    // },
                    {
                        title: '记录',
                        content: '阶段性记录！！',
                        bg: '/img/carousel2.jpg',
                    },
                ]
            },
            tagConfig: {
                enable: true,
            }
        },
        // 备案号
        // record: '浙ICP备00000000号-0',
        // recordLink: 'http://beian.miit.gov.cn/',

        // 作者
        author: 'Chen YuLin',


        // 项目开始时间
        startYear: '2022',

        // 导航栏
        nav: [{
                text: '首页',
                link: '/',
            },
            {
                text: '归档',
                link: '/views/Archives',
            },
            {
                text: '标签',
                link: '/views/Tag'
            },
            {
                text: '笔记',
                link: '/views/notes/Web'
            },
            // {
            //     text: '友链',
            //     link: '/views/Friend'
            // },
            // {
            //     text: 'GitHub',
            //     link: 'https://github.com/ShnHz/vuepress-theme-gnas'
            // }
        ],
        sidebar: [
            '/views/notes/Web',
            '/views/notes/Test3',
            '/views/notes/Test4',
            {
                title: 'Group 1',
                collapsable: false,
                path: '/views/notes/TestGroup',
                children: [
                    '/views/notes/Test1',
                    '/views/notes/Test2',
                    {
                        title: '测试下拉',
                        collapsable: true,
                        children: [
                            '/views/notes/Test3',
                            '/views/notes/Test4',
                        ]
                    },
                ]
            }
        ],
        sidebarDepth: 0,
        activeHeaderLinks: false,

        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        tagList: [
            {
                "name": "vue",
                "type": "vue"
            },
            {
                "name": "css",
                "type": "css"
            },
            {
                "name": "javascript",
                "type": "js"
            },
        ],

        live2d: {
            model: 'hijiki',
        }
    }
}