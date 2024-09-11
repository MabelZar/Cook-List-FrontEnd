import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LOG_IN_URL } from "../../../config/urls";
import { apiPublicRequest } from "../../../services/apiPublicRequest";
import Card from "../../card/Card";
import CommonInput from "../../inputs/CommonInput";
import AcceptButton from "../../buttons/AcceptButton"
import { AuthContext } from "../../../auth/AuthWrapper"; 
import { useContext } from "react";


const  LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitLogin = async (data) => {
        const { email, password } = data;
        const userData = { email, password };
            
        try {

            const response = await apiPublicRequest(LOG_IN_URL, "POST", userData);
    
            const { token } = response;
            console.log("API Response:", response);
    
            if (token) {
                const cleanedToken = token.startsWith('Bearer ') ? token.slice(7) : token;
                login(email, cleanedToken);
                
                navigate('/program'); 
            } else {
                alert("Login failed: No token received.");
            }

        } catch (error) {
            console.error("API Error:", error);
            alert(`Login failed: ${error.message}`);
        }
    };
    

    return (
        <Card   className="w-[23.125rem] h-[22.375rem] my-[5rem] border-[color:var(--col-yellow-light)] border-4 border-solid flex flex-col items-center justify-center" 
                headerText="Acceso de usuario">

            <form className="w-[23.125rem] mb-[2.063rem]" onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="mb-1 flex flex-col gap-6 items-center">
                    
                    <CommonInput
                        label="E-Mail"
                        id="login_email"
                        type="email"
                        placeholder="Escribe tu e-mail..."
                        error={errors.email?.message}
                        {...register("email", {
                            required: "Debes escribir un e-mail",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Correo electrónico no válido"
                            }
                        })}
                    />
                    
                    <CommonInput
                        label="Contraseña"
                        id="login_password"
                        type="password"
                        placeholder="Escribe tu contraseña..."
                        error={errors.password?.message}
                        {...register("password", {
                            required: "Debes escribir una contraseña",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                            }
                        })}
                    />
                    
                    <AcceptButton />
                </div>
            </form>
        </Card>
    );
}

export default LogInForm