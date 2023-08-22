import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
const Main = lazy(() => import("../views/main/index"))
const Article= lazy(()=>import('../views/article/index'))
const routers = [
 
    {
        path: "/",
        element: <React.Suspense fallback={<div>Loading....</div>}>
            <Main />
        </React.Suspense>,

    },
    {
        path: "/article",
        element: <React.Suspense fallback={<div>Loading....</div>}>
            <Article />
        </React.Suspense>,

    },
   
]
export default routers