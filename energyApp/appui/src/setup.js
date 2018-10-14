import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
let energyABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getReturn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "invest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_investment",
				"type": "uint256"
			},
			{
				"name": "_ID",
				"type": "uint256"
			},
			{
				"name": "_prevElec",
				"type": "uint256"
			},
			{
				"name": "_currElec",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
let energyAddress = "0xb05df6af0073fd592d8f6ee3d5c8ac0ff12e3967";
web3.eth.defaultAccount = web3.eth.accounts[0];

const energyContract = web3.eth.contract(energyABI).at(energyAddress);
export {energyContract};