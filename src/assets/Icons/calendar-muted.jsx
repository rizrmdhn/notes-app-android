/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import { FONT_MUTED } from '../../utils/colors';

const calendarMuted = ({props, width, height}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857Z"
      fill={FONT_MUTED}
    />
    <Path
      d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill={FONT_MUTED}
    />
  </Svg>
);

export default calendarMuted;
