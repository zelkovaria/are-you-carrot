import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon";
import Link from "next/link";

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
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
