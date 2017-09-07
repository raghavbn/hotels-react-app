import AccordionButton from '../AccordionButton';
import React, {PropTypes}from 'react';
import Span from '../Span';
import Panel from '../Panel'
import iconArrow from '../../../images/icon_arrow.png';
import iconArrowOpen from '../../../images/icon_arrow_open.png';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  onToggleAccordion(){
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen }
    });
  }
  render () {
    return (
      <div>
        <AccordionButton onClick = {this.onToggleAccordion.bind(this)}>
          <div>
            <img className = "imageSpacing" src = {this.state.isOpen ? iconArrowOpen : iconArrow} alt = "IconArrow"/>
            <Span color="blueBright" fontSize="large" fontWeight="bold">{this.props.location}</Span>
          </div>
          <Span marginLeft = "medium" color="gray" fontSize="large" fontWeight="bold">over {this.props.hotelCount} hotels</Span>
        </AccordionButton>
       <Panel hotelCount = {this.props.hotelCount} hotelList = {this.props.hotelList} showPanel = {this.state.isOpen ? '' : 'hidden'}/>
      </div>
    );
  }
}

Accordion.propTypes = {
  location: PropTypes.string,
  hotelCount: PropTypes.string,
  hotelList: PropTypes.obj
}
export default Accordion;
