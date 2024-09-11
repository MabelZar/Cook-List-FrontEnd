import SignInForm from "../components/forms/signInForm/SignInForm"
import HeaderUser from "../components/header/HeaderUser";

const SignInPage = () => {
    return(
        <div className="w-full h-auto">
            <HeaderUser/>
            <main className="w-full h-auto flex justify-center items-center">
                <SignInForm />
            </main>
        </div>
    )
}

export default SignInPage;