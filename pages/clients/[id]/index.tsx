import { useRouter } from 'next/router';
const ClientProjects: React.FC = () => {
	const router = useRouter();
	const loadProjectHandler = (): void => {
		// load data..

		// essentaily a programatic link component
		router.push({
			pathname: '/clients/[id]/[projectid]',
			query: { id: 'max', projectid: 'projectA' },
		});
	};
	return (
		<div>
			<h1>Projects of Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
};
export default ClientProjects;
