"use client";
interface FormValues {
  username: string;
  password: string;
}
import { useForm } from "react-hook-form";
export default function Home() {
  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;

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
        <input
          type="password"
          placeholder="password"
          className="border rounded-md p-2 outline-none"
          {...register("password", {
            required: "password is required.",
            min: {value: 6, message: "password should be atleast 6 charachters."}
          })}
        />
        <button type="submit" className="p-2 border rounded-md hover:bg-slate-100">
          submit
        </button>
      </form>
    </div>
  );
}
