import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
const Main = lazy(() => import("../views/main/index"))

const routers = [
 
    {
        path: "/",
        element: <React.Suspense fallback={<div>Loading....</div>}>
            <Main />
        </React.Suspense>,

    },
   
]
export default routers