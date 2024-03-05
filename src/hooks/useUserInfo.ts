import { WorkInfo } from "@/interface/blog.interface";
import { create } from "zustand";

export type Rules = "add" | "edit" | "delete";
export type Role = "member" | "supervisor" | "root";

interface UserInfoState {
  id: string;
  mNo: number;
  rules: {
    proverb_post: Rules;
  };
  role: Role;
  workInfo?: WorkInfo;
}

interface UserInfoActions {
  setUserInfo: (userinfo: UserInfoState) => void;
  setWorkInfo: (workInfo: WorkInfo) => void;
  deleteUserInfo: () => void;
}

const defaultState: UserInfoState = {
  id: "",
  mNo: 0,
  rules: {
    proverb_post: "add",
  },
  role: "member",
  workInfo: {
    workPosts: [],
    total: 0,
    compelete: 0,
    incomplete: 0,
  },
};

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  ...defaultState,
  setUserInfo: (userinfo) => set(userinfo),
  setWorkInfo: (workInfo) => set({ workInfo }),
  deleteUserInfo: () => set(defaultState),
}));

export default useUserInfo;
