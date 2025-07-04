import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="username"
          required
          error={["user name is too short"]}
        />
        <FormInput type="email" placeholder="email" required error={[]} />
        <FormInput type="password" placeholder="password" required error={[]} />
        <FormInput
          type="password"
          placeholder="confirm password"
          required
          error={[]}
        />
        <FormButton loading={false} text="create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
