import React from "react"
import { Fade, Fab, SvgIcon } from "@material-ui/core"

export const BackToTop = (props) => {
	const config = {
		buttonPosition: { bottom: 15, right: 15 },
		fadeDuration: undefined,
		color: undefined,
		size: undefined,
		showText: false,
		text: "Back to top",
		scrollPositionThreshold: 200,
		scrollShowTime: 3000,
		smoothScroll: true,
		scrollTopOffset: 0,
		icon: undefined,
		FadeProps: {},
		FabProps: {},
		...props,
	}

	const [scrollPosition, setScrollPosition] = React.useState(0)
	const [timerId, setTimerId] = React.useState(null)
	const [showButton, setShowButton] = React.useState(false)

	React.useEffect(() => {
		document.addEventListener("scroll", (e) => {
			setScrollPosition(window.scrollY)
		})
	}, [])

	React.useEffect(() => {
		if (scrollPosition > config.scrollPositionThreshold) {
			if (timerId) {
				clearTimeout(timerId)
				setTimerId(null)
			}
			setShowButton(true)
			setTimerId(
				setTimeout(() => {
					setShowButton(false)
				}, config.scrollShowTime)
			)
		} else {
			clearTimeout(timerId)
			setTimerId(null)
			setShowButton(false)
		}
	}, [scrollPosition])

	const handleClick = () => {
		window.scrollTo({
			top: config.scrollTopOffset,
			behavior: config.smoothScroll ? "smooth" : "auto",
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
						clearTimeout(timerId)
						setTimerId(null)
					}
					setShowButton(true)
				}}
				onMouseLeave={() => {
					setTimerId(
						setTimeout(() => {
							setShowButton(false)
						}, config.scrollShowTime)
					)
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
				{config.showText && "Back to top"}
			</Fab>
		</Fade>
	)
}
