import { Role, Rules } from "@/hooks/useUserInfo";

export interface Login {
  accessToken: string;
  refreshToken: string;
  id: string;
  mNo: number;
  rules: {
    proverb_post: Rules;
  };
  role: Role;
}

export type AllMemberInfo = {
  mNo: number;
  id: string;
  role: Role;
}[];
