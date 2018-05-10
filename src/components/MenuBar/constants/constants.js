

export const MENUBAR_SECTION_STRUCTURE = ['Dataset Selection', 'Clustering Options', 'Filtering Options', 'Color By'];

export const SECTION_OPTIONS_STRUCTURE = {
	//drop downs
	'Dataset Selection': ['Type of Student', 'Graduating Semester'], 
	'Clustering Options': ['Division Level', 'Course Details'],
	'Filtering Options': ['Filtering Logic', 'Major(s)', 'Minor(s)'],
	//buttons (no drop down)
	'Color By': ['Same Color', 'Academic Div', 'Ethnicity', 'Num of Majors', 'College', 'Time to Degree'],
};

export const GRADUATING_SEMESTERS = ['placeholder'];

export const MAJORS = ['placeholder'];

export const MINORS = ['placeholder'];

export const OPTIONS = {
	'Type of Student': ['Freshman Entrants', 'Transfer Students'],
	'Graduating Semester': GRADUATING_SEMESTERS,
	'Division Level': ['Upper', 'Lower'],
	'Course Details': ['Subject', 'Numbers'],
	'Filtering Logic': ['and', 'xor'],
	'Major(s)': MAJORS,
	'Minor(s)': MINORS,
}


export const ABOUT_OPTIONS = {
	'Freshman Entrants': 'Consider only the dataset of students who were accepted into UC Berkeley as freshman (i.e. not transfer students).',
	'Transfer Students': 'Consider only the dataset of students who were not accepted into UC Berkeley as freshman.',
	//too many options, skip granularity
	'Graduating Semester': 'Consider only the students who graduated in a specific semester/specific subset of semesters.',
	'Upper': 'Plot student based on the courses they took whose course numbers were >= 100.',
	'Lower': 'Plot student based on the courses they took whose course numbers were <= 100.',
	'Subject': 'Plot student based on the subjects of the courses they took.',
	'Numbers': 'Plot student based on the course numbers of the courses they took.', 
	'and': 'View the subset of students that graduated with all majors and minors selected.',
	'xor': 'View the subset students that graduated with none of the majors and minors selected.',
	//too many options, skip granularity
	'Major(s)': 'Filter by major (dependent on filtering logic).',
	//too many options, skip granularity
	'Minor(s)': 'Filter by minor (dependent on filtering logic).',
	'Same Color': 'Color all students displayed on the screen the same color.',
	'Academic Div': 'Color students based on their respective colleges (or potentially, a division within a college).',
	'Ethnicity': 'Color students based on their ethnicity.',
	'Num of Majors': "Color students based on the number of majors they're taking.",
	'College': 'Color students based on college.',
	'Time to Degree': 'Color students based of the amount of time from acceptance to graduation.',
}
