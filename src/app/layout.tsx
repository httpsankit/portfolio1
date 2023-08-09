import './globals.css';

export const metadata = {
	title: 'Ankit Kumar',
	description: "Ankit Kumar's portfolio website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="icon.png" />
			</head>
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
