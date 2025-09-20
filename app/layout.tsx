import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //this Url not necessary if you are given them enviorment variable
    <ClerkProvider
      signUpUrl="/sign-up"
      signInUrl="/sign-in"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      afterSignOutUrl="/sign-in"
      localization={{
        signUp: {
          start: {
            title: "Join Our Platform",
            subtitle: "Create your account to get started",
            actionText: "you already have an account",
          },
        },
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
