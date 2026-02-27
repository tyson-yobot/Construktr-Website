import UnifiedHeader from "./unified-header";

export default function GlobalHeader() {
  return <UnifiedHeader />;


              className="h-8 w-auto"
              loading="eager"
              priority={true}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-text-content hover:text-strong transition-colors duration-200 font-medium focus-ring rounded-lg px-3 py-2 whitespace-nowrap ${
                  location === item.href ? "text-brand-blue" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="flex items-center space-x-3">
            {/* Learn More - Yellow Accent */}
            <Button
              asChild
              variant="ghost"
              className="hidden sm:inline-flex btn-accent focus-ring whitespace-nowrap"
            >
              <Link href="/demos">
                Learn More
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>

            {/* Download - Brand Blue Primary */}
            <Button
              asChild
              className="btn-primary whitespace-nowrap"
            >
              <Link href="/get">
                <Download className="w-4 h-4" />
                Download
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-text-content hover:text-strong focus-ring"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bg-ink-2 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-text-content hover:text-strong transition-colors duration-200 font-medium py-2 focus-ring rounded-lg ${
                    location === item.href ? "text-brand-blue" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Group */}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <Button
                  asChild
                  variant="outline"
                  className="w-full btn-accent"
                >
                  <Link href="/demos" onClick={() => setIsMobileMenuOpen(false)}>
                    Learn More
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  className="btn-primary w-full"
                >
                  <Link href="/get" onClick={() => setIsMobileMenuOpen(false)}>
                    <Download className="w-4 h-4" />
                    Download App
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}