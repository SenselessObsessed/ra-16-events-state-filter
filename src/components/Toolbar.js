import PropTypes from 'prop-types';

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

Toolbar.propTypes = {
	filters: PropTypes.array.isRequired,
	selected: PropTypes.string.isRequired,
	onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
