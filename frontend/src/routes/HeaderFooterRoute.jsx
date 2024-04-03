import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserHeader from '../components/UserHeader'
import { useSelector } from "react-redux"

const HeaderFooterRoute = (props) => {
    const isLogin = useSelector((state) => state.user.status)
    console.log(isLogin)
    return (
        <>
            {!isLogin ? <>
                <Header></Header>
                {props.children}
                <Footer></Footer>
            </> : <>
                <UserHeader></UserHeader>
                {props.children}
                <Footer></Footer>
            </>}


        </>
    )
}

export default HeaderFooterRoute