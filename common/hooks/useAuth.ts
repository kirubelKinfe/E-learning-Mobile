import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('authToken')) {
            navigate('/signIn')
        }
    }, [navigate]);
}