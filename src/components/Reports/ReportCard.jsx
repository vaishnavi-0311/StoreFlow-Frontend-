"use client";

export default function ReportCard({
    title,
    value,
    subtitle,
    icon,
    gradient,
}) {
    return (
        <div
            className={`
        ${gradient}
        rounded-3xl
        p-6
        text-white
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      `}
        >
            <div className="flex justify-between items-center">

                <div>

                    <p className="text-sm opacity-90">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold mt-3">
                        {value}
                    </h2>

                    <p className="mt-3 text-sm opacity-90">
                        {subtitle}
                    </p>

                </div>

                <div className="bg-white/20 rounded-2xl p-4">
                    {icon}
                </div>

            </div>
        </div>
    );
}