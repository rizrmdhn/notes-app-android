/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const threDotsVertical = ({props, width, height, fillColor}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fillColor}
    className="bi bi-three-dots-vertical"
    viewBox="0 0 16 16"
    {...props}>
    <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </Svg>
);

export default threDotsVertical;
