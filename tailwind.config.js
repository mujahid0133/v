/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  './index.html',
	  './src/**/*.{js,jsx}',  // Scan the src folder for JS/JSX files
	  './node_modules/shadcn/ui/**/*.{js,jsx}',  // Include shadcn components
	],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  }
  