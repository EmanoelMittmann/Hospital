import { AuthTemplate } from "contexts";
import { Navbar, SideBar } from "components/molecules";

type Props = {
  children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    // <AuthTemplate>
    <div className="w-screen flex overflow-hidden">
      <SideBar />
      <div className="w-3/4 ml-48">
        <Navbar />
        {children}
      </div>
    </div>
    // </AuthTemplate>
  );
};
