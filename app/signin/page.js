import SigninForm from "./SigninForm";

export default async function SigninPage({ searchParams }) {
  // In Next.js 15, searchParams is a Promise
  const params = await searchParams;
  const referralCode = params.ref || null;
  const initialEmail = params.email || "";
  const initialStep = params.step === "password" ? "password" : "email";

  return (
    <SigninForm 
      referralCode={referralCode} 
      initialEmail={initialEmail}
      initialStep={initialStep}
    />
  );
}
