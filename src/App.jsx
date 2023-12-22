function App() {
  return (
    <div className="h-screen p-4 Parent">
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md shadow-cyan-500">
        <img
          src="https://images.unsplash.com/photo-1703028408833-ff4033ce37ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-64 h-32 mb-4 skew-y-6"
        />
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my Div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 text-white opacity-40">
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default App;
