import { redirect } from "next/navigation";
import { getAdmin } from "@/lib/admin";
import AdminPortal from "@/components/admin-portal";

export default async function AdminPage() {
  const admin = await getAdmin();
  if (!admin) redirect("/login");
  return <AdminPortal admin={{ name: admin.name, contact: admin.contact }} />;
}
