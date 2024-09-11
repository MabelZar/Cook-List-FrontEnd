import LogInForm from "../components/forms/logInForm/LogInForm"
import HeaderUser from "../components/header/HeaderUser";

function LoginPage(){
    return(
        <div className="w-full h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <LogInForm />
            </main>
        </div>
    )
}
export default LoginPage;