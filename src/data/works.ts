export interface tech {
	name: string;
	icon: string;
}

export interface work {
	id: number;
	title: string;
	description: string;
	technologies: tech[];
	photo: string;
	altPhoto: string;
}


const WORKS: work[] = [{
	id: 1,
	title: 'Portfolio 2022',
	description: 'Moje portfolio zrobione w 2022 roku. Stworzone na użytek własny.',
	technologies: [
		{
			name: 'Next.js',
			icon: '/assets/tech-icons/next-js.svg'
		},
		{
			name: 'Tailwind',
			icon: '/assets/tech-icons/tailwind-css.svg'
		}
	],
	photo: '/assets/works-screenshots/portfolio2022.png',
	altPhoto: 'Portfolio 2022'
},
]

export default WORKS;