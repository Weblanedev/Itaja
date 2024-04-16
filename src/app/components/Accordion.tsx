"use client"
{/* @ts-ignore*/ }
import { Collapsible } from "@wigxel/react-components/lib/lists";
import { FC, useState } from "react";

interface AccordionProps {
    headingText: string;
    expandedText: any;
    expandIcon: any;
    collapseIcon: any;
}

const Accordion: FC<AccordionProps> = ({
    headingText,
    expandedText,
    expandIcon,
    collapseIcon,
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div
            className={`w-full py-[14px] text-[14px] leading-6 border-b-2 border-gray-700`}
        >
            <div
                className="flex h-full w-full justify-between cursor-pointer items-center space-x-2 text-[16px] sm:text-[20px] font-body leading-normal font-[500]"
                onClick={() => setIsExpanded((v) => !v)}
            >
                <p
                    className={`translate-y-[1.5px] ${isExpanded ? "font-[700]" : "font-normal"
                        } text-neutral-900`}
                >
                    {headingText}
                </p>
                <button>{isExpanded ? collapseIcon : expandIcon}</button>
            </div>
            <Collapsible expand={isExpanded}>
                <p className="pt-[24px] text-[16px] font-body leading-6 text-gray-700">{expandedText}</p>
            </Collapsible>
        </div>
    );
};

export default Accordion;
