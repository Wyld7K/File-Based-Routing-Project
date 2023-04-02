import Link from 'next/link';
export default function Home() {
	return (
		<>
			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">Clients</Link>
				</li>
			</ul>
			<h1>Home</h1>
		</>
	);
}
