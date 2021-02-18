import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { Button, Wrapper } from '../../globalComponents/globalComponents';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useAppSliceSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppSlice } from './slice/selectors';

export function HomePage() {
  const [tr, setTr] = useState<string>('zoom');
  const [inp, setInp] = useState<string>('');
  const dispatch = useDispatch();
  const { actions } = useAppSliceSlice();
  const name = useSelector(selectAppSlice);
  const handleRadioChange = e => {
    e.preventDefault();
    setTr(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Transition - Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <Typography variant="h4" style={{ color: '#f8f1f1' }}>
          Transitions
        </Typography>
        <Button>
          <Link
            to={{
              pathname: `/slide1/${tr}`,
            }}
            style={{
              textDecoration: 'none',
              color: '#11698e',
              fontWeight: 'bold',
            }}
          >
            Go to Slide 1
          </Link>
        </Button>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              onChange={handleRadioChange}
              value={tr}
            >
              <FormControlLabel
                value="zoom"
                control={<Radio />}
                label="Zoom"
                style={{ color: '#f8f1f1' }}
              />
              <FormControlLabel
                value="slide"
                control={<Radio />}
                label="Slide"
                style={{ color: '#f8f1f1' }}
              />
              <FormControlLabel
                value="grow"
                control={<Radio />}
                label="Grow"
                style={{ color: '#f8f1f1' }}
              />
              <FormControlLabel
                value="fade"
                control={<Radio />}
                label="Fade"
                style={{ color: '#f8f1f1' }}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Typography variant="h5">{name.name}</Typography>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <TextField
            variant="standard"
            placeholder="Text"
            onChange={e => setInp(e.target.value)}
          />
          <Button onClick={() => dispatch(actions.setName(inp))}>
            Set name
          </Button>
        </div>
      </Wrapper>
    </>
  );
}
