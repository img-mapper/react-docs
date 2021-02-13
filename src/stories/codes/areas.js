import common, { clearButtonTemplate } from './common';

export const showHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      active={props.active} // dynamic active
   />
  )`);

export const staySelectedHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      stayHighlighted={props.stayHighlighted} // dynamic stayHighlighted
   />
  )`);

export const stayMultipleSelectedHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      stayMultiHighlighted={props.stayMultiHighlighted} // dynamic stayHighlighted
   />
  )`);

export const clearSelectedHighlightedArea = clearButtonTemplate;

export const toggleStayHighlightedArea = common(`(
    <ImageMapper 
      src={URL} 
      map={MAP}
      stayHighlighted={props.stayHighlighted} // dynamic stayHighlighted
      stayMultiHighlighted={props.stayMultiHighlighted} // dynamic stayMultiHighlighted
      toggleHighlighted={props.toggleHighlighted} // dynamic toggleHighlighted
   />
  )`);
