import { useRouter } from 'next/router';
const SelectedClientProjectPage: React.FC = () => {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h1>PROJ PAGE</h1>
		</div>
	);
};

export default SelectedClientProjectPage;
