import React, { useContext } from 'react';
import { StoreContext } from '../../store';
import errImg from '../../error.png';

export const Notify = () => {
  const [globalState] = useContext(StoreContext);
  const { isActive, message, isError } = globalState;

  if (!isActive) return null;

  const title = isError ? 'Error' : 'Success';
  // const icon = isError ? require('./error.jpg') : 'https://source.unsplash.com/AndE50aaHn4';
  // https://source.unsplash.com/bmJAXAz6ads
  
  return (
    <div className="modal">
      <div className="modal-content">
        <img 
        className="notify-image" src={title === 'Error' ? 'https://source.unsplash.com/bmJAXAz6ads' : 'https://source.unsplash.com/AndE50aaHn4'} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
