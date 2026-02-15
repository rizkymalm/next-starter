import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        asideScrollbars: {
            light: 'light',
            gray: 'gray',
        },
        scrollPadding: {
            72: '18rem',
        },
        extend: {
            colors: {
                current: 'currentColor',
                transparent: 'transparent',
                white: '#FFFFFF',
                black: '#1C2434',
                red: '#FB5454',
                'black-2': '#010101',
                body: '#64748B',
                bodydark: '#AEB7C0',
                bodydark1: '#DEE4EE',
                bodydark2: '#8A99AF',
                textDarkPrimary: '#F5F5F7',
                textDarkSecondary: '#A5A5AB',
                textDarkTertiary: '#6E6E73',
                // bg: {
                //     1: 'var(--bg-1)',
                //     2: 'var(--bg-2)',
                //     3: 'var(--bg-3)',
                // },
                // text: {
                //     primary: 'var(--text-primary)',
                //     secondary: 'var(--text-secondary)',
                //     muted: 'var(--text-muted)',
                // },
                // accent: {
                //     DEFAULT: 'var(--accent)',
                //     hover: 'var(--accent-hover)',
                //     active: 'var(--accent-active)',
                //     subtle: 'var(--accent-subtle)',
                //     secondary: 'var(--accent-secondary)',
                // },
                bg: {
                    light: {
                        1: '#FAFAFB', // primary background (app)
                        2: '#FFFFFF', // secondary background (card)
                        3: '#F2F2F5', // tertiary / hover / subtle surface
                    },
                    dark: {
                        1: '#0E0E11', // primary background
                        2: '#16161A', // secondary background
                        3: '#1E1E24', // tertiary / hover
                    },
                },
                text: {
                    light: {
                        primary: '#1C1C1E', // main text (almost black)
                        secondary: '#3A3A3C', // secondary content
                        muted: '#8E8E93', // helper / label / placeholder
                    },
                    dark: {
                        primary: '#F5F5F7',
                        secondary: '#A5A5AB',
                        muted: '#6E6E73',
                    },
                },
                accent: {
                    light: {
                        DEFAULT: '#22C55E', // main
                        hover: '#4ADE80',
                        active: '#15803D',
                        subtle: '#DCFCE7', // background hint
                        secondary: '#16A34A',
                    },
                    dark: {
                        DEFAULT: '#50C878',
                        hover: '#6BEA9B',
                        active: '#267E48',
                        subtle: '#123222',
                        secondary: '#97FFBD',
                    },
                },
                // LIGHT MODE BACKGROUND
                light: {
                    1: '#FAFAFB', // primary background (app)
                    2: '#FFFFFF', // secondary background (card)
                    3: '#F2F2F5', // tertiary / hover / subtle surface
                },
                // DARK MODE BACKGROUND
                dark: {
                    1: '#0E0E11', // primary background
                    2: '#16161A', // secondary background
                    3: '#1E1E24', // tertiary / hover
                },
                // BASE BACKGROUND
                // TEXT COLORS
                // text: {
                //     primary: '#F5F5F7',
                //     secondary: '#A5A5AB',
                //     muted: '#6E6E73',
                // },
                textlight: {
                    primary: '#1C1C1E', // main text (almost black)
                    secondary: '#3A3A3C', // secondary content
                    muted: '#8E8E93', // helper / label / placeholder
                },
                // EMERALD ACCENT PALETTE
                // accent: {
                //     DEFAULT: '#4ADE80',
                //     dark: '#267E48',
                //     hover: '#6BEA9B',
                //     subtle: '#123222',
                //     secondary: '#97FFBD',
                // },
                // BORDERS
                border: {
                    soft: '#2A2A2F',
                    strong: '#3A3A40',
                    divider: '#232327',
                },
                // STATUS
                success: '#4ADE80',
                warning: '#FFD34D',
                error: '#EF4444',
                neutral: {
                    50: '#F8F8F8',
                    100: '#E4E4E4',
                    200: '#CFCFCF',
                    300: '#BBBBBB',
                    400: '#A6A6A6',
                    500: '#929292',
                    600: '#7E7E7E',
                    700: '#696969',
                    800: '#4F4F4F',
                    900: '#2C2C2C',
                },
                primary: {
                    50: '#F0F9E7',
                    100: '#E2F4D1',
                    200: '#D1EDB7',
                    300: '#C7EBA5',
                    400: '#A3DB6D',
                    500: '#89BE57',
                    600: '#71A143',
                    700: '#5A8431',
                    800: '#446722',
                    900: '#2F4A16',
                },
                secondary: {
                    50: '#FFF7EC',
                    100: '#FFE9CC',
                    200: '#FFD297',
                    300: '#FFBF6C',
                    400: '#FFAD42',
                    500: '#F99B28',
                    600: '#E3860B',
                    700: '#CA7301',
                    800: '#A45E05',
                    900: '#7C4702',
                },
                default: {
                    white: '#FFFFFF',
                    black: '#231F20',
                    overlay: '#1B1A1A',
                },
                stroke: '#E2E8F0',
                gray: '#EFF4FB',
                graydark: '#333A48',
                'gray-2': '#F7F9FC',
                'gray-3': '#FAFAFA',
                whiten: '#F1F5F9',
                whiter: '#F5F7FD',
                boxdark: '#24303F',
                'boxdark-2': '#1A222C',
                strokedark: '#2E3A47',
                'form-strokedark': '#3d4d60',
                'form-input': '#1d2a39',
                'meta-1': '#DC3545',
                'meta-2': '#EFF2F7',
                'meta-3': '#10B981',
                'meta-4': '#313D4A',
                'meta-5': '#259AE6',
                'meta-6': '#FFBA00',
                'meta-7': '#FF6766',
                'meta-8': '#F0950C',
                'meta-9': '#E5E7EB',
                'meta-10': '#0FADCF',
                // success: {
                //     50: '#F4FFF3',
                //     100: '#E3FFE2',
                //     200: '#BCFCBB',
                //     300: '#99F497',
                //     400: '#60E55D',
                //     500: '#34D130',
                //     600: '#04BB00',
                //     700: '#059F02',
                //     800: '#027600',
                //     900: '#024D00',
                // },
                danger: {
                    50: '#FEF4F3',
                    100: '#FFE8E7',
                    200: '#FFB1AD',
                    300: '#FF837C',
                    400: '#FF544A',
                    500: '#EE3329',
                    600: '#EA0C00',
                    700: '#BD0A00',
                    800: '#720600',
                    900: '#260200',
                },
                // warning: {
                //     50: '#FFFAE5',
                //     100: '#FFF0B7',
                //     200: '#FFE78A',
                //     300: '#FFDE5C',
                //     400: '#FFD52E',
                //     500: '#FFCC00',
                //     600: '#D6AB00',
                //     700: '#AD8B00',
                //     800: '#856A00',
                //     900: '#5C4900',
                // },
            },
            fontSize: {
                'title-super': ['200px', '220px'], // super xl
                'title-3xl': ['120px', '160px'], // super
                'title-xxl': ['72px', '88px'], // Hero / landing
                'title-xl': ['60px', '72px'], // Page hero
                'title-lg': ['48px', '60px'], // Page title
                'title-md': ['36px', '44px'], // Section title
                'title-sm': ['30px', '38px'], // Card title
                'title-xs': ['26px', '34px'], // Sub card title
                'title-xsm': ['22px', '30px'], // Small heading
                'text-xxl': ['20px', '30px'], // Large paragraph
                'text-xl': ['18px', '28px'], // Intro text
                'text-lg': ['16px', '26px'], // Default body
                'text-md': ['14px', '22px'], // Secondary
                'text-sm': ['13px', '20px'], // Caption
                'text-xs': ['12px', '18px'], // Helper
            },
            fontWeight: {
                regular: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            lineHeight: {
                tight: '1.15', // headings besar
                snug: '1.3', // headings normal
                normal: '1.5', // body
                relaxed: '1.65', // paragraph panjang
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                rowdies: ['Rowdies', 'sans-serif'],
            },
            spacing: {
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                10.5: '2.625rem',
                11: '2.75rem',
                11.5: '2.875rem',
                12.5: '3.125rem',
                13: '3.25rem',
                13.5: '3.375rem',
                14: '3.5rem',
                14.5: '3.625rem',
                15: '3.75rem',
                15.5: '3.875rem',
                16: '4rem',
                16.5: '4.125rem',
                17: '4.25rem',
                17.5: '4.375rem',
                18: '4.5rem',
                18.5: '4.625rem',
                19: '4.75rem',
                19.5: '4.875rem',
                21: '5.25rem',
                21.5: '5.375rem',
                22: '5.5rem',
                22.5: '5.625rem',
                24.5: '6.125rem',
                25: '6.25rem',
                25.5: '6.375rem',
                26: '6.5rem',
                27: '6.75rem',
                27.5: '6.875rem',
                29: '7.25rem',
                29.5: '7.375rem',
                30: '7.5rem',
                31: '7.75rem',
                32.5: '8.125rem',
                33: '8.25rem',
                34: '8.5rem',
                34.5: '8.625rem',
                35: '8.75rem',
                36.5: '9.125rem',
                37.5: '9.375rem',
                39: '9.75rem',
                39.5: '9.875rem',
                40: '10rem',
                42.5: '10.625rem',
                44: '11rem',
                45: '11.25rem',
                46: '11.5rem',
                47.5: '11.875rem',
                49: '12.25rem',
                50: '12.5rem',
                52: '13rem',
                52.5: '13.125rem',
                54: '13.5rem',
                54.5: '13.625rem',
                55: '13.75rem',
                55.5: '13.875rem',
                59: '14.75rem',
                60: '15rem',
                62.5: '15.625rem',
                65: '16.25rem',
                67: '16.75rem',
                67.5: '16.875rem',
                70: '17.5rem',
                72.5: '18.125rem',
                73: '18.25rem',
                75: '18.75rem',
                90: '22.5rem',
                94: '23.5rem',
                95: '23.75rem',
                100: '25rem',
                115: '28.75rem',
                125: '31.25rem',
                132.5: '33.125rem',
                150: '37.5rem',
                171.5: '42.875rem',
                180: '45rem',
                187.5: '46.875rem',
                203: '50.75rem',
                230: '57.5rem',
                242.5: '60.625rem',
            },
            maxWidth: {
                2.5: '0.625rem',
                3: '0.75rem',
                4: '1rem',
                7: '1.75rem',
                9: '2.25rem',
                10: '2.5rem',
                10.5: '2.625rem',
                11: '2.75rem',
                13: '3.25rem',
                14: '3.5rem',
                15: '3.75rem',
                16: '4rem',
                22.5: '5.625rem',
                25: '6.25rem',
                30: '7.5rem',
                34: '8.5rem',
                35: '8.75rem',
                40: '10rem',
                42.5: '10.625rem',
                44: '11rem',
                45: '11.25rem',
                60: '15rem',
                70: '17.5rem',
                90: '22.5rem',
                94: '23.5rem',
                125: '31.25rem',
                132.5: '33.125rem',
                142.5: '35.625rem',
                150: '37.5rem',
                180: '45rem',
                203: '50.75rem',
                230: '57.5rem',
                242.5: '60.625rem',
                270: '67.5rem',
                280: '70rem',
                292.5: '73.125rem',
            },
            maxHeight: {
                35: '8.75rem',
                70: '17.5rem',
                90: '22.5rem',
                550: '34.375rem',
                300: '18.75rem',
            },
            minWidth: {
                22.5: '5.625rem',
                42.5: '10.625rem',
                47.5: '11.875rem',
                75: '18.75rem',
            },
            zIndex: {
                999999: '999999',
                99999: '99999',
                9999: '9999',
                999: '999',
                99: '99',
                9: '9',
                1: '1',
            },
            opacity: {
                65: '.65',
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '21/9': '21 / 9',
            },
            backgroundSize: {
                auto: 'auto',
                cover: 'cover',
                contain: 'contain',
                '50%': '50%',
                '100%': '100%',
            },
            backgroundImage: {
                'moon-bg': 'url("/images/moon.png")',
            },
            transitionProperty: { width: 'width', stroke: 'stroke' },
            borderWidth: {
                6: '6px',
                10: '10px',
                12: '12px',
            },
            boxShadow: {
                default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
                card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
                'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
                switcher:
                    '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
                'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
                1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
                3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
                4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
                5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
                6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
                7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
                8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
                9: '0px 2px 3px rgba(183, 183, 183, 0.5)',
                10: '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
                11: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
                12: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.18)',
                13: '0px 1px 3px 0px rgba(0, 0, 0, 0.08)',
                14: '0px 2px 3px 0px rgba(0, 0, 0, 0.10)',
            },
            dropShadow: {
                1: '0px 1px 0px #E2E8F0',
                2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
                3: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                4: '0px 0px 2px rgba(0, 0, 0, 0.2)',
                5: '0px 1px 5px rgba(0, 0, 0, 0.2)',
            },
            keyframes: {
                linspin: {
                    '100%': { transform: 'rotate(360deg)' },
                },
                easespin: {
                    '12.5%': { transform: 'rotate(135deg)' },
                    '25%': { transform: 'rotate(270deg)' },
                    '37.5%': { transform: 'rotate(405deg)' },
                    '50%': { transform: 'rotate(540deg)' },
                    '62.5%': { transform: 'rotate(675deg)' },
                    '75%': { transform: 'rotate(810deg)' },
                    '87.5%': { transform: 'rotate(945deg)' },
                    '100%': { transform: 'rotate(1080deg)' },
                },
                'left-spin': {
                    '0%': { transform: 'rotate(130deg)' },
                    '50%': { transform: 'rotate(-5deg)' },
                    '100%': { transform: 'rotate(130deg)' },
                },
                'right-spin': {
                    '0%': { transform: 'rotate(-130deg)' },
                    '50%': { transform: 'rotate(5deg)' },
                    '100%': { transform: 'rotate(-130deg)' },
                },
                rotating: {
                    '0%, 100%': { transform: 'rotate(360deg)' },
                    '50%': { transform: 'rotate(0deg)' },
                },
                topbottom: {
                    '0%, 100%': { transform: 'translate3d(0, -100%, 0)' },
                    '50%': { transform: 'translate3d(0, 0, 0)' },
                },
                bottomtop: {
                    '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
                    '50%': { transform: 'translate3d(0, -100%, 0)' },
                },
                line: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(100%)' },
                },
                'line-revert': {
                    '0%, 100%': { transform: 'translateY(100%)' },
                    '50%': { transform: 'translateY(0)' },
                },
            },
            animation: {
                linspin: 'linspin 1568.2353ms linear infinite',
                easespin:
                    'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'left-spin':
                    'left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'right-spin':
                    'right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
                'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
                rotating: 'rotating 30s linear infinite',
                topbottom: 'topbottom 60s infinite alternate linear',
                bottomtop: 'bottomtop 60s infinite alternate linear',
                'spin-1.5': 'spin 1.5s linear infinite',
                'spin-2': 'spin 2s linear infinite',
                'spin-3': 'spin 3s linear infinite',
                line1: 'line 10s infinite linear',
                line2: 'line-revert 8s infinite linear',
                line3: 'line 7s infinite linear',
            },
        },

        boxShadow: {
            'custom-light': '3px 0 12px rgb(74 222 128 / 15%)',
            'right-md': '8px 0 6px rgba(0, 0, 0, 0.1)',
            'right-lg': '10px 0 12px rgba(0, 0, 0, 0.1)',
            'left-md': '-3px 0 6px rgba(0, 0, 0, 0.1)',
            'left-lg': '-4px 0 12px rgba(0, 0, 0, 0.1)',
        },
    },
    plugins: [
        function ({ addVariant }: any) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
    darkMode: 'class',
};
export default config;
