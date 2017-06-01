import React from 'react'
import { RootElement } from 'react-server'
import { RootProvider } from 'react-server-redux'
import store from '../../app/store/store'

export default class HelloPage {
	getElements() {
		return [
			<RootProvider store={store}>
				<RootElement key={0}>
					<p>hello</p>
				</RootElement>
			</RootProvider>,
		]
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'Hello'},
			{name: 'generator', content: 'Hello'},
		]
	}
}
