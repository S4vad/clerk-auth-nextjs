import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SignUp
        appearance={{
          elements: {
            // Main card container
            card: "bg-white shadow-2xl rounded-2xl border-0 w-full max-w-md mx-4",

            // Header styling
            headerTitle: "text-3xl font-bold text-gray-900 text-center mb-2",
            headerSubtitle: "text-gray-600 text-center mb-6",

            // Form container
            main: "px-8 py-6",

            // Input fields
            formFieldInput:
              "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white",
            formFieldLabel: "text-sm font-medium text-gray-700 mb-2 block",

            // Primary button (Continue/Sign up)
            formButtonPrimary:
              "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]",

            // Social buttons (Google, etc.)
            socialButtonsBlockButton:
              "w-full border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 mb-3 shadow-sm hover:shadow-md",
            socialButtonsBlockButtonText: "font-medium text-gray-700",

            // Divider
            dividerLine: "bg-gray-300",
            dividerText: "text-gray-500 bg-white px-4",

            // Footer (Sign in link)
            footerActionText: "text-gray-600",
            footerActionLink:
              "text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200",

            // Hide development mode text
            footer: "mt-6 text-center [&>div:last-child]:hidden", // here hiding developement mode

            // Form field errors
            formFieldErrorText: "text-red-500 text-sm mt-1",

            // Loading states
            spinner: "text-blue-600",

            // Links
            identityPreviewText: "text-gray-600",
            identityPreviewEditButton: "text-blue-600 hover:text-blue-700",

            // OTP/Verification code inputs
            formFieldInputShowPasswordButton:
              "text-gray-500 hover:text-gray-700",

            // Additional customizations
            formHeaderTitle: "text-2xl font-bold text-gray-900 mb-2",
            formHeaderSubtitle: "text-gray-600 mb-6",

            // Alert/notification styling
            alertText: "text-sm",

            // Step indicator (if multi-step)
            formResendCodeLink:
              "text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline",

            // Checkbox styling (terms and conditions)
            checkbox:
              "text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
            checkboxLabel: "text-sm text-gray-700 ml-2",
          },

          // You can also use layout customization
          layout: {
            // Customize the overall layout
            socialButtonsPlacement: "top", // or "bottom"
          },
        }}
      />
    </div>
  );
}
