import { motion } from 'framer-motion';
import stoneridgeLogo from '@/assets/stoneridge-logo.png';

interface HeaderProps {
  progress: number;
}

export function Header({ progress }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <img 
              src={stoneridgeLogo} 
              alt="Stoneridge Software" 
              className="h-8 md:h-10 w-auto"
            />
            <div className="hidden sm:block border-l border-primary-foreground/30 pl-4">
              <h1 className="font-display text-sm md:text-base font-semibold text-primary-foreground">
                How We Make Money
              </h1>
              <p className="text-xs text-primary-foreground/70">
                Internal Training
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="text-right hidden sm:block">
              <p className="text-xs text-primary-foreground/70">Course Progress</p>
              <p className="text-sm font-semibold text-primary-foreground">{progress}% Complete</p>
            </div>
            <div className="w-24 sm:w-32 h-2 rounded-full overflow-hidden bg-primary-foreground/20">
              <motion.div 
                className="h-full rounded-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}