import SignInForm from "../../components/SignInForm"
import SignUpForm from "../../components/SignUpForm"

const Authentication = () => {
  return (
    <div className="mx-auto w-[900px] flex justify-center items-center h-[35rem]">
      <div className="flex justify-between w-full">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
