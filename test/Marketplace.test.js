const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Marketplace', ([deployer, seller, buyer]) => {
  let marketplace

  before(async () => {
    marketplace = await Marketplace.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await marketplace.name()
      assert.equal(name, 'electricity')
    })
  })

  describe('electricitys', async () => {
    let result, electricityCount

    before(async () => {
      result = await marketplace.createelectricity('electricity', web3.utils.toWei('1', 'Ether'), { from: seller })
      electricityCount = await marketplace.electricityCount()
    })

    it('creates electricitys', async () => {
      // SUCCESS
      assert.equal(electricityCount, 1)
      const event =result.logs[0].args
      assert.equal(event.id.toNumber(), electricityCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'electricity', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, seller, 'owner is correct')
      assert.equal(event.purchased, false, 'purchased is correct')

      // FAILURE: electricity must have a name
      await await marketplace.createelectricity('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: electricity must have a price
      await await marketplace.createelectricity('electricity', 0, { from: seller }).should.be.rejected;
    })

    it('lists electricitys', async () => {
      const electricity = await marketplace.electricitys(electricityCount)
      assert.equal(electricity.id.toNumber(), electricityCount.toNumber(), 'id is correct')
      assert.equal(electricity.name, 'electricity', 'name is correct')
      assert.equal(electricity.price, '1000000000000000000', 'price is correct')
      assert.equal(electricity.owner, seller, 'owner is correct')
      assert.equal(electricity.purchased, false, 'purchased is correct')
    })

    it('sells electricitys', async () => {
      // Track the seller balance before purchase
      let oldSellerBalance
      oldSellerBalance = await web3.eth.getBalance(seller)
      oldSellerBalance = new web3.utils.BN(oldSellerBalance)

      // SUCCESS: Buyer makes purchase
      result = await marketplace.purchaseelectricity(electricityCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})

      // Check logs
      const event =result.logs[0].args
      assert.equal(event.id.toNumber(), electricityCount.toNumber(), 'id is correct')
      assert.equal(event.name, 'electricity', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, buyer, 'owner is correct')
      assert.equal(event.purchased, true, 'purchased is correct')

      // Check that seller received funds
      let newSellerBalance
      newSellerBalance = await web3.eth.getBalance(seller)
      newSellerBalance = new web3.utils.BN(newSellerBalance)

      let price
      price = web3.utils.toWei('1', 'Ether')
      price = new web3.utils.BN(price)

      const exepectedBalance = oldSellerBalance.add(price)

      assert.equal(newSellerBalance.toString(), exepectedBalance.toString())

 
      await marketplace.purchaseelectricity(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;      // FAILURE: Buyer tries to buy without enough ether
      await marketplace.purchaseelectricity(electricityCount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
      await marketplace.purchaseelectricity(electricityCount, { from: deployer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
      await marketplace.purchaseelectricity(electricityCount, { from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
    })

  })
})
