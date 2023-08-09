import Image from 'next/image';
import Slide from 'react-reveal/Slide';

export default function Education() {
	return (
		<div className="mb-32 mt-20 sm:mt-0">
			<h3 className="mb-16 cursor-default text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
				Education
			</h3>
			<div className="mx-0 grid grid-cols-1 sm:grid-cols-2 md:mx-5 lg:grid-cols-4">
				<Slide left>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<div>
							<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">2011</p>
							<p className="my-1 text-xl font-medium">Class X</p>
							<p className="my-1 text-sm font-medium">B.S.E.B</p>
							<p className="text-sm">Grade: 69.80% </p>
						</div>
						<div className="block">
							<Image
								src="/bps_logo.png"
								alt="BPS Logo"
								width={100}
								title="G.A.High School Bhagwanpur"
								height={100}
								onClick={() => {
									window.open('https://biharboardonline.com/', '_blank');
								}}
								className="hover:cursor-pointer"
							/>
						</div>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700">
						<div>
							<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">2011-2014</p>
							<p className="my-1 text-xl font-medium">Diploma</p>
							<p className="my-1 text-sm font-medium">S.B.T.E</p>
							<p className="text-sm">Grade: 65.6% </p>
						</div>
						<div className="block">
							<Image
								src="/sbte.png"
								alt="BPS Logo"
								width={100}
								height={100}
								title="State Board of Technical University"
								onClick={() => {
									window.open('https://sbte.bih.nic.in/', '_blank');
								}}
								className="hover:cursor-pointer"
							/>
						</div>
					</div>
					<div className="group m-4 flex justify-between rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500 dark:border-gray-800  dark:text-white dark:hover:border-cyan-700 sm:col-span-2">
						<div>
							<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">2017-2020</p>
							<p className="my-1 font-medium sm:text-xl">B.Tech in Computer Science</p>
							<p className="my-1 text-sm font-medium">Lovely Professional University</p>
							<p className="text-sm">Grade: 65.0%</p>
						</div>
						<Image
							src="/bennett_logo.png"
							alt="Bennett Logo"
							width={100}
							height={100}
							title="Lovely Professional University"
							onClick={() => {
								window.open('https://www.lpu.in/', '_blank');
							}}
							className="object-contain hover:cursor-pointer"
						/>
					</div>
					
				</Slide>
			</div>
		</div>
	);
}
