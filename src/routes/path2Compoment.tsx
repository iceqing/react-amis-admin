import * as React from "react";
import Dashboard from "./admin/Dashboard";
import BasicForm from '@/routes/admin/form/Basic'
import Advanced from "./admin/form/Advanced";
import Wizard from "./admin/form/Wizard";
import Editor from "./admin/form/Editor";
import CustomIndex from '@/routes/admin/customer';


const path2components = [
    {
        path: '/',
        component: Dashboard
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
    }
]

export default path2components;