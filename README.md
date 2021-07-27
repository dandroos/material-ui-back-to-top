# material-ui-back-to-top
An easy-to-use Material-UI/React component for returning the user to the top of the page

## Install
```bash
npm i material-ui-back-to-top
```

## Usage
```javascript
import React from "react"
import { BackToTop } from "material-ui-back-to-top"

export const Layout = () =>{
  return (
    <div>
			<BackToTop
				buttonPosition={{ bottom: 20, right: 20 }}
				color="secondary"
				size="large"
				showText
				text="Top"
				scrollPositionThreshold={200}
				scrollShowTime={750}
			/>
    </div>
      )
}

```

**NOTE:** This component requires Material-UI to work
