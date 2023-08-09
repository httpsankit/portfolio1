import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

interface Project {
	index: number;
	image: string;
	description: string;
	name: string;
	demo_link: string;
	github_link: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	const projects: Project[] = [
		{
			index: 0,
			image: 'https://github.com/httpsankit/testnew/blob/main/bang.png?raw=true',
			description: 'Web Application',
			name: 'Banggood Clone',
			demo_link: 'https://imaginative-paletas-9bf71d.netlify.app/',
			github_link: 'https://github.com/VijaySingh8650/Banggood-Website',
		},
		{
			index: 1,
			image: 'https://github.com/httpsankit/testnew/blob/main/trip.png?raw=true',
			description: 'Web Application',
			name: 'Tripadvisior Clone',
			demo_link: 'https://super-souffle-523ac0.netlify.app/',
			github_link: 'https://github.com/httpsankit/tripadvisior',
		},
		
		{
			index: 2,
			image: 'https://github.com/httpsankit/testnew/blob/main/lumen.png?raw=true',
			description: 'Web Application',
			name: 'Lumen5 Clone',
			demo_link: 'https://630b253b0a0b95210b267c7c--beautiful-gecko-2b7f94.netlify.app/',
			github_link: '#',
		},
	];

	return (
		<>
			<div className="mb-32">
				<h1 className="mb-16 cursor-default text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					Projects
				</h1>
				<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-10 lg:grid-cols-3">
					<Fade bottom cascade>
						{projects.map((project, index) => {
							return (
								<div
									key={project.index}
									className="m-5 rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700"
								>
									<Image
										src={project.image}
										alt={project.name}
										width={300}
										height={300}
										title="Click to enlarge"
										onClick={() => {
											setModalImg(project.image);
										}}
										className="mb-4 h-auto max-h-52 w-full transform rounded-lg object-cover transition duration-500 ease-in-out hover:cursor-pointer"
									/>
									<div>
										<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">
											{project.description}
										</p>
										<p className="my-1 text-xl font-medium">{project.name}</p>
										<div className="flex justify-between">
											<a
												className="text-sm  hover:underline"
												href={project.demo_link}
												aria-label="Visit Demo"
												onClick={
													project.demo_link === '#'
														? (e) => {
																e.preventDefault();
														  }
														: (e) => {
																e.preventDefault();
																window.open(project.demo_link, '_blank');
														  }
												}
											>
												{project.demo_link === '#' ? '' : 'Visit'}
											</a>
											<Link
												href={project.github_link}
												rel="noreferrer"
												title="Github Link"
												target="_blank"
											>
												<AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-110 dark:text-white" />
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</Fade>
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}
				`}
			>
				<AiFillCloseCircle
					className="fixed right-8 top-6 z-20 text-4xl font-bold text-white hover:cursor-pointer"
					onClick={() => {
						setModalImg(undefined);
					}}
				>
					&times;
				</AiFillCloseCircle>

				<div className="relative h-full w-full sm:m-10 lg:m-20">
					<Image
						id="modal-img"
						fill
						alt="Modal Image"
						src={modalImg ? modalImg : ''}
						className="object-contain"
					/>
				</div>
			</div>
		</>
	);
}
