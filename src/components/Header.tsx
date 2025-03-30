
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Bell, Settings, Home, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { user, signOut, userProfile } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast("Error signing out. Please try again.");
    } else {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-starDark border-b border-starGray">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-2">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1112ded8-c1e7-41ad-931b-965192dffb23.png" 
                alt="Starfit Phoenix Logo" 
                className="h-8 w-auto"
              />
            </div>
            <span className="ml-2 font-bold text-xl tracking-wider text-starLight">STARFIT</span>
          </Link>
        </div>

        <nav className={`
          ${isMobile ? 'absolute top-16 left-0 right-0 bg-starDark border-b border-starGray shadow-lg' : 'flex items-center space-x-8'}
          ${isMobile && !isMenuOpen ? 'hidden' : 'flex'}
          ${isMobile ? 'flex-col items-start p-4 space-y-4' : ''}
        `}>
          <NavLink to="/" label="Home" icon={<Home className="h-4 w-4 mr-2" />} onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/dashboard" label="Dashboard" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/explore" label="Explore" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/nutrition" label="Nutrition" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/challenges" label="Challenges" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/star-ai" label="Star AI" onClick={() => isMobile && setIsMenuOpen(false)} />
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-starGold rounded-full"></span>
          </Button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 border-2 border-starGold cursor-pointer">
                  <AvatarImage src={userProfile?.avatar_url || ""} />
                  <AvatarFallback className="bg-starAccent text-starLight">
                    {userProfile?.username?.charAt(0).toUpperCase() || <User className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#1A1A1A] border-starGray text-starLight" align="end">
                <div className="flex items-center justify-start p-2">
                  <div className="ml-2 space-y-1">
                    <p className="text-sm font-medium">{userProfile?.username || "User"}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="cursor-pointer flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="text-starGold" asChild>
              <Link to="/dashboard">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, icon, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-starLight hover:text-starGold font-medium transition-colors flex items-center"
  >
    {icon}
    {label}
  </Link>
);

export default Header;
