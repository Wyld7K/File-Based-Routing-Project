import path from 'path';
import { promises } from 'fs';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

type Product = {
	id: string;
	title: string;
};

// The GetStaticProps generic is used to specify that the props object returned by getStaticProps will have a property called data of type MyData.

// In summary, using the GetStaticProps generic type for the GetStaticProps function allows us to define the shape and type of the props object that the page component will receive and provide type
// checking for the component. In this case the defined shape & type is an array of is products (key) : value (type = Product --> Product[])
export const getStaticProps: GetStaticProps<{
	products: Product[];
}> = async () => {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	console.log(filePath);
	const jsonData = await promises.readFile(filePath);

	const { products } = JSON.parse(jsonData.toString());

	return {
		props: {
			products,
		},
		redirect: {
			destination: '/no-data',
		},
		notFound: true,
		revalidate: 10,
	};
};

// InferGetStaticPropsType is used to infer the type of the props returned by getStaticProps.

const Home: React.FC<
	InferGetStaticPropsType<typeof getStaticProps>
> = props => {
	console.log(props.products);
	return (
		<ul>
			{props.products.map(product => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

export default Home;
