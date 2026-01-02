import { UserProfile } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Profile = () => {
  return (
    <div className="w-full h-screen bg-background text-foreground flex items-center justify-center">
      <UserProfile appearance={dark} />
    </div>
  );
};

export default Profile;
