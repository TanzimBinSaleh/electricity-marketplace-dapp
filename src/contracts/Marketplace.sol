pragma solidity >=0.4.21 <0.6.0;

contract Marketplace {
    string public name;
    uint public electricityCount = 0;
    mapping(uint => electricity) public electricitys;

    struct electricity {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event electricityCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event electricityPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "electricity";
    }

    function createelectricity(string memory _name, uint _price) public {
        require(bytes(_name).length > 0);
        require(_price > 0);
        electricityCount ++;
        electricitys[electricityCount] = electricity(electricityCount, _name, _price, msg.sender, false);
        emit electricityCreated(electricityCount, _name, _price, msg.sender, false);
    }

    function purchaseelectricity(uint _id) public payable {
        electricity memory _electricity = electricitys[_id];
        address payable _seller = _electricity.owner;
        require(_electricity.id > 0 && _electricity.id <= electricityCount);
        require(msg.value >= _electricity.price);
        require(!_electricity.purchased);
        require(_seller != msg.sender);
        _electricity.owner = msg.sender;
        _electricity.purchased = true;
        electricitys[_id] = _electricity;
        address(_seller).transfer(msg.value);
        emit electricityPurchased(electricityCount, _electricity.name, _electricity.price, msg.sender, true);
    }
}
