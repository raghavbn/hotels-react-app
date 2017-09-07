import React, {PropTypes} from 'react';
import Span from '../common/Span';
import IconStar from '../../images/star.png';
import IconArrowRight from '../../images/icon_arrow_right.png';

class Panel extends React.Component {
  constructor (props) {
    super(props);
  }
  ListComponent (item,index) {
    return <li key={index} className = "hotelGrid--lineElement">
      <Span color="blueBright" fontSize="base">{item.hotelName}</Span>
      <div className = "floatRight">
        <Span color="grayDark" marginRight = "tiny" fontSize="base">{item.stars} <img className = "paddingBottom" src={IconStar} alt="IconStar"/></Span>
        <Span color="grayDark" marginRight = "tiny" fontSize="base">From</Span>
        {item.discountedPrice ?
          <span>
            <strike>{item.originalPrice}</strike>
            <Span color="grayDark" marginLeft = "tiny" color="greenDark" fontSize="base" fontWeight="bold">{item.discountedPrice}</Span>
          </span>
            :
          <Span color="greenDark" fontSize="base" fontWeight="bold">{item.originalPrice}</Span>
        }
      </div>
    </li>
  }
  render () {
    return (
      <div className = {this.props.showPanel}>
        <ul className = "hotelGrid">
          {this.props.hotelList.map(this.ListComponent)}
        </ul>
        <a className = "seeEachHotel" href="#">
          <Span color="blueBright" fontSize="base" fontWeight="bold" marginRight="tiny">see all {this.props.hotelCount} hotels in London</Span>
          <img src={IconArrowRight} alt="IconArrowRight"/>
        </a>
      </div>
    );
  }
}

Panel.propTypes = {
  showPanel: PropTypes.string,
  hotelCount: PropTypes.string,
  hotelList: PropTypes.obj
}

export default Panel;
