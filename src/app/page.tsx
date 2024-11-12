"use client";
interface FormValues {
  username: string;
  password: string;
  social: {
    linkedin: string;
    github: string;
  }
}
import { useForm } from "react-hook-form";
export default function Home() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      password: "",
      social: {
        linkedin: "",
        github: ""
      }
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  function submitForm(data: FormValues) {
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form className="flex flex-col max-w-96 gap-y-8 border rounded-md p-16" onSubmit={handleSubmit(submitForm)} noValidate>
        <input
          type="text"
          placeholder="user name"
          className="border rounded-md p-2 outline-none"
          {...register("username", {
            required: "username is required.",
          })}
        />
        <p className="-translate-y-6 text-red-600">{errors.username?.message}</p>
        <input
          type="password"
          placeholder="password"
          className="border rounded-md p-2 outline-none"
          {...register("password", {
            required: "password is required.",
          })}
        />
        <p className="-translate-y-6 text-red-600">{errors.password?.message}</p>
        <input
          type="text"
          placeholder="linkedin address"
          className="border rounded-md p-2 outline-none"
          {...register("social.linkedin")}
        />
        <input
          type="text"
          placeholder="github address"
          className="border rounded-md p-2 outline-none"
          {...register("social.github")}
        />
        <button type="submit" className="p-2 border rounded-md hover:bg-slate-100">
          submit
        </button>
      </form>
    </div>
  );
}
