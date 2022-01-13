import React from 'react';

import { StyledLoader, Wrapper } from './Loader.styles';

const Loader = ({ isFullScreen }) => {
  return (
    <Wrapper isFullScreen={isFullScreen}>
      <StyledLoader fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="150px" height="150px">
        <path
          className="line-middle-of-forehead"
          fill="none"
          stroke="#000000"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M27,19V4c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v15"
        />
        <path
          className="outline"
          fill="none"
          stroke="#000000"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M23,5c-5.308,0-9.768,3.811-10.782,8.832c-0.068,0.261-0.12,0.561-0.156,0.906C12.039,14.823,12.009,14.893,12,15c-0.075,0.896-0.285,2.009-0.54,3.126c-0.078,0.343-0.16,0.687-0.245,1.025c-0.01,0.041-0.021,0.082-0.031,0.123c-0.291,1.151-0.601,2.231-0.83,2.999c-0.416,1.041-0.87,2.134-1.323,3.223C7.049,30.254,4,36.175,4,39c-0.003,0.152,0.034,1.046,1.04,2.068c1.107,1.125,4.378,2.385,8.994,3.168C14.38,46.263,19.15,47,25,47c5.853,0,10.625-0.7,10.967-2.764c4.615-0.783,7.887-2.043,8.993-3.168C45.966,40.046,46.003,39.152,46,39c0-2.825-3.049-8.746-5.029-13.504c-0.453-1.089-0.907-2.182-1.323-3.222c-0.02-0.067-0.039-0.128-0.06-0.2c-0.003-0.01-0.006-0.022-0.009-0.032c-0.04-0.135-0.082-0.28-0.126-0.43c-0.014-0.047-0.028-0.096-0.042-0.145c-0.039-0.135-0.079-0.275-0.119-0.418c-0.011-0.039-0.022-0.077-0.033-0.117c-0.051-0.181-0.102-0.368-0.154-0.56c-0.011-0.042-0.023-0.085-0.034-0.127c-0.042-0.155-0.084-0.313-0.126-0.473c-0.015-0.057-0.03-0.113-0.044-0.17c-0.053-0.203-0.105-0.408-0.156-0.615c-0.003-0.013-0.006-0.026-0.009-0.039c-0.048-0.193-0.094-0.387-0.14-0.581c-0.014-0.06-0.028-0.119-0.041-0.179C38.292,17.05,38.076,15.913,38,15c-0.009-0.107-0.039-0.177-0.062-0.262c-0.036-0.345-0.089-0.646-0.156-0.906C36.768,8.811,32.308,5,27,5"
        />
        <path
          className="left-eye"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M23,28v-5c0,0-1.768-2-4.643-2C15.313,21,14,23.875,14,26s4,2,4,2"
        />
        <path
          className="eyebrows"
          fill="none"
          stroke="#000000"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M10.353,22.273C11.583,19.375,14.417,18,17,18l1,0.001c2.875,0,5,1,5,1h4c0,0,2.125-1,5-1L33,18c2.583,0,5.417,1.375,6.647,4.273"
        />
        <path
          className="chin"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M14 44c0 0 1.375-1.063 2-3M36 44c0 0-.531-.625-1-2"
        />
        <path
          className="right-eye"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M23 31h4v-2c0-1.105-.895-2-2-2h0c-1.105 0-2 .895-2 2V31zM32 28c0 0 4 .125 4-2s-1.313-5-4.357-5C28.768 21 27 23 27 23v5M36 26c0 2-2 8-2 8"
        />
        <path
          className="outline-of-mouth"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M14 26c0 2 2 8 2 8M18 28L23 28 23 31 18 38 25 38 32 38 27 31 27 28 32 28"
        />
      </StyledLoader>
    </Wrapper>
  );
};

export default Loader;
