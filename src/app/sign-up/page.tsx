import { Suspense } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sign Up",
  path: "/sign-up",
  noIndex: true,
});

export default function SignUpPage() {
  return (
    <div className="flex justify-center px-4 py-16">
      <Suspense fallback={<p className="font-bold text-ink/60">Loading…</p>}>
        <AuthForm mode="sign-up" />
      </Suspense>
    </div>
  );
}
