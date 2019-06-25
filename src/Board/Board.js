import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

class Board extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		const { items, index, onButtonClick, onAddClick, onInChangeInsert,onInChangeRemove,Inputinsert, Inputdelete, onRemClick} = this.props;
		return (
			<div className={styles.main}>
				<div className={styles.container_add}>
					<Input value={Inputinsert} onChange={onInChangeInsert} />
					<Button label={'Agregar'} onClick={onAddClick} />
				</div>
				<List items={items} index={index} />
				<Button label={'Siguiente'} onClick={onButtonClick} />
				<div className={styles.container_add}>
					<Input value={Inputdelete} onChange={onInChangeRemove}/>
					<Button label={'Quitar'} onClick={onRemClick} />
				</div>
			</div>
		);
	}
}

export default Board;
