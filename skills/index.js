const defaultMovie = {
	title: ' ',
	director: {
		name: { first: ' ', last: ' ', },
		nation: ' ',
	}
}

const coped = {
	...defaultMovie,
	director: {
		...defaultMovie.director,
		name: { ...defaultMovie.director.name }
	},
}

console.log(coped)