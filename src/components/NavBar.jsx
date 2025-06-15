import { useEffect, useState } from "react";
import { Home, BadgeCheck, Folder, Mail } from "lucide-react";

export default function NavBar() {
  const [active, setActive] = useState("Home");

  const items = [
    { label: "Home", icon: Home },
    { label: "Skills", icon: BadgeCheck },
    { label: "Projects", icon: Folder },
    { label: "Contacts", icon: Mail },
  ];

  useEffect(() => {
    const sectionIds = items.map((item) => item.label);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          root: null,
          threshold: 0.3, // adjust based on when you want it to trigger
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent pt-4 pb-1 flex justify-center">
      <div className="w-fit flex items-center justify-center px-6 py-2 rounded-xl bg-[#1a1a1a] text-white shadow-lg">
        {items.map(({ label, icon: Icon }) => (
          <NavItem
            key={label}
            label={label}
            Icon={Icon}
            isActive={active === label}
            onClick={() => setActive(label)}
          />
        ))}
      </div>
    </nav>
  );
}

function NavItem({ label, Icon, isActive, onClick }) {
  return (
    <a
      href={`#${label}`}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 mx-2 rounded-md font-medium transition-all duration-200 ${isActive ? "bg-green-500 text-white" : "hover:bg-gray-700 text-gray-300"
        }`}
    >
      <Icon size={18} />
    </a>
  );
}

