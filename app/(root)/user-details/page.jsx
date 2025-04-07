// pages/index.js or wherever you're rendering the user details page
'use client'
import { useRouter , useSearchParams} from "next/navigation";
import UserDetails from "../../components/UserDetails";

const HomePage = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userId = params.get('userId'); // Getting the userId from URL query params

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserDetails userId={userId} />
    </div>
  );
};

export default HomePage;
