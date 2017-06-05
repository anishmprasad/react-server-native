module.exports = {
	routes: {
		CounterPage: {
			path: ['/'],
			method: 'get',
			page: '../../containers/counter/index',
		},
		HelloPage: {
			path: ['/hello'],
			method: 'get',
			page: '../../containers/helloworld/hello',
		},
	},
}
