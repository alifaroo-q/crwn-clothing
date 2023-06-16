import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password, please try again");
          break;
        case "auth/user-not-found":
          alert("User not found for this email");
          break;
        default:
          alert("Signing in failed", error.message);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="flex flex-col w-[25em] gap-6">
      <div>
        <h2 className="text-2xl font-semibold">I already have an account</h2>
        <p className="mt-2">Sign in with your email and password</p>
      </div>
      <form onSubmit={handleSignIn}>
        <FormInput
          label="email"
          inputProps={{
            name: "email",
            type: "email",
            required: true,
            onChange: handleChange,
            value: email,
          }}
        />
        <FormInput
          label="password"
          inputProps={{
            name: "password",
            type: "password",
            required: true,
            onChange: handleChange,
            value: password,
          }}
        />
        <div className="flex justify-between">
          <Button type="submit" buttonType="default">
            Sign In
          </Button>
          <Button
            type="button"
            onClick={handleGoogleSignIn}
            buttonType="google"
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
