"use client";

export default function MainFooter() {
    return (
        <footer className="relative w-full flex flex-col items-center justify-center bg-neutral-900/50 text-white overflow-hidden border-t border-white/10 p-6">
            <p className="text-sm text-center text-white/50">
                &copy; {new Date().getFullYear()} darragh.website. All rights reserved.
            </p>
            <p className="text-sm text-center text-white/50">
                Made with &#10084;.
            </p>
            <a
                href="https://github.com/darraghd493/personal-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/30 hover:text-white/50 transition"
            >
                View Source
            </a>
        </footer>
    );
}
