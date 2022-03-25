import * as React from "react";
import Dashboard from "../pages/admin/Dashboard";
import BasicForm from '@/pages/admin/form/Basic'
import Advanced from "../pages/admin/form/Advanced";
import Wizard from "../pages/admin/form/Wizard";
import Editor from "../pages/admin/form/Editor";
import CustomIndex from '@/pages/admin/customer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Hello from "@/pages/Hello";
import Simple from "@/pages/admin/dialog/Simple";
import Icon from "@/pages/admin/icon/Simple";

const path2components = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/form/basic',
        component: BasicForm
    },
    {
        path: '/form/basic/advanced',
        component: Advanced
    },
    {
        path: '/form/advanced',
        component: Advanced
    },
    {
        path: '/form/wizard',
        component: Wizard
    },
    {
        path: '/form/editor',
        component: Editor
    },
    {
        path: '/customer/index',
        component: CustomIndex
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/dialog/simple',
        component: Simple
    },
    {
        path: '/icon/simple',
        component: Icon
    }
]

export default path2components;