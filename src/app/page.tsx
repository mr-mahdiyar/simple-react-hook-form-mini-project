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
    console.log(data)
  }
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form className="flex flex-col max-w-96 gap-y-8 border rounded-md p-16" onSubmit={handleSubmit(submitForm)}>
        <input type="text" placeholder="user name" className="border rounded-md p-2 outline-none" {...register("username")}/>
        <input type="text" placeholder="password" className="border rounded-md p-2 outline-none" {...register("password")}/>
        <button type="submit" className="p-2 border rounded-md hover:bg-slate-100">
          submit
        </button>
      </form>
    </div>
  );
}
