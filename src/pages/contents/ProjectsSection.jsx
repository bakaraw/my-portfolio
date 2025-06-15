import { useEffect, useState } from "react";
import QuizWebsiteThumb from "../../assets/thumbnails/QuizWebsite1.png";
import FacialRecognitionThumb from "../../assets/thumbnails/IOT.png";
import OnlyJobsWebThumb from "../../assets/thumbnails/OnlyJobsWeb.png";
import ExpensesTrackerThumb from "../../assets/thumbnails/ExpensesTracker.png";
import TetrisThumb from "../../assets/thumbnails/tetris.png";
import SlotsThumb from "../../assets/thumbnails/slots.png";
import HorizontalMotionThumb from "../../assets/thumbnails/horizontal_motion.png";
import ProductivityTimerThumb from "../../assets/thumbnails/productivity_timer.png";
import OnlyJobsThumb from "../../assets/thumbnails/OnlyJobs.png";
import DodgeCubeThumb from "../../assets/thumbnails/dodge_cube.png";
import NoImageThumb from "../../assets/thumbnails/no_image.png";
import PosThumb from "../../assets/thumbnails/pos.png";

export default function ProjectsSection() {
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const thumbnails = {
    "QuizWebsite": QuizWebsiteThumb,
    "FaceRecognitionIoT": FacialRecognitionThumb,
    "OnlyJobsWeb": OnlyJobsWebThumb,
    "ExpensesTracker": ExpensesTrackerThumb,
    "tetris": TetrisThumb,
    "simple_slots": SlotsThumb,
    "horizontal_motion_sim": HorizontalMotionThumb,
    "productivity-timer-extension": ProductivityTimerThumb,
    "OnlyJobs": OnlyJobsThumb,
    "Dodge-Cube": DodgeCubeThumb,
    "POS-system-for-computer-parts-shop": PosThumb,
  };

  const exclude = ["bakaraw", "fcb_portfolio", "pokedex", "ml_notes"];
  useEffect(() => {
    fetch("https://api.github.com/users/bakaraw/repos")
      .then((res) => res.json())
      .then(async (data) => {
        const filtered = data
          .filter((repo) => !exclude.includes(repo.name))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        setRepos(filtered);

        // Fetch languages for each repo in parallel
        const languageData = await Promise.all(
          filtered.map((repo) =>
            fetch(repo.languages_url)
              .then((res) => res.json())
              .then((langs) => ({ [repo.name]: Object.keys(langs) }))
          )
        );

        // Combine into one object
        const langMap = Object.assign({}, ...languageData);
        setLanguages(langMap);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  return (
    <section id="Projects" className="w-full bg-dark-400 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={repo.id}
            className="bg-dark-300 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={thumbnails[repo.name] || NoImageThumb}
              alt={`${repo.name} thumbnail`}
              className="w-full h-40 object-cover bg-gray-800"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {repo.name.replace(/-/g, " ")}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {repo.description || "No description provided."}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {languages[repo.name]?.map((lang) => (
                  <span
                    key={lang}
                    className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-sm hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
