import { FC } from 'react';
import { Error } from "../../App.models";
import { Typography } from 'antd';


export const Error404Component: FC<{error: Error}> = ({error}) => {
  return (
    <>
    <Typography>
      {error.status}
    </Typography>
    <Typography>
      {error.message}
    </Typography>
    </>
  );
};