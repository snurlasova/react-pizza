import React, { MouseEventHandler, ReactNode } from 'react'
import Modal from './Modal';
import './modal.scss'

import {  CloseSign, Header, Message } from './ModalPopup.styled'

export interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
  message?: string;
  content?: ReactNode;
}

interface ComponentsProps {
  ContainerComponent: React.ComponentType<{}>;
  CloseButtonComponent: React.ComponentType<{
    onClick?: MouseEventHandler<any>;
  }>;
}

type Props = BaseModalWrapperProps & ComponentsProps;

const BaseModalWrapper: React.FC<any> = ({content, ContainerComponent, CloseButtonComponent, isModalVisible, onBackdropClick, header, message}) => {
  
  if(!isModalVisible) {
    return null
  }

    return (<Modal onBackdropClick={onBackdropClick}>
      
      <div className="modal">
      <div className="modal__container">
        <h1 className="modal__title">Оформление заказа</h1>
      <form>
      <div className="modal__row">
          <div className="modal__col--4">
          <h3 className="modal__subtitle">Платежный адрес</h3>
                 
          
          </div>

        </div>

      </form>

        
      </div>

      </div>
  
    </Modal>);
}

export default BaseModalWrapper