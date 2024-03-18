import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className="wrapper flex justify-between items-center">
            <div className="flex font-source items-center">
                <div className="mr-6 bg-cyan-500 relative rounded-full overflow-hidden">
                    <Image className="w-full" src={"/images/img.jpg"} width={160} height={185} alt="" />
                </div>
                <div className="">RIKY ADI PUTRA</div>
            </div>
            <div>
                <ul className="flex justify-between font-source">
                    <li className="px-[35px] py-[48px]"><Link href={"/"} className="font-bold">HOME</Link></li>
                    <li className="px-[35px] py-[48px]"><Link href={"/"}>ABOUT</Link></li>
                    <li className="px-[35px] py-[48px]"><Link href={"/"}>PROJECTS</Link></li>
                    <li className="px-[35px] py-[48px]"><Link href={"/"}>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    )
}