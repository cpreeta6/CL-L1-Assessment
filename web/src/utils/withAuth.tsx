import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session || !allowedRoles.includes(session.user.role)) {
      router.replace("/403");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
