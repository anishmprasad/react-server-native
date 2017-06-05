import React from 'react'
import { RootElement } from 'react-server'
import { RootProvider } from 'react-server-redux'
import Counter from '../../web/components/Counter'
import store from '../../app/store/store'

export default class CounterPage {
	getElements() {
		return [
			<RootProvider store={store}>
				<RootElement key={0}>
					<Counter
						value={store.getState()}
						onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
						onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
					/>
				</RootElement>
				<RootElement key={1}>
					<Counter
						value={store.getState()}
						onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
						onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
					/>
				</RootElement>
			</RootProvider>,
		]
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'Rearch'},
			{name: 'generator', content: 'Rearch'},
		]
	}
}