import { Post } from "contentlayer/generated";
import { format } from "date-fns";
import { FC } from "react";

const Header: FC<Post> = ({ title, published, slug }) => {
  return (
    <header>
      <div>
        <h1 className="">{title}</h1>
        <p>{format(new Date(published), "MMMM dd, yyyy")}</p>
      </div>
    </header>
  );
};

export default Header;
