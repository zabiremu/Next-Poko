import { Poppins } from "next/font/google";
import {cn} from "@/lib/utils"


const font = Poppins({
    subsets: ['latin'],
    weight: ["200","300","400","500","600","700","800"]
})

export const Logo = () => {
    return(
        <div className={cn("rounded-full p-1",font.className)}>
            <h1 className='font-bold text-5xl text-white pb-1'>POKO</h1>
            <p className="text-center text-white pb-1">Let&lsquo;s Play</p>
        </div>
    )
}
