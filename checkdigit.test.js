const { checkdigit } = require('./checkdigit')

describe('checkdigit()', () => {
	it('correctly approves valid cards', () => {
		expect(checkdigit('0000000000000000')).toEqual(true)
		expect(checkdigit('4929533822593950')).toEqual(true)
		expect(checkdigit('5517726464603534')).toEqual(true)
	})

	it('correctly rejects invalid cards', () => {
		expect(checkdigit('0000000000000001')).toEqual(false)
		expect(checkdigit('4929533822593957')).toEqual(false)
		expect(checkdigit('5517726464603539')).toEqual(false)
	})
})
