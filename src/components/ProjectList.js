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

export default ProjectList;
