function App() {
  return (
    <div className="h-screen p-4 Parent">
      {/* shadow-md shadow-lg, shadow-none ... 
      shadow-inner - shadow inside the box
      to add opacity to color - shadow-cyan-500/50(50 is the opacity)
      */}
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md shadow-cyan-500">
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my Div</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-cyan-500 shadow-md shadow-cyan-500/50 text-white">
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default App;
