const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pranjal Jain. Bangalore, India.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/pranjalhjain/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://substack.com/@quirkyness22" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Substack
          </a>
          <a href="mailto:ar.pranjaljain@gmail.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
