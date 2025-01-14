function Header() {
  return (
    <div className="m-10 rounded-lg border border-neutral-700 bg-neutral-900 bg-opacity-75 p-4">
      <h1 className="py-3 text-center text-6xl text-zinc-100">
        FIND YOUR STRONGHOLD
      </h1>
      <p className="text-center text-neutral-400 text-xl leading-4">
        you will need to throw two{" "}
        <a
          className="text-purple-500"
          href="https://minecraft.fandom.com/wiki/Eye_of_Ender"
        >
          EYES OF ENDER
        </a>
        . <br />
        when you throw the first one, make sure to get your location while
        looking at the eye of ender. <br />
        in another position throw the second one and also record the throw's
        location. <br />
        you can copy your location to the clipboard by pressing{" "}
        <a className="text-purple-500">F3 + C</a>.
      </p>
      <br />
    </div>
  );
}

export default Header;
