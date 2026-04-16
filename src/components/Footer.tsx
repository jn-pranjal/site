const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
          © {new Date().getFullYear()} Pranjal Jain. Mumbai, India.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/pranjalhjain/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            LinkedIn
          </a>
          <a href="https://substack.com/@quirkyness22" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            Substack
          </a>
          <a href="mailto:ar.pranjaljain@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
