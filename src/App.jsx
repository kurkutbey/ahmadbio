function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-2xl w-[400px] shadow-xl">

        <h1 className="text-2xl text-white font-bold mb-6 text-center">
          فرم اطلاعات شخصی
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="نام"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="نام خانوادگی"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="نام پدر"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="سن"
            className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-white font-bold"
          >
      ورود
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;