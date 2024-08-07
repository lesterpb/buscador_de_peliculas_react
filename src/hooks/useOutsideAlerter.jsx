import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

//TODO: eliminar el uso de PropTypes y comenzar a utilizar Typescript para la validacion de tipos
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref,action) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        // console.log(ref.current.childNodes);
        action();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref,action]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,props.action);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.node.isRequired
};

export default OutsideAlerter;
