function Header() {
  return (
    <div className="m-10 rounded-lg border border-neutral-700 bg-neutral-900 bg-opacity-75 p-4">
      <h1 className="pt-3 pb-6 text-center font-semibold text-5xl text-zinc-100">
        FIND YOUR STRONGHOLD
      </h1>
      <p className="text-center text-xl leading-5 text-neutral-400">
        you will need to throw two{" "}
        <a
          className="text-purple-500"
          href="https://minecraft.fandom.com/wiki/Eye_of_Ender"
        >
          EYES OF ENDER
        </a>
        . <br />
        when you throw the first one, get your location while looking directly
        at the eye of ender. <br />
        in another position throw the second one and also record the throw's
        location and rotation. <br />
        you can copy your location and rotation to the clipboard by pressing{" "}
        <a className="text-purple-500">F3 + C</a>.
      </p>
      <br />
    </div>
  );
}

export default Header;
