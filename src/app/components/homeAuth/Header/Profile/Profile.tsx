import Image from 'next/image';

const Profile = () => {
  return (
    <div className="hidden md:flex space-x-5 items-center">
      <Image
        src={'/profile/profile.png'}
        alt="profile"
        width={67}
        height={60}
        className="rounded-full"
      />
      <p className="text-xl font-light text-darkBase">Paulo Barbosa</p>
    </div>
  );
};

export default Profile;
