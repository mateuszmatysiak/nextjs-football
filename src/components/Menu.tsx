import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";

export const Menu = () => {
  return (
    <div className="fixed top-6 inset-x-0 max-w-layout mx-auto flex justify-between items-center px-4 py-6 bg-sea-4 rounded-lg">
      <button>
        <HamburgerMenuIcon className="size-6" />
      </button>

      <div>
        <span className="text-green-4 text-2xl font-bold">Fa</span>
        <span className="text-white text-2xl font-bold">nt</span>
        <span className="text-red-4 text-2xl font-bold">asy</span>
      </div>

      <Button color="primary">Become a Coach</Button>
    </div>
  );
};
