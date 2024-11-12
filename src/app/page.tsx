"use client";
import { useForm } from "react-hook-form";
export default function Home() {
  const form = useForm();
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <form className="flex flex-col max-w-96 gap-y-8 border rounded-md p-16">
        <input type="text" placeholder="user name" className="border rounded-md p-2 outline-none" />
        <input type="text" placeholder="password" className="border rounded-md p-2 outline-none" />
        <button type="submit" className="p-2 border rounded-md hover:bg-slate-100">
          submit
        </button>
      </form>
    </div>
  );
}
