import React from 'react';
import Jumbotron from './components/jumbotron';

const TestimonialsPreview = ({ entry }) => {

  const data = entry.getIn(['data']);
  const intro = data.getIn(['intro']);
  const main = data.getIn(['main']);

  return (
    <div className='bg-debut pb4'>
      <Jumbotron image={ data.getIn(['image']) } title={ data.getIn(['title']) } />

      <div className='section bg-debut header-shadow relative'>
        <div className='mw6 center'>
          <h1 className='f2 lh-title mb3'>{ intro.getIn(['heading']) }</h1>
          <p>{ intro.getIn(['text']) }</p>
        </div>
      </div>

      <div className='section bg-white'>
        <div className='mw6 center'>

          <h1 className='f2 lh-title mb3'>{ main.getIn(['heading']) }</h1>

          <p className='mb3'>{ main.getIn(['text']) }</p>

          {(main.getIn(['list']) || []).map((testimonial, i) => <div className='center mb3 ph3' key={i}>
            <blockquote className='bg-debut ba b--grey-1 pa3 mb3 br1 mw6 center box-shadow'>
              <p className='f4 mb2'>“{ testimonial.get('quote') }”</p>
              <cite className='f5 tr db'>{ testimonial.get('name') }</cite>
              <cite className='f6 tr db'>{ testimonial.get('position') }</cite>
              <cite className='f6 tr db'>{ testimonial.get('company') }</cite>
            </blockquote>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPreview;
