import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '用户',
                    permiss: '2',
                },
                redirect: '/user/list',
                component: () => import(/* webpackChunkName: "table" */ '../views/user/user.vue'),
                children:[
                    {
                        path: '/user/list',
                        name: 'userList',
                        meta: {
                            title: '用户列表',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/user/list.vue'),
                    },
                    {
                        path: '/user/edit/:id',
                        name: 'editUser',
                        meta: {
                            title: '编辑用户',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/user/edit.vue'),
                    },
                    {
                        path: '/user/add',
                        name: 'addUser',
                        meta: {
                            title: '添加用户',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/user/add.vue'),
                    }
                ]
            },
            {
                path: '/role',
                name: 'role',
                meta: {
                    title: '角色',
                    permiss: '2',
                },
                redirect: '/role/list',
                component: () => import(/* webpackChunkName: "table" */ '../views/role/role.vue'),
                children:[
                    {
                        path: '/role/list',
                        name: 'roleList',
                        meta: {
                            title: '角色列表',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/role/list.vue'),
                    },
                    {
                        path: '/role/edit/:id',
                        name: 'editRole',
                        meta: {
                            title: '编辑角色',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/role/edit.vue'),
                    },
                    {
                        path: '/role/add',
                        name: 'addRole',
                        meta: {
                            title: '添加角色',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/role/add.vue'),
                    }
                ]
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限',
                    permiss: '2',
                },
                redirect: '/permission/list',
                component: () => import(/* webpackChunkName: "table" */ '../views/permission/permission.vue'),
                children:[
                    {
                        path: '/permission/list',
                        name: 'permissionList',
                        meta: {
                            title: '权限列表',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/permission/list.vue'),
                    },
                    {
                        path: '/permission/edit/:id',
                        name: 'editPermission',
                        meta: {
                            title: '编辑权限',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/permission/edit.vue'),
                    },
                    {
                        path: '/permission/add',
                        name: 'addPermission',
                        meta: {
                            title: '添加权限',
                            permiss: '2',
                        },
                        component: () => import(/* webpackChunkName: "table" */ '../views/permission/add.vue'),
                    }
                ]
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/rbac',
                name: 'rbac',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/rbac.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
            {
                path: '/center',
                name: 'center',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/center.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;
