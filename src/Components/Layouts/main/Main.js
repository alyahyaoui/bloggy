import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
    height: "100vh",
    backgroundColor:'#262825'
  },
	grid: {
		background: '#ff5',
	},
	paper: {
		backgroundColor: '#ccc',
	},
});
const Main = () => {
	const classes = useStyles();

	const articles = [
		'first',
		'second',
		'third',
		'fourth',
		' fifth',
		'sixth',
	].map((article) => {
		return (
			<Grid
				item
				key={article}
				xs={12}
				md={8}
				className={classes.grid}
				justify="center"
			>
				<Paper m="auto" className={classes.paper}>
					<h1 m="auto">Hello</h1>
				</Paper>
			</Grid>
		);
	});
	return (
		<div>
			<Grid
				container
				className={classes.root}
				spacing={2}
        justify="center"
        alignItems="center"
				
			>
				{articles}
			</Grid>
		</div>
	);
};

export default Main;
