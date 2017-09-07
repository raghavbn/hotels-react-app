import PropTypes from 'prop-types';
import styled from 'styled-components';
import {colors,fontSize, spacing} from '../../../utilities/Utilities';

const colorMap = color => ({
  colorValue: colors[color] || colors.grayDarkest
});

const fontMap = fontVal => ({
  fontValue: fontSize[fontVal] || fontSize.h1
});

const spacingMap = spaceVal => ({
  spaceValue: spacing[spaceVal] || '0px'
});

const Span = styled.span`
  color: ${props => colorMap(props.color).colorValue};
  font-size: ${props => fontMap(props.fontSize).fontValue};
  margin-left: ${props =>spacingMap(props.marginLeft).spaceValue};
  margin-bottom: ${props =>spacingMap(props.marginBottom).spaceValue};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
  margin-right: ${props =>spacingMap(props.marginRight).spaceValue};
  float: ${props => props.floatRight ? 'right' : (props.floatLeft ?'left':'none')};
`;

Span.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  floatRight: PropTypes.string,
  floatLeft: PropTypes.string,
  marginBottom: PropTypes.string
};

export default Span;
