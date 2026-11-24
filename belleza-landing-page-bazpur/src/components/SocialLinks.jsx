const InstagramIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

const FacebookIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.03 3.68 9.2 8.49 9.94v-7.03H7.96v-2.91h2.53V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.91h-2.32V22c4.8-.74 8.38-4.91 8.38-9.94Z" />
    </svg>
  );
};

const GoogleBusinessIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.24 10.29v3.48h5.66c-.24 1.49-1.71 4.36-5.66 4.36-3.41 0-6.19-2.82-6.19-6.3s2.78-6.3 6.19-6.3c1.94 0 3.24.83 3.98 1.54l2.71-2.61C17.19 2.84 14.92 1.86 12.24 1.86 6.73 1.86 2.26 6.33 2.26 11.84s4.47 9.98 9.98 9.98c5.76 0 9.58-4.05 9.58-9.75 0-.66-.07-1.16-.16-1.66h-9.42z" />
    </svg>
  );
};

const SocialLinks = ({ appConfig = {}, className = "" }) => {
  const { facebookLink, instagramLink, googleFormLink } = appConfig;

  if (!instagramLink && !facebookLink && !googleFormLink) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              )}

              {facebookLink && (
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              )}

              {googleFormLink && (
                <a
                  href={googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <GoogleBusinessIcon className="w-5 h-5" />
                </a>
              )}
            </div>
  );
};

export default SocialLinks;
