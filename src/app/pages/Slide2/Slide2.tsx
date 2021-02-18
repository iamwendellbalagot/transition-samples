import { Fade, Grow, Slide, Typography, Zoom } from '@material-ui/core';
import { Button, Wrapper } from 'app/globalComponents/globalComponents';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory, useParams } from 'react-router-dom';

interface ParamTypes {
  type: string;
}

const Slide2: React.FC = () => {
  const history = useHistory();
  let { type } = useParams<ParamTypes>();
  return (
    <>
      <Helmet>
        <title>Transition - Slide2</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {type === 'zoom' && (
        <Zoom in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 2
            </Typography>
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Wrapper>
        </Zoom>
      )}
      {type === 'slide' && (
        <Slide in={true} direction="left">
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 2
            </Typography>
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Wrapper>
        </Slide>
      )}
      {type === 'grow' && (
        <Grow in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 2
            </Typography>
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Wrapper>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 2
            </Typography>
            <Button
              style={{ marginRight: '10px' }}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Wrapper>
        </Fade>
      )}
    </>
  );
};

export default Slide2;
