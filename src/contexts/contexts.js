import { createContext } from "react";

// export const Autorization = createContext(false);
// export const Language = createContext('es-ES');
const ProyectoContext = createContext({
    login: false
})

export default ProyectoContext;