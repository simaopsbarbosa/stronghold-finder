function Button({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-center items-center">
      <button
        className="m-10 border border-neutral-700 bg-neutral-900 bg-opacity-50 px-10 py-4 text-4xl"
        onClick={onClick}
      >
        FIND STRONGHOLD
      </button>
    </div>
  );
}

export default Button;