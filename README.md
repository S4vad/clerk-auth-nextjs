## clerk nextjs

### add url for easy route handling or we can also use this as props of prebuild clerk components

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=


NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

```

Add this to prebuild clerk signup component if you are not created folder like this app/sign-up/[[...sign-up]]/page.tsx

```bash
path="/sign-up"
routing="path"
```

