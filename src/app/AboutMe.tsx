import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function AboutMe() {
	return (
		<Fade>
			<div className="mb-32">
				<h3 className="mb-16 cursor-default text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					About Me
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src="/profile_pic.jpg"
						alt="Profile Picture"
						width={480}
						height={480}
						className="mb-10 w-full max-w-[280px] rounded-full border-4 border-cyan-500 grayscale filter transition duration-300 hover:filter-none dark:border-cyan-700 md:mb-0"
					/>
					<p className="flex w-full max-w-2xl items-center text-center text-base md:mb-0 md:ml-10 md:text-lg">
						{`Hello! I'm a passionate full-stack web developer with expertise in Node.js and React.js. I excel in crafting seamless user experiences through captivating front-end designs and robust back-end systems. My skill set includes responsive design, database management, and API integration. I'm committed to continuous learning and collaborating effectively in cross-functional teams. Let's create amazing digital solutions together!`}
					</p>
				</div>
			</div>
		</Fade>
	);
}
