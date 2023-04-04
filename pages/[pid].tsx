import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { ParsedUrlQuery } from 'querystring';

import path from 'path';
import { promises } from 'fs';

import React from 'react';

import { Product } from './index';

const ProductDetailPage: React.FC<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ product }) => {
	console.log(product);
	return (
		<React.Fragment>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
		</React.Fragment>
	);
};

export const getStaticProps: GetStaticProps<{
	product: Product;
}> = async context => {
	const { params } = context;

	const productID = (params as ParsedUrlQuery).pid;

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

	const jsonData = await promises.readFile(filePath);

	const { product } = JSON.parse(jsonData.toString()).products.find(
		(product: Product) => product.id === productID
	);

	return {
		props: {
			product,
		},
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { pid: 'p1' } },
			{ params: { pid: 'p2' } },
			{ params: { pid: 'p3' } },
		],
		fallback: false,
	};
};

export default ProductDetailPage;
