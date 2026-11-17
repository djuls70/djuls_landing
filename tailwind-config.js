tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        tech: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        titanium: {
          canvas: '#FAFAFA',       /* Светлый титан (Zinc-50) */
          card: '#FFFFFF',         /* Белый фон карточек */
          subtle: '#F4F4F5',       /* Разделитель (Zinc-100) */
          border: '#E4E4E7',       /* Базовый бордер карточек (Zinc-200) */
          borderActive: '#D4D4D8', /* Активный бордер кнопок (Zinc-300) */
          borderDark: '#71717A',   /* Акцентный бордер */
          textPrimary: '#09090B',  /* Обсидиановый текст (Zinc-950) */
          textSecondary: '#52525B',/* Вторичный текст (Zinc-600) */
          textMuted: '#71717A',    /* Приглушенный текст (Zinc-500) */
          obsidian: '#18181B',     /* Кнопки и статусы (Zinc-900) */
          obsidianDark: '#09090B', /* Черный ховер */
          flame: '#EA580C',        /* Пламенный оранжевый акцент */
          flameHover: '#C2410C',   /* Глубокий оранжевый */
          flameLight: '#FFF7ED',   /* Оранжевая подсветка (Orange-50) */
          flameBorder: '#FED7AA',  /* Оранжевый бордер (Orange-200) */
          amber: '#D97706',        /* Янтарный маркер */
        }
      },
      boxShadow: {
        'hud': '0 1px 3px 0 rgba(9, 9, 11, 0.05), 0 1px 2px -1px rgba(9, 9, 11, 0.05)',
        'node': '0 4px 12px -2px rgba(9, 9, 11, 0.04), 0 2px 6px -1px rgba(9, 9, 11, 0.02)',
      }
    }
  }
};
