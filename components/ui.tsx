import Link from "next/link";
import { Bell, ChevronDown, Globe2, LogOut, Menu, Search, UserCircle } from "lucide-react";
import { languages, navItems } from "@/lib/data";

export function Button({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-on-primary shadow-sm hover:bg-[#003ea8]",
    secondary: "border border-outline-variant bg-white text-primary hover:bg-surface-container-low",
    ghost: "text-on-surface-variant hover:bg-surface-container-low",
    danger: "bg-error text-white hover:opacity-90",
  };

  return (
    <button className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98] ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-outline-variant bg-white p-6 shadow-sm ${className}`}>{children}</section>;
}

export function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "green" | "amber" | "red" }) {
  const styles = {
    blue: "bg-primary/10 text-primary",
    green: "bg-secondary/10 text-secondary",
    amber: "bg-amber-100 text-amber-800",
    red: "bg-error-container text-error",
  };

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${styles[tone]}`}>{children}</span>;
}

export function TopNav({ active = "Home" }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-outline-variant bg-surface/95 px-4 shadow-sm backdrop-blur md:px-10">
      <Link href="/" className="text-xl font-extrabold text-primary">
        JanSeva AI
      </Link>
      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className={`rounded px-2 py-1 text-sm font-semibold transition ${active === item.label ? "border-b-2 border-primary text-primary" : "text-on-surface-variant hover:bg-surface-container-low"}`}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full border border-outline-variant bg-white px-3 py-2 text-sm text-on-surface-variant sm:flex">
          <Globe2 size={18} className="text-primary" />
          <span>English</span>
          <ChevronDown size={16} />
        </div>
        <IconButton label="Notifications">
          <Bell size={20} />
        </IconButton>
        <IconButton label="Account">
          <UserCircle size={22} />
        </IconButton>
        <IconButton label="Menu" className="md:hidden">
          <Menu size={22} />
        </IconButton>
      </div>
    </header>
  );
}

export function AppShell({ children, active = "Dashboard" }: { children: React.ReactNode; active?: string }) {
  const items = ["Dashboard", "Scheme Listing", "AI Assistant", "Profile", "Settings"];
  const hrefs: Record<string, string> = {
    Dashboard: "/dashboard",
    "Scheme Listing": "/schemes/ayushman-bharat",
    "AI Assistant": "/dashboard",
    Profile: "/profile-setup",
    Settings: "/settings",
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-outline-variant bg-surface px-4 shadow-sm md:px-10">
        <Link href="/" className="text-xl font-extrabold text-primary">
          JanSeva AI
        </Link>
        <div className="hidden w-full max-w-md md:block">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input className="h-11 w-full rounded-full border-0 bg-surface-container pl-10 pr-4 text-sm" placeholder="Search schemes, benefits, or help..." />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <IconButton label="Language">
            <Globe2 size={20} />
          </IconButton>
          <IconButton label="Notifications">
            <Bell size={20} />
          </IconButton>
          <IconButton label="Account">
            <UserCircle size={22} />
          </IconButton>
        </div>
      </header>
      <aside className="fixed bottom-0 left-0 z-40 flex h-16 w-full justify-around border-t border-outline-variant bg-surface shadow-lg lg:bottom-auto lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-64 lg:flex-col lg:justify-start lg:border-r lg:border-t-0 lg:p-4">
        <div className="hidden px-4 py-5 lg:block">
          <p className="text-sm font-semibold text-on-surface">Welcome, Citizen</p>
          <p className="text-xs text-on-surface-variant">Verify your Aadhaar</p>
        </div>
        <nav className="flex w-full justify-around lg:flex-col lg:gap-1">
          {items.map((item) => (
            <Link key={item} href={hrefs[item]} className={`flex flex-col items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition lg:flex-row lg:justify-start lg:gap-3 lg:text-sm ${active === item ? "bg-primary-container text-on-primary" : "text-on-surface-variant hover:bg-surface-container-low"}`}>
              <span>{item.split(" ")[0]}</span>
            </Link>
          ))}
        </nav>
        <Link href="/login" className="mt-auto hidden items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-error hover:bg-error-container lg:flex">
          <LogOut size={18} /> Logout
        </Link>
      </aside>
      <main className="p-4 md:p-10 lg:ml-64">{children}</main>
    </div>
  );
}

export function LanguagePills() {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((language) => (
        <span key={language} className="rounded-full border border-outline-variant bg-white px-3 py-1 text-xs font-semibold text-on-surface-variant">
          {language}
        </span>
      ))}
    </div>
  );
}

function IconButton({ children, label, className = "" }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <button aria-label={label} title={label} className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container-low ${className}`}>
      {children}
    </button>
  );
}
