import React from 'react';
import ReactHover from 'react-hover';
import UserCard from "../UserCard";


const HoverCard = () => {
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
  }
  return (
    <ReactHover
      options={optionsCursorTrueWithMargin}>
      {/*<ReactHover.Trigger type='trigger'>*/}
      {/*  /!*<TriggerComponent />*!/*/}
      {/*</ReactHover.Trigger>*/}
      <ReactHover.Hover type='hover'>
        <UserCard/>
      </ReactHover.Hover>
    </ReactHover>
  );
}


export default HoverCard;