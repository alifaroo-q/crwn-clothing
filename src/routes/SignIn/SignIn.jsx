import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/signUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button className="p-5 bg-blue-600 border-2" onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
