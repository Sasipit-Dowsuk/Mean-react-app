// Filename: lab03.tsx
import Profile from "./components/Profile";
import Contact from "./components/Contact";

export default function Myprofile(){
  return (
    <>
      <Profile />
      
        <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact
        label="FB Sasipit Dowsuk"
        link="https://www.facebook.com/Mirime1230"
        icon="/images/facebook.png"
      />
        <Contact
        label="IG "
        link="https://www.instagram.com"
        icon="/images/instagram.png"
      />
        <Contact
        label="Tiktok "
        link="https://www.tiktok.com"
        icon="/images/tiktok.png"
      />
        </div>
    </div>
    </>
  );
}