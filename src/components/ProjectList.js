import PropTypes from 'prop-types';

function ProjectList({ data, selected }) {
	return (
		<div
			className={selected
				.split(' ')[0]
				.replace(selected[0], selected[0].toLowerCase())}
		>
			{data.map((project, idx) => {
				return (
					<img
						className='card'
						src={project.img}
						alt={project.category}
						key={idx}
					/>
				);
			})}
		</div>
	);
}

ProjectList.propTypes = {
	data: PropTypes.array.isRequired,
	selected: PropTypes.string.isRequired,
};

export default ProjectList;
