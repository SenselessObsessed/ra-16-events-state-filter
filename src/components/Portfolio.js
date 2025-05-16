import { useState } from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';

function Portfolio({ data }) {
	const [projectList, setProjectList] = useState(data);
	const [selected, setSelected] = useState('All');

	const filter = event => {
		if (event.target.classList.contains('active')) return;

		setSelected(event.target.innerText);

		if (event.target.innerText === 'All') {
			setProjectList(data);
		} else {
			setProjectList(
				data.filter(card => card.category === event.target.innerText)
			);
		}
	};

	return (
		<>
			<Toolbar
				filters={['All', 'Websites', 'Flayers', 'Business Cards']}
				selected={selected}
				onSelectFilter={filter}
			/>
			<ProjectList data={projectList} selected={selected} />
		</>
	);
}

Portfolio.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Portfolio;
