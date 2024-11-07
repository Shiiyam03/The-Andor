"use client"

import { useEffect, useState } from "react"
import Footer from "./inludes/Footer"
import MainHeader from "./inludes/MainHeader"
import SubMenu from "./inludes/SubMenu"
import TopMenu from "./inludes/TopMenu"
import Loading from "../components/Loading"

export default function MainLayout({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        window.addEventListener("storage", function () {
            let res = localStorage.getItem('isLoading')
            res === 'false' ? setIsLoading(false) : setIsLoading(true)
        })
    })

    return (
        <>
            <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
                <div>
                    {isLoading ? <Loading /> : <div></div>}
                    <TopMenu />
                    <MainHeader />
                    <SubMenu />

                    {children}

                    <Footer />
                </div>
            </div>
        </>
    )
}