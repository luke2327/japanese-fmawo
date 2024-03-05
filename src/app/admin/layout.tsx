"use client";

import Loading from "@/app/admin/loading";
import { getWorkInfo } from "@/app/db/blog-client";
import useSupervisorInfo from "@/hooks/useSupervisorInfo";
import useUserInfo, { Role, Rules } from "@/hooks/useUserInfo";
import { AllMemberInfo } from "@/interface/auth.interface";
import { fetcher } from "@/lib/fetch";
import { ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type UserInfo = {
  id: string;
  mNo: number;
  rules: {
    proverb_post: Rules;
  };
  role: Role;
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [cookies] = useCookies();
  const { setUserInfo } = useUserInfo();
  const { setSupervisorInfo } = useSupervisorInfo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher<UserInfo>("/v2023/blog/userInfo", {
      method: "POST",
      body: JSON.stringify({
        token: cookies.accessToken,
      }),
    })
      .then(async (re) => {
        const workInfo = await getWorkInfo();

        setUserInfo({
          id: re.id,
          mNo: re.mNo,
          rules: re.rules,
          role: re.role,
          workInfo,
        });
      })
      .finally(() => {
        setLoading(false);
      });

    fetcher<AllMemberInfo>("/v2023/blog/allMemberInfo", {
      method: "POST",
    }).then((re) => {
      setSupervisorInfo({ allMemberInfo: re });
    });
  }, []);

  return (
    <div className="font-raleway w-full sm:w-[36rem] flex justify-center mx-auto">
      {loading ? <Loading /> : children}
    </div>
  );
}
