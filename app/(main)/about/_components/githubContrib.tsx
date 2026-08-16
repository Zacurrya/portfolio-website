"use client"

import { GitHubCalendar } from "react-github-calendar";

const GithubContribution = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-10 group-hover:opacity-25 transition duration-1000 group-hover:duration-200" />
            <div className="relative glass-panel p-2 md:p-3 rounded-2xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3 tracking-tight drop-shadow-sm">
                    <span className="green-text-gradient">Activity</span>
                </h3>
                <div className="w-full max-w-full overflow-hidden">
                    <div className="w-full min-w-0 max-w-full">
                        <GitHubCalendar
                            username="Zacurrya"
                            blockSize={8}
                            blockMargin={1}
                            fontSize={10}
                            theme={{
                                dark: ["#1f2937", "#0e4429", "#006d32", "#26a641", "#39d353"],
                                light: ["#e5e7eb", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubContribution;
