import Image from "next/image";
import loader from "@/assets/loader.svg";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} height={250} width={250} alt="Loading..." />;
    </div>
  );
}
