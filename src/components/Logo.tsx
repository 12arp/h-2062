
import { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src="/lovable-uploads/3fb68ede-4303-4100-941b-84556345f583.png"
        alt="5Vowels Logo"
        className="w-12 h-12"
      />
      <span className="text-xs text-gray-600 mt-1">LEARN ENGLISH, LOVE LANGUAGE</span>
    </div>
  );
};

export default Logo;
