export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <h1 className="text-4xl font-afacad font-semibold text-slate-900">Let’s collaborate</h1>
        <p className="text-base text-slate-600">
          Share a bit about your project and how I can help. I’ll respond within two business days.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <form className="grid gap-4">
          <label className="grid gap-2 text-sm text-slate-700">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-700">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-700">
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your goals…"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            ></textarea>
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Send message
          </button>
        </form>

        <div className="border-t border-slate-200 pt-6 text-sm text-slate-600">
          <p>
            Prefer email? Reach me directly at{' '}
            <a href="mailto:hello@dianelabenz.com" className="font-semibold text-emerald-600 hover:underline">
              hello@dianelabenz.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
