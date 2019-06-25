import * as React from 'react';
import styles from './Board.module.scss';
import List from '../components/List/List';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

class Board extends React.Component {
	state = {};

	componentDidMount() {}

	render() {
		const { name,items, index, onButtonClick, onAddClick, onInChangeInsert,onInChangeRemove,Inputinsert, Inputdelete, onRemClick} = this.props;
		return (
			<div className={styles.main}>	
				<h1>{name}<Button type={'forward'} onClick={onButtonClick}/></h1>	
				<p className={styles.parragraph}>	
				<List items={items} index={index} />
				<div className={styles.add_del}>
					<Input value={Inputinsert} onChange={onInChangeInsert} />
					<Button type={'add'} onClick={onAddClick} />
				</div>
				<div className={styles.add_del}>
					<Input value={Inputdelete} onChange={onInChangeRemove}/>
					<Button type={'remove'} onClick={onRemClick} />
				</div>
				</p>
			</div>
		);
	}
}

export default Board;
