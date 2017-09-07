import React from 'react';
import Span from '../common/Span';
import Accordion from '../common/Accordion';
import iconArrowRight from '../../images/icon_arrow_right.png';
import hotels from '../../data/hotels';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.hotelData = hotels;
  }
  render () {
   return (
     <div>
       <h2>Top Destinations</h2>
       {this.hotelData.map(hotel => <Accordion location={hotel.location} hotelList={hotel.hotelList} hotelCount={hotel.hotelCount} />)}
       <a className = "seeAllHotels" href="#">
         <Span color="blueBright" fontSize="base" fontWeight="bold" marginRight="tiny">see all of our destination offers</Span>
         <img src={iconArrowRight} alt="IconArrowRight"/>
       </a>
       <br/>
     </div>
   );
  }
}

export default HomePage;
