import { Fade, Grow, Slide, Typography, Zoom } from '@material-ui/core';
import { Button, Wrapper } from 'app/globalComponents/globalComponents';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useHistory, useParams } from 'react-router-dom';

interface Props {
  transition?: string;
}

interface ParamTypes {
  type: string;
}

const Slide1: React.FC<Props> = () => {
  const history = useHistory();
  let { type } = useParams<ParamTypes>();

  return (
    <>
      <Helmet>
        <title>Transition - Slide1</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      {type === 'zoom' && (
        <Zoom in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 1
            </Typography>
            <div style={{ display: 'flex' }}>
              <Button
                style={{ marginRight: '10px' }}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button>
                <Link
                  to={{
                    pathname: `/slide2/${type}`,
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '#11698e',
                    fontWeight: 'bold',
                  }}
                >
                  Go to Slide 2
                </Link>
              </Button>
            </div>
          </Wrapper>
        </Zoom>
      )}
      {type === 'slide' && (
        <Slide in={true} direction="left">
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 1
            </Typography>
            <div style={{ display: 'flex' }}>
              <Button
                style={{ marginRight: '10px' }}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button>
                <Link
                  to={{
                    pathname: `/slide2/${type}`,
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '#11698e',
                    fontWeight: 'bold',
                  }}
                >
                  Go to Slide 2
                </Link>
              </Button>
            </div>
          </Wrapper>
        </Slide>
      )}
      {type === 'grow' && (
        <Grow in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 1
            </Typography>
            <div style={{ display: 'flex' }}>
              <Button
                style={{ marginRight: '10px' }}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button>
                <Link
                  to={{
                    pathname: `/slide2/${type}`,
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '#11698e',
                    fontWeight: 'bold',
                  }}
                >
                  Go to Slide 2
                </Link>
              </Button>
            </div>
          </Wrapper>
        </Grow>
      )}

      {type === 'fade' && (
        <Fade in={true}>
          <Wrapper>
            <Typography variant="h4" style={{ color: '#f8f1f1' }}>
              This is Slide 1
            </Typography>
            <div style={{ display: 'flex' }}>
              <Button
                style={{ marginRight: '10px' }}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button>
                <Link
                  to={{
                    pathname: `/slide2/${type}`,
                  }}
                  style={{
                    textDecoration: 'none',
                    color: '#11698e',
                    fontWeight: 'bold',
                  }}
                >
                  Go to Slide 2
                </Link>
              </Button>
            </div>
          </Wrapper>
        </Fade>
      )}
    </>
  );
};

export default Slide1;
