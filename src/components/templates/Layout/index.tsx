import { AuthTemplate } from "contexts";
import { Navbar, SideBar } from "components/molecules";
import { Create } from "components/atoms";

type Props = {
  children?: JSX.Element;
  btn?: boolean;
};

export const Layout = ({ children, btn = false }: Props) => {
  return (
    <div className="w-screen flex overflow-hidden">
      <SideBar />
      <div className="w-3/4 ml-44">
        <Navbar />
        <div className="h-32"></div>
        <div className="flex flex-col gap-4 px-2">
          {btn && (
            <div className="flex flex-row justify-end">
              <Create text="Criar Novo" />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
