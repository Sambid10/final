"use client";
import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTiktok, SiX, SiYoutube } from "react-icons/si";
import { useAnimate, motion } from "framer-motion";
import { IconType } from "react-icons";

export default function FooterLinks() {
    return (

        <div className="flex  justify-center w-full items-center h-full">
            <LinkContainer />
        </div>
    );
}

const LinkContainer = () => {
    return (
        <div className="divide-y w-[100%] border-px">
            <div className="grid grid-cols-2 lg:h-24 h-20 divide-x border-px divide-gray-700">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full"
                    href={"https://www.facebook.com/profile.php?id=61572001973988&mibextid=ZbWKwL"}
                >
                    <IconContainer IconImage={SiFacebook} />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full"
                    href={"https://www.instagram.com/thresh_.vue"}
                >
                    <IconContainer IconImage={SiInstagram} />
                </a>

            </div>
        </div>
    );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    top: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const IconContainer = ({ IconImage }: { IconImage: any }) => {
    const [scope, animate] = useAnimate()

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: ENTRANCE_KEYFRAMES[side],
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const side = getNearestSide(e);
        animate(scope.current, {
            clipPath: EXIT_KEYFRAMES[side],
        });
    };

    const getNearestSide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): string => {
        const box = e.currentTarget.getBoundingClientRect();
        const proximity = [
            { side: "left", value: Math.abs(box.left - e.clientX) },
            { side: "right", value: Math.abs(box.right - e.clientX) },
            { side: "top", value: Math.abs(box.top - e.clientY) },
            { side: "bottom", value: Math.abs(box.bottom - e.clientY) },
        ];

        proximity.sort((a, b) => a.value - b.value);
        return proximity[0].side;
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative grid place-content-center h-full pointer-events-auto border-gray-500"
        >
            <div>
                
                <IconImage className="text-[#fff] lg:h-9 lg:w-10 h-6 w-6" />
            </div>
            <motion.div
                ref={scope}
                style={{
                    clipPath: "polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)",
                }}
                className="grid place-content-center bg-gradient-to-r from-violet-600 to-indigo-600 text-gray-50 absolute inset-0"
            >
                <div>
                    <IconImage className="text-[#fff] lg:h-9 lg:w-10 h-6 w-6" />
                </div>
            </motion.div>
        </div>
    );
};