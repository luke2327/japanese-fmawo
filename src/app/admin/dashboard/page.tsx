"use client";

import Loading from "@/app/admin/loading";
import useUserInfo from "@/hooks/useUserInfo";
import { removeCookies } from "@/lib/api/auth";
import clsx from "clsx";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { workInfo, ...userInfo } = useUserInfo();

  function logout() {
    removeCookies();
    userInfo.deleteUserInfo();
    router.refresh();
    setLoading(true);
  }

  return loading ? (
    <Loading />
  ) : (
    <div className="gap-4 flex flex-col w-screen tracking-widest">
      <div className="flex justify-between items-center">
        <p className="text-2xl">{userInfo.id}さん</p>
        <p
          onClick={logout}
          className={clsx(
            "self-end tracking-tight flex items-center gap-1",
            "text-sm text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors cursor-pointer"
          )}>
          Logout
          <LogOutIcon size={12} />
        </p>
      </div>
      <div>
        <p className="border-b mb-1 text-xl">日本のことわざ</p>
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 p-2 dark:hover:bg-neutral-700 rounded-md transition-colors cursor-pointer">
            <Link href="/admin/work/proverb">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <p>作業の現況</p>
                  <div className="dark:bg-neutral-800 flex items-center gap-2 px-2 rounded-md">
                    {workInfo && (
                      <>
                        <p>{workInfo.compelete}</p>
                        <p>/</p>
                        <p>{workInfo.total}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {userInfo.role === "supervisor" && (
            <div className="col-span-12 sm:col-span-6 p-2 dark:hover:bg-neutral-700 rounded-md transition-colors cursor-pointer">
              <Link href="/admin/work/proverb/regist">下書き登録</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
