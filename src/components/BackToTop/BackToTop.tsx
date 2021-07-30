import React, { FC } from "react"
import { Fade, Fab, SvgIcon } from "@material-ui/core"

interface BackToTopProps {
  buttonPosition?: {
    left?: number
    right?: number
    top?: number
    bottom?: number
  }
  fadeDuration?: number | { enter: number; exit: number }
  color?: "primary" | "secondary" | "inherit" | "default"
  size?: "small" | "medium" | "large"
  showText?: boolean
  text?: string
  scrollPositionThreshold?: number
  buttonShowDuration?: number
  disableSmoothScroll?: boolean
  scrollTopOffset?: number
  icon?: React.ReactNode
  FadeProps?: object
  FabProps?: { style?: {} }
}

export const BackToTop: FC<BackToTopProps> = (props) => {
  //defaults
  const config = {
    buttonPosition: { bottom: 15, right: 15 },
    fadeDuration: undefined,
    color: undefined,
    size: undefined,
    showText: false,
    text: "Back to top",
    scrollPositionThreshold: 200,
    buttonShowDuration: 3000,
    disableSmoothScroll: false,
    scrollTopOffset: 0,
    icon: undefined,
    FadeProps: {},
    FabProps: { style: {} },
    ...props,
  }

  const [scrollPosition, setScrollPosition] = React.useState<number>(0)
  const [timerId, setTimerId] = React.useState<any>()
  const [showButton, setShowButton] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY)
    })
  }, [])

  React.useEffect(() => {
    if (scrollPosition > config.scrollPositionThreshold) {
      if (timerId) {
        window.clearTimeout(timerId)
        setTimerId(undefined)
      }
      setShowButton(true)
      setTimerId(
        window.setTimeout(() => {
          setShowButton(false)
        }, config.buttonShowDuration)
      )
    } else {
      window.clearTimeout(timerId)
      setTimerId(undefined)
      setShowButton(false)
    }
  }, [scrollPosition])

  const handleClick = () => {
    window.scrollTo({
      top: config.scrollTopOffset,
      behavior: config.disableSmoothScroll ? "auto" : "smooth",
    })
  }

  return (
    <Fade
      in={showButton}
      timeout={config.fadeDuration ? config.fadeDuration : undefined}
      {...config.FadeProps}
    >
      <Fab
        color={config.color ? config.color : undefined}
        variant={config.showText ? "extended" : undefined}
        size={config.size ? config.size : undefined}
        onClick={handleClick}
        onMouseEnter={() => {
          if (timerId) {
            window.clearTimeout(timerId)
            setTimerId(undefined)
          }
          setShowButton(true)
        }}
        onMouseLeave={() => {
          const newTimerId = window.setTimeout(() => {
            setShowButton(false)
          }, config.buttonShowDuration)
          setTimerId(newTimerId)
        }}
        {...config.FabProps}
        style={{
          ...config.FabProps.style,
          position: "fixed",
          ...config.buttonPosition,
        }}
      >
        {config.icon ? (
          config.icon
        ) : (
          <SvgIcon>
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
          </SvgIcon>
        )}
        {config.showText && config.text}
      </Fab>
    </Fade>
  )
}
