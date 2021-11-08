import { styled } from '@stitches/react';
import 'bulma/css/bulma.min.css';
import React from 'react';

const Container = styled('div', {
  backgroundColor: '$backgroundColor',
  height: '100vh'
});

const Button = styled('a', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray'
  }
});

const Bulma = ({ className }) => {
  return (
    <Container className={className}>
      <div className="buttons">
        <button className="button is-primary is-light">Primary</button>
        <button className="button is-link is-light">Link</button>
      </div>
      <div className="columns is-mobile">
        <div className="column">
          <Button className={'button'}>R32</Button>
        </div>
        <div className="column">
          <Button className={'box'}>R16</Button>
        </div>
        <div className="column">
          <Button as="div" className={'notification'}>
            QF
          </Button>
        </div>
        <div className="column">
          <Button className={'tag is-info'}>SF</Button>
        </div>
        <div className="column">
          <Button>F</Button>
        </div>
      </div>
      <Button className="input" as="input" type="text" placeholder="foo"></Button>
      <input className="input" type="text" placeholder="Text input" />
    </Container>
  );
};

export default React.memo(Bulma);
