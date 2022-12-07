import { Box, Grid, IconButton } from '@mineral/core';
import { Bullet } from '@mineral/icons';
import React, { ReactElement, ReactNode } from 'react';
interface CaraouselProps {
  children: ReactNode;
  total: number;
  width: string;
  height: string;
  autoscrolldelay: number;
  SetStatus: (Params: number) => void;
}

export const Caraousel: React.FC<CaraouselProps> = (props) => {
  const item: ReactElement[] = [];
  const [listindex, setListIndex] = React.useState(0);
  const autoscroll = () => {
    if (listindex < props.total - 1) {
      setListIndex(listindex + 1);
      props.SetStatus(listindex + 1);
    } else {
      setListIndex(0);
      props.SetStatus(0);
    }
  };
  const interval = setTimeout(autoscroll, props.autoscrolldelay);
  for (let i = 0; i < props.total; i++) {
    item.push(
      <Grid item key={i}>
        <IconButton
          sx={{ p: 0 }}
          onClick={(e) => {
            e.preventDefault();
            return [
              props.SetStatus(i),
              setListIndex(i),
              clearTimeout(interval),
            ];
          }}>
          <Bullet
            sx={{
              color:
                listindex === i && listindex <= props.total
                  ? 'white'
                  : '#8e99ab',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          />
        </IconButton>
      </Grid>
    );
  }
  return (
    <Box
      sx={{
        width: props.width,
        height: props.height,
      }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Grid item className="ScrollBox" sx={{ width: '100%' }}>
          {props.children}
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '-23px',
        }}>
        {item.map((e) => {
          return e;
        })}
      </Grid>
    </Box>
  );
};
