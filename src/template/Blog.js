import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Instagram from '@mui/icons-material/Instagram';

const sections = [
];

const mainFeaturedPost = {
	title: 'Time to talk about mental health',
	description:
		`It's time to talk about the importance of mental health. We look after our bodies, so why not our minds? Don't ignore the signs, everyone is entitled to sound mental health. 

Reach out to us today and consult with our panel of expert psychologists. We are here to listen and to help!`,
	image: 'https://raw.githubusercontent.com/adhirajgupta/GenZenZone/main/public/logo%204..png',
		// image: require('../logo 4..png'),
	imageText: 'main image description',
	linkText: 'Fill up the Google Form',
};

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Nov 12',
		description:
			'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random/?blog/',
		imageLabel: 'Image Text',
	},
	{
		title: 'Meet our founders',
		date: 'Nov 11',
		description:
			'Explore more about our team!',
		image: 'https://source.unsplash.com/random/?blog/',
		imageLabel: 'Image Text',
	},
];


const sidebar = {
	title: '',
	description:"",
		// 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	archives: [
		// { title: 'March 2020', url: '#' },
		// { title: 'February 2020', url: '#' },
		// { title: 'January 2020', url: '#' },
		// { title: 'November 1999', url: '#' },
		// { title: 'October 1999', url: '#' },
		// { title: 'September 1999', url: '#' },
		// { title: 'August 1999', url: '#' },
		// { title: 'July 1999', url: '#' },
		// { title: 'June 1999', url: '#' },
		// { title: 'May 1999', url: '#' },
		// { title: 'April 1999', url: '#' },
	],
	social: [
		{ name: 'Instagram', icon: Instagram },
	],
};

const theme = createTheme();

export default function Blog() {





	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="GenZenZone" sections={sections} />
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title="Meet our founders" />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
			<Footer
				title="Footer"
				description="Something here to give the footer a purpose!"
			/>
		</ThemeProvider>
	);
}
