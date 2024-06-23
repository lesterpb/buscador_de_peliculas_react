import PropTypes from "prop-types";
import React, { useRef } from 'react';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }

  OutsideAlerter.propTypes = {
    children: PropTypes.node.isRequired
  };

  export default OutsideAlerter;
