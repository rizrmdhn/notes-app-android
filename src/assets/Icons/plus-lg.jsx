/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const plusLg = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
      fill="#fff"
    />
  </Svg>
)

export default plusLg
