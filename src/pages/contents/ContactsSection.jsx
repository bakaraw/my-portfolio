import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="Contacts" className="w-full mt-56 bg-dark-300 py-16 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-white/90 mb-8">
          Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=bacalso.ton2x@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://github.com/bakaraw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          {
            //<a
            //  href="https://linkedin.com/in/your-link"
            //  target="_blank"
            //  rel="noopener noreferrer"
            //  className="hover:text-black transition"
            //  aria-label="LinkedIn"
            //>
            //  <Linkedin size={28} />
            //</a>
          }
        </div>

        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Laighton Thaxter Bacalso. All rights reserved.
        </p>
      </div>
    </section>
  );
}

