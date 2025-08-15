import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description || "A modern portfolio built with Next.js and TailwindCSS showcasing projects, skills, and experience."} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Next.js & TailwindCSS Portfolio Project',
	keywords: 'next.js, react, web, ui',
	keywords: 'Simple and multi-page next.js and react application',
};

export default PagesMetaHead;
