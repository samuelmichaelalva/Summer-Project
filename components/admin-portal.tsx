"use client";

import { useEffect, useState } from "react";
import { Landmark, FileText, Pencil, Plus, Trash2, Users } from "lucide-react";
import { T, useLanguage } from "@/components/language-provider";
import { Badge, Button, Card } from "@/components/ui";
import { LogoutLink } from "@/components/logout-link";

type Scheme = {
  id: string;
  slug: string;
  category: string;
  state: string;
  ministry: string;
  translations: { title: string; benefit: string; amount: string; deadline: string }[];
};

type User = {
  id: string;
  name: string;
  contact: string;
  role: string;
  active: boolean;
  createdAt: string;
};

const blank = {
  id: "",
  slug: "",
  title: "",
  category: "Students",
  state: "All India",
  ministry: "",
  benefit: "",
  amount: "",
  deadline: "",
};

export default function AdminPortal({ admin: _admin }: { admin: { name: string; contact: string } }) {
  const { t } = useLanguage();
  const [data, setData] = useState<{
    users: User[];
    schemes: Scheme[];
    stats: { users: number; schemes: number; applications: number; statuses: { status: string; _count: { _all: number } }[] };
  }>();
  const [form, setForm] = useState(blank);

  const load = () =>
    fetch("/api/admin")
      .then((r) => r.json())
      .then(setData);

  useEffect(() => {
    load();
  }, []);

  const act = (action: string, id?: string) =>
    fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, id }),
    }).then(load);

  const save = (event: React.FormEvent) => {
    event.preventDefault();
    fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "saveScheme", ...form }),
    }).then(() => {
      setForm(blank);
      load();
    });
  };

  if (!data)
    return (
      <main className="min-h-screen p-10">
        <T id="loadingAdmin" />
      </main>
    );

  const stats = [
    { Icon: Users, labelKey: "totalUsers" as const, value: data.stats.users },
    { Icon: Landmark, labelKey: "totalSchemes" as const, value: data.stats.schemes },
    { Icon: FileText, labelKey: "totalApplications" as const, value: data.stats.applications },
  ];

  return (
    <main className="min-h-screen bg-background p-4 md:p-10">
      <header className="mx-auto mb-8 flex max-w-content items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            <T id="govtAdmin" />
          </p>
          <h1 className="text-3xl font-extrabold">
            JanSeva <T id="adminPortal" />
          </h1>
        </div>
        <LogoutLink />
      </header>

      <div className="mx-auto max-w-content space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(({ Icon, labelKey, value }) => (
            <Card key={labelKey}>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary-container p-3 text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">
                    <T id={labelKey} />
                  </p>
                  <p className="text-2xl font-extrabold">{value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="mb-4 text-xl font-bold">
            <T id="userManagement" />
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="p-3"><T id="fullName" /></th>
                  <th className="p-3"><T id="contactHeader" /></th>
                  <th className="p-3"><T id="roleHeader" /></th>
                  <th className="p-3"><T id="statusHeader" /></th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.users.map((user) => (
                  <tr key={user.id} className="border-b border-outline-variant">
                    <td className="p-3 font-semibold">{user.name}</td>
                    <td className="p-3">{user.contact}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                      <Badge tone={user.active ? "green" : "red"}>
                        <T id={user.active ? "activeStatus" : "inactiveStatus"} />
                      </Badge>
                    </td>
                    <td className="p-3 text-right">
                      {user.active && user.role !== "ADMIN" && (
                        <Button
                          variant="danger"
                          className="min-h-9 px-3 py-1 text-xs"
                          onClick={() => act("deactivateUser", user.id)}
                        >
                          <T id="deactivateBtn" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">
            <T id="schemeManagement" />
          </h2>
          <form onSubmit={save} className="grid gap-3 md:grid-cols-3">
            {(["title", "slug", "category", "state", "ministry", "benefit", "amount", "deadline"] as const).map((key) => (
              <input
                key={key}
                required={key !== "amount" && key !== "deadline"}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                placeholder={key === "title" ? t("schemeTitleHeader") : key[0].toUpperCase() + key.slice(1)}
                className="h-11 rounded-lg border border-outline-variant px-3 text-sm"
              />
            ))}
            <Button type="submit">
              <Plus size={16} />
              <T id={form.id ? "updateSchemeBtn" : "addSchemeBtn"} />
            </Button>
            {form.id && (
              <Button type="button" variant="secondary" onClick={() => setForm(blank)}>
                <T id="cancelBtn" />
              </Button>
            )}
          </form>
          <div className="mt-6 grid gap-3">
            {data.schemes.map((scheme) => {
              const translation = scheme.translations[0];
              return (
                <div key={scheme.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface-container-low p-4">
                  <div>
                    <p className="font-bold">{translation?.title || scheme.slug}</p>
                    <p className="text-xs text-on-surface-variant">
                      {scheme.category} · {scheme.state}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="min-h-9 px-3 py-1 text-xs"
                      onClick={() =>
                        setForm({
                          ...blank,
                          ...scheme,
                          title: translation?.title || "",
                          benefit: translation?.benefit || "",
                          amount: translation?.amount || "",
                          deadline: translation?.deadline || "",
                        })
                      }
                    >
                      <Pencil size={14} />
                      <T id="editBtn" />
                    </Button>
                    <Button
                      variant="danger"
                      className="min-h-9 px-3 py-1 text-xs"
                      onClick={() => act("deleteScheme", scheme.id)}
                    >
                      <Trash2 size={14} />
                      <T id="deleteBtn" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-xl font-bold">
            <T id="analyticsSettings" />
          </h2>
          <p className="text-sm text-on-surface-variant">
            {t("appStats")}{" "}
            {data.stats.statuses.map((s) => `${s.status.replace("_", " ")} (${s._count._all})`).join(" · ") || t("noApplicationsYet")}
          </p>
          <div className="mt-4">
            <LogoutLink />
          </div>
        </Card>
      </div>
    </main>
  );
}
