import type { FC } from "react";
import Header from "./Header";

const Home: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
    </div>
  );
};

export default Home;
