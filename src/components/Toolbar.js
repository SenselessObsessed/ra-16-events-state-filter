function Toolbar({ filters, selected, onSelectFilter }) {
	return (
		<div>
			{filters.map(btn => {
				return (
					<button
						className={btn === selected ? 'button active' : 'button'}
						key={btn}
						onClick={onSelectFilter}
					>
						{btn}
					</button>
				);
			})}
		</div>
	);
}

export default Toolbar;
