import { useEffect, useState, useRef } from 'react';
import { Subject, Subscription } from 'rxjs';
const subject = new Subject();

interface Theme {
  userBackground?: string;
}
export const themeService = {
  updateTheme: (theme: Theme) => subject.next(theme),
  subscribe: subject.subscribe,
  getThemeService: () => subject.asObservable(),
};

const defaultTheme = { userBackground: 'white' };

export const useTheme = (): { theme: Theme } => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const subscription = useRef<Subscription>();

  useEffect(() => {
    subscription.current = themeService.getThemeService().subscribe((theme) => {
      if (theme) {
        setTheme(theme);
      } else {
        setTheme(defaultTheme);
      }
    });
    return () => {
      if (subscription.current) {
        subscription.current.unsubscribe();
      }
    };
  }, []);

  return {
    theme,
  };
};
