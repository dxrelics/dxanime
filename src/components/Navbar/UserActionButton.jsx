import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

export const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Log Out" : "Log In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href="/users/dashboard" className="py-1 text-color-primary">
          Dashboard
        </Link>
      ) : null}

      <Link
        href={actionURL}
        className="bg-color-dark text-color-primary py-1 px-12 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
