const { StandardMerkleTree } = require("@openzeppelin/merkle-tree");
const fs = require("fs");

// Try to load the existing Merkle tree; if it doesn't exist, initialize an empty tree
// fetchData from json server

const MainMerkle = () => {
  // const getTreeData = async () => {
  //   const treeData = fetch("http://localhost:3000/tree")
  //   return treeData;
  // }
  // const treeData = getTreeData();

  // let existedTree;
  // try {
  //   existedTree = StandardMerkleTree.load(treeData); //fetch data from exiting tree
  // } catch (error) {
  //   existedTree = null;
  // }

  // Array to store the leaf node data
  // const valuesArray = [];

  // If the tree exists, store its leaf node data in the array
  // if (existedTree) {
  //   for (const [i, v] of existedTree.entries()) {
  //     valuesArray.push(v);
  //   }
  // }

  // get the User input data 
  let userData;
  fetch("http://localhost:3000/userInput", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => JSON.stringify(data))


  // Read the registered user data from input.json
  // const registeredUser = userData;

  // Add input json data to the valueArray
  // valuesArray.push([registeredUser.address, registeredUser.fname, registeredUser.lname, registeredUser.email, registeredUser.username, registeredUser.mobileno, registeredUser.country]);

  // // Build the merkle tree using given data set
  // const merkelTree = StandardMerkleTree.of(valuesArray, ["address", "string", "string", "string", "string", "uint256", "string"]);
  // console.log(merkelTree.render());  //Visual Representation of the tree

  // // Get the merkle root
  // const root = merkelTree.root;
  // console.log("Merkle Root: ", root);

  // // Write the tree into the file
  // fs.writeFileSync("tree.json", JSON.stringify(merkelTree.dump()));

  // // Write the root into the file
  // fs.writeFileSync("root.json", JSON.stringify(root));

  // Load the tree from the file contains the tree
  // const loadedTree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json", "utf8")));

  // Generate the proof for each leaf data
  // for (const [i, v] of loadedTree.entries()) {
  //   if (v[0] === '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4') {
  //     const proof = loadedTree.getProof(i);

  //     // Write the proof of given user address into the file
  //     fs.writeFileSync("proof.json", JSON.stringify(proof));
  //     console.log('Value:', v);
  //     console.log('Proof:', proof);
  //   }
  // }
}

export default MainMerkle;

