module.exports = {
    content: [
        "./content/**/*.md",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    safelist: [
        {
            pattern: /bg-mge-(\w)+/,
        },
    ],
    theme: {
        extend: {
            colors: {
                mge: {
                    red: "#f50c2b",
                    yellow: "#ffed20",
                    green: "#41994e",
                    lightblue: "#aae0fa",
                    blue: "#0072bb",
                    darkblue: "#14182a",
                    brown: "#955436",
                    pink: "#d93a96",
                    orange: "#f7941d",
                },
            },
            fontFamily: {
                "avante-titul-inline": ["AvanteTitulInline", "serif"],
                barlow: ["Barlow Semi Condensed", "sans-serif"],
                josefin: ["Josefin Sans", "sans-serif"]
            },
            backgroundImage: {
                body: "url('/images/bg-dice.svg')",
                contact: "url('/images/bg-pen.svg')"
            },
            backgroundPosition: {
                body: "69vw 30vh",
                contact: "top 7rem left -60%"
            },
            backgroundSize: {
                contact: "55% auto"
            },
            borderWidth: {
                3: "3px",
            },
            gridTemplateColumns: {
                board: "12.65% repeat(9, 1fr) 12.65%"
            },
            gridTemplateRows: {
                board: "12.65% repeat(9, 1fr) 12.65%"
            },
            boxShadow: {
                board: "0 0 0 1px black inset, 0 0 0 1px black",
                card: "4px 2px 6px 3px rgba(0, 0, 0, 0.2)"
            },
            height: {
                88: '22rem',
                136: '34rem',
                184: '46rem'
            },
            width: {
                88: '22rem',
                120: '30rem',
                136: '34rem'
            },
            rotate: {
                8: '8deg'
            },
            typography: (theme) => ({
                card: {
                    css: {
                        h3: {
                            textAlign: 'center'
                        },
                        'h3, h4, h5, h6': {
                            fontWeight: theme('fontWeight.normal'),
                            marginTop: 0
                        },
                        p: {
                            marginBottom: theme('spacing.2')
                        },
                        li: {
                            margin: 0
                        },
                        'ul, ol': {
                            fontWeight: theme('fontWeight.light'),
                            marginTop: 0,
                            marginBottom: 0
                        },
                        'ul > li::marker': {
                            color: 'var(--tw-prose-body)',
                        }
                    }
                }
            })
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
