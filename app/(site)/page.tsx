import Image from "next/image";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-full bg-relative bg-no-repeat bg-cover bg-[url('https://an2-img.amz.wtchn.net/image/v2/lv7M4yCWyJneDX2iR8hRpQ.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZM01qWTNNVGcxTnpBNU5ETTNOamd6TlNKOS5yRWx4YkVtYzVPVzZhZW5WdnRCcDBVTWhHS1BwVWhVYXhmU2tYZlRUTC1N')]">
        <div className="bg-black h-full w-full lg:bg-opacity-75 sm:bg-opacity-75">
          <SignIn />
          <Footer />
        </div>
      </div>
    </>
  );
}
