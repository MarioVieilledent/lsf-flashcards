const LS_THEME: string = 'theme';

type Theme = 'light' | 'dark';

export let theme: Theme = 'light';

export function loadTheme(): void {
    const elem = window.localStorage.getItem(LS_THEME);
    if (elem) {
        theme = elem as Theme;
    }
}

export function setTheme(theme: Theme): void {
    if (theme === 'light' || theme === 'dark') {
        window.localStorage.setItem(LS_THEME, theme);
    }
}

export function debounce<T extends Function>(func: T, wait = 300) {
    let h = 0;
    let callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => func(...args), wait);
    };
    return <T>(<any>callable);
}