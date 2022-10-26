const initState = {
	projects: [
		{ id: "1", title: "Assignment one", content: "blah blah" },
		{ id: "2", title: "Assignment one", content: "blah blah" },
		{ id: "3", title: "Assignment one", content: "blah blah" },
	],
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
