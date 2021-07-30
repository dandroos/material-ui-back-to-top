var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Fade, Fab, SvgIcon } from "@material-ui/core";
export var BackToTop = function (props) {
    //defaults
    var config = __assign({ buttonPosition: { bottom: 15, right: 15 }, fadeDuration: undefined, color: undefined, size: undefined, showText: false, text: "Back to top", scrollPositionThreshold: 200, buttonShowDuration: 3000, disableSmoothScroll: false, scrollTopOffset: 0, icon: undefined, FadeProps: {}, FabProps: { style: {} } }, props);
    var _a = React.useState(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var _b = React.useState(), timerId = _b[0], setTimerId = _b[1];
    var _c = React.useState(false), showButton = _c[0], setShowButton = _c[1];
    React.useEffect(function () {
        document.addEventListener("scroll", function () {
            setScrollPosition(window.scrollY);
        });
    }, []);
    React.useEffect(function () {
        if (scrollPosition > config.scrollPositionThreshold) {
            if (timerId) {
                window.clearTimeout(timerId);
                setTimerId(undefined);
            }
            setShowButton(true);
            setTimerId(window.setTimeout(function () {
                setShowButton(false);
            }, config.buttonShowDuration));
        }
        else {
            window.clearTimeout(timerId);
            setTimerId(undefined);
            setShowButton(false);
        }
    }, [scrollPosition]);
    var handleClick = function () {
        window.scrollTo({
            top: config.scrollTopOffset,
            behavior: config.disableSmoothScroll ? "auto" : "smooth",
        });
    };
    return (React.createElement(Fade, __assign({ in: showButton, timeout: config.fadeDuration ? config.fadeDuration : undefined }, config.FadeProps),
        React.createElement(Fab, __assign({ color: config.color ? config.color : undefined, variant: config.showText ? "extended" : undefined, size: config.size ? config.size : undefined, onClick: handleClick, onMouseEnter: function () {
                if (timerId) {
                    window.clearTimeout(timerId);
                    setTimerId(undefined);
                }
                setShowButton(true);
            }, onMouseLeave: function () {
                var newTimerId = window.setTimeout(function () {
                    setShowButton(false);
                }, config.buttonShowDuration);
                setTimerId(newTimerId);
            } }, config.FabProps, { style: __assign(__assign(__assign({}, config.FabProps.style), { position: "fixed" }), config.buttonPosition) }),
            config.icon ? (config.icon) : (React.createElement(SvgIcon, null,
                React.createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }))),
            config.showText && config.text)));
};
//# sourceMappingURL=BackToTop.js.map