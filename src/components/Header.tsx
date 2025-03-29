
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                src="/lovable-uploads/6932d159-1ea7-4799-b940-a3b75455ec24.png" 
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
          <NavLink to="/dashboard" label="Dashboard" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/explore" label="Explore" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/nutrition" label="Nutrition" onClick={() => isMobile && setIsMenuOpen(false)} />
          <NavLink to="/challenges" label="Challenges" onClick={() => isMobile && setIsMenuOpen(false)} />
        </nav>

        <div className="flex items-center space-x-1 sm:space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-starGold rounded-full"></span>
          </Button>
          <Avatar className="h-8 w-8 border-2 border-starGold">
            <AvatarImage src="" />
            <AvatarFallback className="bg-starAccent text-starLight">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-starLight hover:text-starGold font-medium transition-colors"
  >
    {label}
  </Link>
);

export default Header;
