import React from 'react';
import styles from './App.module.scss';
import Board from './Board/Board';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		family: {
			name:'Family',
			items: [ 'Dulce', 'Maru', 'Peter', 'Vilma' ],
			index: 0,
			insert:'',
			delete:''
		},
		sports: {
			name:'Sports',
			items: [ 'Futbol', 'Beisbol', 'Basquetbol' ],
			index: 0,
			insert:'',
			delete:''
		},
		food:  {
			name:'Food',
			items: [ 'Hamburguer', 'Pizza', 'Sushi' ],
			index: 0,
			insert:'',
			delete:''
		},
		drinks: {
			name:'Drinks',
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
			if(draft[object].insert !== '')
			{
				draft[object].items = draft[object].items.concat(draft[object].insert);
			}
			console.log('TCL: App -> nextState -> draft.family.items', draft[object].items);
			draft[object].insert='';
		});
		this.setState(nextState);
	};

	onRemButtonClick = (object) => {
		const nextState = produce(this.state, (draft) => {
		if(draft[object].delete !== '')
		{
			const toremove=draft[object].delete - 1;
			draft[object].items.splice(toremove, 1);
		}		
		console.log('TCL: App -> nextState -> draft.family.items', draft[object].items);
		draft[object].delete='';
		});
		this.setState(nextState);
	};

	onInputChangeInsert = (event,object) => {
		const value = event.target.value;
		console.log('TCL: App -> onInputChangeInsert -> value', value);
		const nextState = produce(this.state, (draft) => {
		draft[object].insert = value;
		});
		this.setState(nextState);
	};

	onInputChangeRemove = (event,object) => {
		const value = event.target.value;
		const nextState = produce(this.state, (draft) => {
		draft[object].delete = value;
		console.log('TCL: App -> onInputChangeRemove -> value', draft[object].delete);
		});
		
		this.setState(nextState);
	};

	render() {
		const { family, sports, food, drinks} = this.state;
		return (
			<div>
				<p className={styles.title}>TAREA 1: LISTAS</p>
				<div className={styles.container_boards}>
					<Board name={family.name} items={family.items} index={family.index} Inputinsert={family.insert} Inputdelete={family.delete} onAddClick={()=>{this.onAddButtonClick('family')}} onRemClick={()=>{this.onRemButtonClick('family')}} onInChangeInsert={(event)=>{this.onInputChangeInsert(event,'family')}} onInChangeRemove={(event)=>{this.onInputChangeRemove(event,'family')}} onButtonClick={() => this.onHandleButton('family')} />
					<Board name={sports.name} items={sports.items} index={sports.index} Inputinsert={sports.insert} Inputdelete={sports.delete} onAddClick={()=>{this.onAddButtonClick('sports')}} onRemClick={()=>{this.onRemButtonClick('sports')}} onInChangeInsert={(event)=>{this.onInputChangeInsert(event,'sports')}} onInChangeRemove={(event)=>{this.onInputChangeRemove(event,'sports')}} onButtonClick={() => this.onHandleButton('sports')} />
					<Board name={food.name} items={food.items} index={food.index} Inputinsert={food.insert} Inputdelete={food.delete} onAddClick={()=>{this.onAddButtonClick('food')}} onRemClick={()=>{this.onRemButtonClick('food')}} onInChangeInsert={(event)=>{this.onInputChangeInsert(event,'food')}} onInChangeRemove={(event)=>{this.onInputChangeRemove(event,'food')}} onButtonClick={() => this.onHandleButton('food')} />
					<Board name={drinks.name} items={drinks.items} index={drinks.index} Inputinsert={drinks.insert} Inputdelete={drinks.delete} onAddClick={()=>{this.onAddButtonClick('drinks')}} onRemClick={()=>{this.onRemButtonClick('drinks')}} onInChangeInsert={(event)=>{this.onInputChangeInsert(event,'drinks')}} onInChangeRemove={(event)=>{this.onInputChangeRemove(event,'drinks')}} onButtonClick={() => this.onHandleButton('drinks')} />
				</div>
				{
					<p className={styles.result}>
						<table>
						<tr><td>Resultados:</td></tr>
						<tr><td>Family: {family.items.length}</td><td>Sports: {sports.items.length}</td></tr>
						<tr><td>Foods: {food.items.length}</td><td>Drinks: {drinks.items.length}</td></tr>
						</table>
					</p>
				}
			</div>
		);
	}
}

export default App;
