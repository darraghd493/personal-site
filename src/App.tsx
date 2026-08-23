import CursorEffect from './CursorEffect';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-mono selection:bg-blue-600 selection:text-white p-6 md:p-12 lg:p-24">
      <CursorEffect />

      <main className="max-w-3xl mx-auto space-y-32">
        {/* Intro */}
        <section className="space-y-8 mt-12 md:mt-24">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Hello, I'm Darragh
          </h1>
          <p className="text-xl md:text-3xl font-medium leading-relaxed">
            A Computer Science student/enthusiast.
          </p>
        </section>

        {/* About Me */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-blue-600">
            About Me
          </h2>
          <div className="text-lg md:text-2xl leading-relaxed space-y-8">
            <p>
              I have had a long-lasting passion for technology and software development which I have been pursuing for several years, being deeply fascinated by what is possible with just code from a very young age.
            </p>
            <p>
              I enjoy solving complex problems, designing clean user interfaces, and generally exploring all aspects of software development.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-blue-600">
            Projects
          </h2>
          <p className="text-lg md:text-xl border-l-4 border-blue-600 pl-6 py-2 bg-neutral-900">
            I've worked on a variety of projects — here are some of my personal highlights.
          </p>

          <div className="flex flex-col space-y-16 mt-16">
            {[
              {
                name: "darragh.website",
                description: "This website."
              },
              {
                name: "ether.beer",
                description: "A Minecraft minigames client.",
                links: "https://ether.beer"
              }
            ].map((project, idx) => (
              <div key={idx} className="group border-b-2 border-neutral-900 pb-8 hover:border-blue-500 transition-colors">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-lg md:text-xl text-neutral-400 mb-8">{project.description}</p>
                <a href={project.links || "#"} className="inline-block border-2 border-neutral-700 px-8 py-3 uppercase font-bold text-sm tracking-widest hover:border-blue-500 hover:text-blue-400 transition-colors">
                  [ View ]
                </a>
              </div>
            ))}
          </div>

          <div className="text-lg md:text-xl">
            <i className="text-neutral-400">
              View more of my projects on my <a href="https://github.com/darraghd493" className="text-blue-600 hover:text-blue-500 transition-colors">GitHub</a>
            </i>
          </div>
        </section>

        {/* Contact Me */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-blue-600">
            Contact Me
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 pt-8">
            <a href="mailto:me@darragh.website" className="text-xl uppercase font-bold tracking-widest hover:text-blue-500 transition-colors">
              &gt; Email
            </a>
            <a href="https://github.com/darraghd493" className="text-xl uppercase font-bold tracking-widest hover:text-blue-500 transition-colors">
              &gt; GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-3xl mx-auto mt-32 pt-12 border-t-2 border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-sm text-neutral-600">© 2026 darragh.website. All rights reserved.</p>
        <a
          href="https://github.com/darraghd493/personal-site"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-600 hover:text-blue-500 uppercase tracking-widest transition-colors"
        >
          [ View Source ]
        </a>
      </footer>
    </div>
  )
}
