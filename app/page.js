import Image from "next/image";
import Header from "./components/Header";
import Mainbanner from "./components/Mainbanner";

export default function Home() {
    return (
        <div className="h-[1000px]">
            <Header />
            <div className="">
                <div className="wrapper">
                    <Mainbanner />
                </div>
            </div>
        </div>
    );
}
