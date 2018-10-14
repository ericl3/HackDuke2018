pragma solidity ^0.4.4;

contract Energy {
    address company;
    uint userId;
    address investor;
    uint amountReceive; /// how much they receive after investment
    uint initialInvest; ///how much they intially invested
    bool paid; ///how much we will pay the user
    int improvement;

    uint prevElec;
    uint currElec;

    mapping(address=>uint) balances;

    constructor(uint _investment, uint _ID, uint _prevElec, uint _currElec) public {
        initialInvest = _investment;
        paid = false;
        userId = _ID;
        investor = msg.sender;
        prevElec = _prevElec;
        currElec = _currElec;
    }

    // function calcImprovement() private view returns (uint) {
    //     return ((prevElec - currElec) / prevElec);
    // }

    function getReturn() returns (uint){
        if (((prevElec - currElec) / prevElec) <= 0) {
            return (initialInvest * ((currElec - prevElec) / prevElec));
        }
        else {
            return (1+((prevElec - currElec) / prevElec) * initialInvest);
        }
    }

    function validate(uint _userID) private view {
        ///this function will use an API to retrieve most recent energy data for user
        ///will implement this function when partnered with the company
    }

    function makePayment() private {
        balances[investor] = getReturn();
        balances[company] -= getReturn();
    }

    function deposit() payable{
        balances[investor]+=msg.value;
    }
    function invest(){
        balances[investor]-= msg.value;
        balances[company]+=msg.value;
    }

}
