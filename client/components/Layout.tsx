import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navigation />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
