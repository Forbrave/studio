
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/contact/_actions";
import { useToast } from "@/hooks/use-toast";


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }).max(500, "Message cannot exceed 500 characters."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: "default",
      });
      form.reset();
    } else if (state.status === "error" && state.message && !state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);


  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          {...form.register("name")}
          className="mt-1"
          aria-invalid={!!form.formState.errors.name || !!state.errors?.name}
          aria-describedby="name-error"
        />
        {form.formState.errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
        {state.errors?.name && (
           <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1"
          aria-invalid={!!form.formState.errors.email || !!state.errors?.email}
          aria-describedby="email-error"
        />
        {form.formState.errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
         {state.errors?.email && (
           <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={5}
          className="mt-1"
          aria-invalid={!!form.formState.errors.message || !!state.errors?.message}
          aria-describedby="message-error"
        />
        {form.formState.errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
        {state.errors?.message && (
           <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
