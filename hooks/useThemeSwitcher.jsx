import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState('dark'); // Sempre inicia com dark
	const [mounted, setMounted] = useState(false);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		setMounted(true);
		// Só acessa localStorage após montar no cliente
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
		} else {
			// Se não há tema salvo, define dark como padrão
			localStorage.setItem('theme', 'dark');
		}
	}, []);

	useEffect(() => {
		if (!mounted) return; // Só aplica mudanças após montar
		
		const root = window.document.documentElement;
		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme, mounted]);

	// Retorna valores consistentes até montar
	if (!mounted) {
		return ['light', () => {}];
	}

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
