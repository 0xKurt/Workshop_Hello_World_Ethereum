export const CONTRACT_ADDRESS = '0x4f34a4F58d91Cf067A81947dfc672d4BE2811b83';

export const CONTRACT_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_someString",
				"type": "string"
			}
		],
		"name": "setSomeString",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "someString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
