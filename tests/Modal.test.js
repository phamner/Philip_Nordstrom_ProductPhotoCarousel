
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import Modal from '../src/components/Modal.js';
import ModalColors from '../src/components/ModalColors.js';
import MainPicture from '../src/components/MainPicture.js';
import Carousel from '../src/components/Carousel.js';

//   ModalBackdrop,
//   ModalContent,
//   ModalDialog,
//   ModalWrap,
// } from './components';

describe('Modal component', () => {
  // const Child = () => <div>Yolo</div>;
  // let component;

  // // add a div with #modal-root id to the global body
  // const modalRoot = global.document.createElement('div');
  // modalRoot.setAttribute('id', 'modal-root');
  // const body = global.document.querySelector('body');
  // body.appendChild(modalRoot);

  // afterEach(() => {
  //   component.unmount();
  // });

  it('should render all the styled components and the children', () => {
    // component = mount(
    //   <Modal>
    //     <Child />
    //   </Modal>,
    // );
    const wrapper = shallow(<Modal />);
    expect(wrapper.containsMatchingElement(<Carousel/>)).toBe(true);

    // expect(component.find(ModalColors).exists()).toBeTruthy();
    // expect(component.find(ModalWrap).exists()).toBeTruthy();
    // expect(component.find(ModalWrap).contains(ModalDialog)).toBeTruthy();
    // expect(component.find(ModalDialog).contains(ModalContent)).toBeTruthy();
    // expect(component.find(ModalContent).contains(Child)).toBeTruthy();
  });
})