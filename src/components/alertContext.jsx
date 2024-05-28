import React, { useState, useContext, createContext } from "react";

// create context

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [status, setStatus] = useState('');
    const [severity, setSeverity] = useState('success');
    const [alertOpen, setAlertOpen] = useState(false);

    return (
        <AlertContext.Provider value={{ alertOpen, setAlertOpen, status, setStatus, severity, setSeverity }}>
            {children}
        </AlertContext.Provider>
    );

};

// Custom hook to use the AlertContext
export const useAlert = () => {
    return useContext(AlertContext);
};