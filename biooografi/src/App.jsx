export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-slate-900 text-white rounded-2xl shadow-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-cyan-400">
          بیوگرافی من
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="نام"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="text"
            placeholder="نام خانوادگی"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="text"
            placeholder="نام پدر"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="number"
            placeholder="سن"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <input
            type="text"
            placeholder="شهر"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          />

          <textarea
            placeholder="درباره من..."
            rows="3"
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition"
          >
            ثبت اطلاعات
          </button>

        </form>
      </div>
    </div>
  );
}