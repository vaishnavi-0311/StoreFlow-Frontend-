export default function StatsCard({
  title,
  value,
  icon,
}) {
  // #a5e1ef]
  return (
    <div className="bg-[#a3e4f3] rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">
            {title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {value}
          </p>
        </div>

        <div className="text-blue-600 text-3xl">
          {icon}
        </div>
      </div>
    </div>
  );
}