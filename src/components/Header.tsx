import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () =>
{
    return (
        <header className="px-6 py-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-primary-text">
                <span className="block md:block sm:block xl:hidden lg:hidden">Streamify</span>
                <span className="hidden md:hidden sm:hidden xl:block lg:block">Streamify - Your goto place for enjoying music</span>
              </h1>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-xl glassmorphism text-primary-text hover:bg-primary-accent/20">
                  <Bell className="h-5 w-5" />
                </button>
                <Avatar className="border-2 border-primary-accent/20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
    )
};

export default Header;