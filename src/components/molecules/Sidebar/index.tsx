import { PathButton } from "components/atoms/Buttons";
import { IconRecord, IconHome, IconPatient } from "components/atoms";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-60 h-screen shadow-2xl">
      <div>
        <div className="w-full h-28 flex items-center justify-center font-bold font-sans">
          Logo
        </div>
      </div>
      <div
        id="roles"
        className="w-full h-full flex items-start flex-col gap-3 px-3"
      >
        <PathButton
          icon={<IconHome />}
          text="Inicio"
          onClick={() => navigate("/")}
        />
        <PathButton
          icon={<IconRecord />}
          text="Consultas"
          onClick={() => navigate("/Consultas")}
        />
        <PathButton
          icon={<IconPatient />}
          text="Pacientes"
          onClick={() => navigate("/Pacientes")}
        />
      </div>
    </div>
  );
};
