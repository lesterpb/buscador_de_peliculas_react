import { useEffect } from "react";

//TODO: eliminar el uso de PropTypes y comenzar a utilizar Typescript para la validacion de tipos
/**
 * Hook that alerts clicks outside of the passed ref
 */
  const useOutsideAlerter = (ref,action) => {
  useEffect(() => {
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

export default useOutsideAlerter;
