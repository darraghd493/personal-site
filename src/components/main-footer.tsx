"use client";

export default function MainFooter() {
    return (
        <footer className="relative w-full flex flex-col items-center justify-center bg-[#0c1620] text-white overflow-hidden border-t border-white/10 p-6">
            <p className="text-sm text-center text-slate-200/70">
                &copy; {new Date().getFullYear()} darragh.website. All rights reserved.
            </p>
            <a
                href="https://github.com/darraghd493/personal-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8bd2e0] hover:text-[#61b3c5] transition"
            >
                View Source
            </a>
        </footer>
    );
}
