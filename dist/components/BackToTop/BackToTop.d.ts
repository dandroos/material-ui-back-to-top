import React, { FC } from "react";
interface BackToTopProps {
    buttonPosition?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
    fadeDuration?: number | {
        enter: number;
        exit: number;
    };
    color?: "primary" | "secondary" | "inherit" | "default";
    size?: "small" | "medium" | "large";
    showText?: boolean;
    text?: string;
    scrollPositionThreshold?: number;
    buttonShowDuration?: number;
    disableSmoothScroll?: boolean;
    scrollTopOffset?: number;
    icon?: React.ReactNode;
    FadeProps?: object;
    FabProps?: {
        style?: {};
    };
}
export declare const BackToTop: FC<BackToTopProps>;
export {};
