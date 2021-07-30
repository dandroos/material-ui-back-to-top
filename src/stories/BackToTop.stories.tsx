import React from "react"
import { storiesOf } from "@storybook/react"

import { BackToTop } from "../components/BackToTop"

const stories = storiesOf("App Test", module)

stories.add("App", () => {
  return <BackToTop />
})
