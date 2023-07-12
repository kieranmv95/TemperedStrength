import { useAppSelector } from "@/hooks/redux";

const UserProfileCard = () => {
  const user = useAppSelector((state) => state.userProfile.user);

  return (
    <div className="grid grid-cols-[auto_1fr] gap-1 items-center">
      <div className="grid w-[5.25rem] h-[5.25rem] bg-main rounded-full text-center font-bold text-white content-center text-4xl">
        {user?.name.substring(0, 1)}
      </div>
      <div>
        <h2 className="font-bold text-lg leading-none mb-1">{user?.name}</h2>
        <p className="leading-none mb-1">
          {user?.memberSince.toLocaleString("en-GB", {
            month: "long",
            year: "numeric",
          })}
        </p>
        {user?.foundingMember && (
          <div className="bg-main text-white rounded-full px-3 py-2 inline-block mt-1 leading-none text-sm">
            Founding Member
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
