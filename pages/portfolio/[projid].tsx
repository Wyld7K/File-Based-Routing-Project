import { useRouter } from 'next/router';

const PortfolioProjectPage: React.FC = () => {
	const router = useRouter();
	console.log(router.query);

	return (
		<div>
			<h1>Portfolio Project Page</h1>
		</div>
	);
};

// Priority routing to concrete pages. For instance list page in portfolio

export default PortfolioProjectPage;
