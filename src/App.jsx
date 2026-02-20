export default function App() {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl w-[350px] space-y-5">

        <h1 className="text-2xl font-bold text-center">فرم بیوگرافی</h1>

        <div className="space-y-3">
          <input className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="نام" />
          <input className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="نام خانوادگی" />
          <input className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="نام پدر" />
          <input className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="سن" />
          <textarea className="w-full p-3 rounded-lg bg-slate-700 outline-none focus:ring-2 focus:ring-indigo-500 h-24 resize-none" placeholder="توضیحات"></textarea>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-semibold">
        ورود
        </button>

      </div>
    </div>
  );
}