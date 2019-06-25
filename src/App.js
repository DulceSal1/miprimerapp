import React from 'react';
import styles from './App.module.scss';
import Board from './Board/Board';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		family: {
			items: [ 'Dulce', 'Maru', 'Peter', 'Vilma' ],
			index: 0,
			insert:'',
			delete:''
		},
		sports: {
			items: [ 'Futbol', 'Beisbol', 'Basquetbol' ],
			index: 0,
			insert:'',
			delete:''
		},
		food:  {
			items: [ 'Hamburguer', 'Pizza', 'Sushi' ],
			index: 0,
			insert:'',
			delete:''
		},
		drinks: {
			items: [ 'Soda', 'Coffe' ],
			index: 0,
			insert:'',
			delete:''
		}
	};

	onHandleButton = (object) => {
		const nextState = produce(this.state, (draft) => {
			if (draft[object].items.length > draft[object].index + 1) draft[object].index = draft[object].index + 1;
			else draft[object].index = 0;
		});
		this.setState(nextState);
	};

	onAddButtonClick = (object) => {
		const nextState = produce(this.state, (draft) => {
			draft[object].items = draft[object].items.concat(draft[object].insert);
			console.log('TCL: App -> nextState -> draft.family.items', draft[object].items);
			draft[object].insert='';
		});
		this.setState(nextState);
	};

	onRemButtonClick = (object) => {
		const nextState = produce(this.state, (draft) => {
		const toremove=draft[object].input ;
				draft[object].items.splice(toremove, 1);
			console.log('TCL: App -> nextState -> draft.family.items', draft[object].items);
			draft[object].input='';
		});
		this.setState(nextState);
	};

	onInputChangeInsert = (event,object) => {
		const value = event.target.value;
		console.log('TCL: App -> onInputChange -> value', value);
		const nextState = produce(this.state, (draft) => {
		draft[object].insert = value;
		});
		this.setState(nextState);
	};

	onInputChangeRemove = (event,object) => {
		const value = event.target.value;
		console.log('TCL: App -> onInputChange -> value', value);
		const nextState = produce(this.state, (draft) => {
		draft[object].delete = value;
		});
		this.setState(nextState);
	};

	render() {
		const { family, sports, food, drinks} = this.state;
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<div className={styles.container_boards}>
					<Board items={family.items} index={family.index} Inputinsert={family.insert} Inputdelete={family.delete} onAddClick={()=>{this.onAddButtonClick('family')}} onRemClick={()=>{this.onRemButtonClick('family')}} onInChangeInsert={(event)=>{this.onInputChangeInsert(event,'family')}} onInChangeRemove={(event)=>{this.onInputChangeRemove(event,'family')}} onButtonClick={() => this.onHandleButton('family')} />
					<Board items={sports.items} index={sports.index} onButtonClick={() => this.onHandleButton('sports')} />
					<Board items={food.items} index={food.index} onButtonClick={() => this.onHandleButton('food')} />
					<Board items={drinks.items} index={drinks.index} onButtonClick={() => this.onHandleButton('drinks')} />
				</div>
				{
					<p className={styles.result}>
						Resultado: <br />
						<label> {family.items[family.index]} </label>
						<br />
						<label> {sports.items[sports.index]} </label>
						<br />
						<label> {food.items[food.index]} </label>
						<br />
						<label> {drinks.items[drinks.index]} </label>
						<br />
					</p>
				}
			</div>
		);
	}
}

export default App;
