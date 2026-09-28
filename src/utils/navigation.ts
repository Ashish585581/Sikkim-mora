import { useState, useEffect } from 'react';

/**
 * Lightweight client router utility using HTML5 History API.
 * Keeps zero external dependencies while fully supporting direct /cabs loads,
 * browser back/forward buttons, and cross-page anchor scrolling.
 */

export function normalizePath(path: string): string {
  // Normalize trailing slashes (e.g., '/cabs/' -> '/cabs')
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path || '/';
}

export function navigateTo(path: string, hash?: string) {
  const targetPath = normalizePath(path);
  const currentPath = normalizePath(window.location.pathname);
  const fullTarget = hash ? `${targetPath}${hash.startsWith('#') ? hash : `#${hash}`}` : targetPath;

  if (currentPath !== targetPath) {
    window.history.pushState({}, '', fullTarget);
    window.dispatchEvent(new PopStateEvent('popstate'));
  } else if (hash) {
    window.history.replaceState({}, '', fullTarget);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  // Handle scrolling
  if (hash) {
    const targetId = hash.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }, 60);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function useCurrentPath(): string {
  const [path, setPath] = useState<string>(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return path;
}
