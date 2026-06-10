export default function PlayerSection({
  title,
  prefix,
  required = true,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">

      <h3 className="text-2xl font-bold text-blue-400 mb-6">
        {title}
      </h3>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name={`${prefix}_real_name`}
          placeholder="Real Name"
          required={required}
          className="bg-zinc-800 p-3 rounded-lg"
        />

        <input
          type="text"
          name={`${prefix}_ign`}
          placeholder="IGN"
          required={required}
          className="bg-zinc-800 p-3 rounded-lg"
        />

        <input
          type="text"
          name={`${prefix}_mlbb_id`}
          placeholder="MLBB ID"
          required={required}
          className="bg-zinc-800 p-3 rounded-lg"
        />

        <input
          type="text"
          name={`${prefix}_server_id`}
          placeholder="Server ID"
          required={required}
          className="bg-zinc-800 p-3 rounded-lg"
        />

        <input
          type="file"
          name={`${prefix}_photo`}
          required={required}
          className="bg-zinc-800 p-3 rounded-lg"
        />

      </div>

    </div>
  );
}

