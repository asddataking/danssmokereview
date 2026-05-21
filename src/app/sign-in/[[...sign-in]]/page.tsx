import { SignIn } from "@clerk/nextjs";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sign In",
  path: "/sign-in",
  noIndex: true,
});

export default function SignInPage() {
  return (
    <div className="flex justify-center px-4 py-16">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/admin/scoreboard"
      />
    </div>
  );
}
