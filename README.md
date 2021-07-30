# material-ui-back-to-top
An easy-to-use Material-UI/React component for returning the user to the top of the page

## Install
```bash
npm i material-ui-back-to-top
```

**NOTE:** This component requires Material-UI to work

## Usage
```javascript
import React from "react"
import { BackToTop } from "material-ui-back-to-top"

export const Layout = ({ children }) =>{
  return (
    <div>
      <BackToTop />
      { children }
    </div>
  )
}

```

## API

|Property|Description|Type|Options|Default|
|--|--|--|--|--|
|`buttonPosition`|Specify the location of the button|`object`|N/A|{ bottom: 15, right: 15 }
|`size`|Specify the size of the button|`string`|"large", "medium", "small"|"large"
|`color`|Specify the color of the button|`string`|"default", "inherit", "primary", "secondary"|"default"
|`icon`|Use a custom icon for the button (**NOTE:** Must be a React component)|`node`|N/A|ChevronUp
|`showText`|Show text next to the icon|`boolean`|N/A|false
|`text`|Specify the text to show (only works if showText is true)|`string`|N/A|"Back to top"
|`fadeDuration`|Specify the fade in/out duration of the button|`number \| { appear?: number, enter?: number, exit?: number }`|N/A|{ enter: 225, exit: 195 }
|`disableSmoothScroll`|Disable smooth scrolling|`boolean`|N/A|true
|`scrollPositionThreshold`|Specify the scrollY position threshold for displaying the button|`number`|N/A|200
|`buttonShowDuration`|Specify how long the button should remain on the screen when user stops scrolling|`number`|N/A|3000
|`scrollTopOffset`|Specify an offset position for the scroll to top|`number`|N/A|0
|`FadeProps`|Pass props to the Fade component|`object`|[View Material-UI docs](https://material-ui.com/api/fade/#fade-api)|{}
|`FabProps`|Pass props to the Fab component|`object`|[View Material-UI docs](https://material-ui.com/api/fab/#fab-api)|{}
