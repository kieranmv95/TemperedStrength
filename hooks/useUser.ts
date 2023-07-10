import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { useRouter } from "next/router";

const useUser = (protectedRoute: boolean = true) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userProfile = useAppSelector((state) => state.userProfile);

  useEffect(() => {
    if (protectedRoute && userProfile.user === null) {
      router.push("/app/new-user");
    }
  }, [protectedRoute]);

  return {
    userProfile,
  };
};

export default useUser;
