import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar.tsx";
import { Badge } from "../ui/badge.tsx";
import { Card, CardHeader } from "../ui/card.tsx";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

export const ResumeCard = ({
                               logoUrl,
                               altText,
                               title,
                               subtitle,
                               href,
                               badges,
                               period,
                               description,
                           }) => {
    const [isExpanded, setIsExpanded] = React.useState(true);

    const handleClick = (e) => {
        if (description) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        // <a
            // href={href || "#"}
            // className="block cursor-pointer overflow-clip -z-50"
            // onClick={handleClick}
        // >
            <Card className="flex">
                <div className="flex-none">
                    <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                        <AvatarImage
                            src={logoUrl}
                            alt={altText}
                            className="object-contain"
                        />
                        <AvatarFallback>{altText[0]}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-grow ml-4 items-center flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between gap-x-2">
                            <h3 className="inline-flex items-center justify-center leading-none font-semibold">
                                {title}
                                {badges && (
                                    <span className="inline-flex gap-x-1">
                                        {badges.map((badge, index) => (
                                            <Badge variant="secondary" className="align-middle text-xs" key={index}>
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                )}
                                {/*<ChevronRightIcon*/}
                                {/*    className={cn(*/}
                                {/*        "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",*/}
                                {/*        isExpanded ? "rotate-90" : "rotate-0"*/}
                                {/*    )}*/}
                                {/*/>*/}
                            </h3>
                            <div className="text-sm sm:text-base tabular-nums text-muted-foreground text-right">
                                {period}
                            </div>
                        </div>
                        {subtitle && <div className="font-sans text-base">{subtitle}</div>}
                    </CardHeader>
                    {description && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isExpanded ? 1 : 0,

                                height: isExpanded ? "auto" : 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="mt-2 text-base"
                        >
                            {description}
                        </motion.div>
                    )}
                </div>
            </Card>
        // </a>
    );
};
