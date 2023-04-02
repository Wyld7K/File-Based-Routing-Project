import Link from 'next/link';
import { useRouter } from 'next/router';
const ClientsPage: React.FC = () => {
	const router = useRouter();

	const clients = [
		{ id: 'max', name: 'maxNAME' },
		{ id: 'man', name: 'manNAME' },
	];

	return (
		<div>
			<h1>Client Page</h1>
			<ul>
				{clients.map(client => (
					<li key={client.id}>
						<Link
							href={{
								// Same as FileSystem
								pathname: '/clients/[id]',
								// Concrete Value of query
								query: { id: client.id },
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientsPage;
