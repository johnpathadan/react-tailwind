function App() {
  return (
    <div
      style={{
        width: "400px",
      }}
    >
      <h1 className="text-3xl italic ">Title 1</h1>
      <h2 className="text-2xl line-through">Title 2</h2>
      <h3 className="text-xl overline">Title 3</h3>
      <p className="text-base leading-loose underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4 capitalize">
        a regular paragraph
      </p>
      <p className="text-sm lowercase">A description paragraph</p>
      <p className="note text-xs uppercase whitespace-nowrap">A little note</p>
      <p className="truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
        voluptates fuga architecto, fugit numquam? Quam recusandae voluptatibus
        laudantium pariatur nobis corporis nam ipsam facere aliquid doloribus,
        omnis dolore sequi voluptas! Eos rem non error a, dicta neque iure
        maiores nostrum reiciendis deserunt ut illum suscipit optio veritatis
        quis! Aperiam assumenda optio, tenetur dolores cum placeat. Dolorem nemo
        ut omnis.
      </p>
    </div>
  );
}

export default App;
