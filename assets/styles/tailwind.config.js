
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#e2e2e7",
        "outline-variant": "#d0c2d3",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#ffddb3",
        "tertiary-container": "#623f00",
        "on-tertiary-fixed": "#291800",
        "surface": "#f9f9f9",
        "on-error": "#ffffff",
        "secondary-fixed-dim": "#c6c6cb",
        "on-tertiary-container": "#deac66",
        "on-surface-variant": "#4d4351",
        "tertiary": "#442b00",
        "on-secondary": "#ffffff",
        "outline": "#7f7383",
        "error": "#ba1a1a",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#e4b5ff",
        "primary-fixed": "#f4d9ff",
        "on-tertiary-fixed-variant": "#633f00",
        "on-secondary-container": "#616267",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e2e2e2",
        "surface-bright": "#f9f9f9",
        "surface-variant": "#e2e2e2",
        "primary-container": "#6a1b9a",
        "tertiary-fixed-dim": "#f2bd76",
        "surface-container": "#eeeeee",
        "error-container": "#ffdad6",
        "inverse-primary": "#e4b5ff",
        "inverse-on-surface": "#f1f1f1",
        "primary": "#4e0078",
        "inverse-surface": "#303030",
        "on-secondary-fixed": "#1a1c1f",
        "on-background": "#1b1b1b",
        "surface-tint": "#843ab4",
        "on-primary-container": "#da9cff",
        "on-surface": "#1b1b1b",
        "secondary": "#5d5e63",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "secondary-container": "#dfdfe4",
        "on-primary-fixed": "#2f004b",
        "background": "#f9f9f9",
        "surface-dim": "#dadada",
        "on-secondary-fixed-variant": "#45474b",
        "on-primary-fixed-variant": "#6a1b9a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter-mobile": "20px",
        "margin-mobile": "24px",
        "margin-desktop": "64px",
        "gutter-desktop": "32px",
        "unit": "8px",
        "touch-target-min": "56px"
      },
      fontFamily: {
        "headline-lg": ["Inter"],
        "label-lg": ["Inter"],
        "headline-lg-mobile": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "headline-md": ["Inter"],
        "button-text": ["Inter"]
      },
      fontSize: {
        "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-lg": ["16px", { "lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "body-lg": ["22px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "body-md": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-md": ["28px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "button-text": ["20px", { "lineHeight": "1", "fontWeight": "600" }]
      }
    }
  }
}