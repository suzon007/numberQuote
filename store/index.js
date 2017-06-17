export const state = () => ({
    page: ''
})

export const mutations = {
    'SET_PAGE' (state, page) {
		state.page = page
	},
}

export const actions = {
	selectedPage: ({commit}, page) => {
		commit('SET_PAGE', page)
	},
}

export const getters = {
	page: state => {
		return state.page
	},
}
