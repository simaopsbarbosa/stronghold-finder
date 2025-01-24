function Throw({ description, command, setCommand }: { description: string, command: string, setCommand: (value: string) => void }) {
  return (
    <div className="w-full rounded-lg border border-neutral-700 bg-purple-600 bg-opacity-15 p-4">
      <h1 className="pt-3 font-semibold text-center text-3xl text-zinc-100">{description}</h1>
      <p className="pb-3 text-center text-xl text-neutral-400">
        paste copied command below:
      </p>
      <p className="mb-3 text-center text-xl leading-4 text-neutral-400">
        <label>LOCATION:</label>
        <input
          className="outline-natural-700 m-1 rounded-lg bg-purple-800 bg-opacity-50 p-1 text-purple-100 placeholder-neutral-500 outline-none"
          placeholder="/execute in minecraft:overworld..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
      </p>
    </div>
  );
}

export default Throw;