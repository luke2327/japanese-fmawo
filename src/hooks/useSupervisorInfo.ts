import { AllMemberInfo } from "@/interface/auth.interface";
import { create } from "zustand";

interface SupervisorInfoState {
  allMemberInfo: AllMemberInfo;
}

interface UserInfoActions {
  setSupervisorInfo: (supervisorInfo: SupervisorInfoState) => void;
  deleteSupervisorInfo: () => void;
}

const defaultState: SupervisorInfoState = {
  allMemberInfo: [],
};

const useSupervisorInfo = create<SupervisorInfoState & UserInfoActions>(
  (set) => ({
    ...defaultState,
    setSupervisorInfo: (supervisorInfo) => set(supervisorInfo),
    deleteSupervisorInfo: () => set(defaultState),
  })
);

export default useSupervisorInfo;
