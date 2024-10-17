import { Headphones } from "lucide-react";
import React from "react";

export default function ReasonCard({ icon, heading, children }) {
    const Icon = icon ?? Headphones;
    return (
        <div className="bg-white relative transition-all  p-8 text-center rounded-xl group hover:text-white bg-gradient-to-t hover:from-[#1C0181] hover:to-[#4760FF]">
            <div className="absolute -top-10 inset-x-0">
                <div className="icon-container p-4 rounded-full border-4 border-[#1C0181] group-hover:border-white inline-block text-[#1C0181] group-hover:text-white bg-white bg-gradient-to-t group-hover:from-[#1C0181] group-hover:to-[#4760FF]">
                    <Icon size={40} />
                </div>
            </div>
            <div className="content pt-10 ">
                <h3 className="font-bold text-xl">{heading}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}
