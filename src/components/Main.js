import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <h1>Add Electricity</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          const name = this.electricityName.value
          const price = window.web3.utils.toWei(this.electricityPrice.value.toString(), 'Ether')
          this.props.createelectricity(name, price)
        }}>
          <div className="form-group mr-sm-2">
            <input
              id="electricityName"
              type="text"
              ref={(input) => { this.electricityName = input }}
              className="form-control"
              placeholder="Name"
              required />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="electricityPrice"
              type="text"
              ref={(input) => { this.electricityPrice = input }}
              className="form-control"
              placeholder="Price"
              required />
          </div>
          <button type="submit" className="btn btn-primary" style={{backgroundColor:"#1d3557"}}>Add </button>
        </form>
        <p>&nbsp;</p>
        <h1>Buy Electricity</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="electricityList">
            { this.props.electricitys.map((electricity, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{electricity.id.toString()}</th>
                  <td>{electricity.name}</td>
                  <td>{window.web3.utils.fromWei(electricity.price.toString(), 'Ether')} Eth</td>
                  <td>{electricity.owner}</td>
                  <td>
                    { !electricity.purchased
                      ? <button
                          className="btn btn-primary" style={{backgroundColor:"#1d3557"}}
                          name={electricity.id}
                          value={electricity.price}
                          onClick={(event) => {
                            this.props.purchaseelectricity(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
