import { auth } from "src/app/auth";
import { getGuestbookEntries } from "src/app/db/queries";
import { redirect } from "next/navigation";
import Form from "./form-legacy";

export const metadata = {
  title: "Admin",
};

export default async function GuestbookPage() {
  let session = await auth();
  if (session?.user?.email !== "ark.luke2327@gmail.com") {
    redirect("/");
  }

  let entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
