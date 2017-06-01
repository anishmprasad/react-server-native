module.exports = {
	routes: {
		CounterPage: {
			path: ['/'],
			method: 'get',
			page: '../../pages/counter-app/index',
		},
		HelloPage: {
			path: ['/hello'],
			method: 'get',
			page: '../../pages/counter-app/hello',
		},
	},
}
