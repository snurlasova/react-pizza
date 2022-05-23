import React, { MouseEventHandler } from 'react'
import ReactDOM from 'react-dom';



interface ModalProps {
  onBackdropClick: () => void;
}



const stopPropagation: MouseEventHandler<HTMLDivElement> = e => {
  e.persist();
  e.stopPropagation();
};



const Modal: React.FC<ModalProps> = ({onBackdropClick, children}) => {
    return ReactDOM.createPortal(
      <button onClick={onBackdropClick}>
        <div onClick={stopPropagation}>{children}</div>
      </button>,
      document.getElementById('modal-root')!
    );
}

export default Modal