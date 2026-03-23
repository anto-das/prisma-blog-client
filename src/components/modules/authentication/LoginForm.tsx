"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { useForm } from "@tanstack/react-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

import * as z from "zod";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Minimum length is 8.."),
});

const LoginForm = ({ ...props }) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Logged in User");
      try {
        const { data, error } = await authClient.signIn.email(value);
        console.log("login data",data)
        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }
        toast.success("user logged in successfully.", { id: toastId });
      } catch (error) {
        toast.error("something went wrong please try again.", { id: toastId });
      }
    },
  });
  const handleLoginWithGoogle = async () => {
    const res = authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });
  };
  return (
    <section className={cn("h-screen bg-muted")}>
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <h1 className="text-3xl font-bold text-blue-500">Next Blog</h1>
          <div className="flex w-full max-w-sm min-w-sm flex-col items-start gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
            <h1 className="text-xl font-semibold text-center">
              Create an account
            </h1>
            <form
              onSubmit={(e) => {
                (e.preventDefault(), form.handleSubmit());
              }}
              className="space-y-5 w-full"
            >
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        placeholder={field.name}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => {
                          field.handleChange(e.target.value);
                        }}
                        placeholder={field.name}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              {/* <div className="w-full">
                <h1 className="text-3xl font-bold text-green-500">Name</h1>
              </div> */}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
              <Button
                type="submit"
                onClick={handleLoginWithGoogle}
                className="w-full"
              >
                Continue with google
              </Button>
          </div>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p></p>
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LoginForm };
