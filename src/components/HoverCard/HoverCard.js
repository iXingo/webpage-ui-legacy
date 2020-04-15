import React from 'react';
import ReactHover from 'react-hover';


const HoverCard = () => {
  return (
      <ReactHover
          options={optionsCursorTrueWithMargin}>
        <ReactHover.Trigger type='trigger'>
          {/*<TriggerComponent />*/}
        </ReactHover.Trigger>
        <ReactHover.Hover type='hover'>
          {/*<HoverComponent />*/}
        </ReactHover.Hover>
      </ReactHover>
  );
}


export default HoverCard;