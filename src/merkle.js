import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

const MainMerkle = async() =>{
  const res1 = await fetch("http://localhost:3000/tree")
  const tree = await res1.json();

  let existedTree;
  try {
      existedTree = StandardMerkleTree.load(tree);
  } catch (error) {
      existedTree = null;
  }
  
  const valuesArray = [];
  
  if (existedTree) {
      for (const v of existedTree.entries()) {
          valuesArray.push(v);
      }
  }
  
  const res = await fetch("http://localhost:3000/userInput")
  const userData  = await res.json();

  console.log(userData[0]);

  const registeredUser = userData[0];
  
  valuesArray.push([registeredUser.address, registeredUser.fname, registeredUser.lname, registeredUser.email, registeredUser.username, registeredUser.mobileno, registeredUser.country]);
  
  const merkelTree = StandardMerkleTree.of(valuesArray, ["address", "string", "string", "string", "string", "uint256", "string"]);
  console.log(merkelTree.render());  //Visual Representation of the tree
  
  const root = merkelTree.root;
  console.log("Merkle Root: ", root);
  
  fs.writeFileSync("tree.json", JSON.stringify(merkelTree.dump()));

  await fetch("http://localhost:3000/tree",{
    method : 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(merkelTree)
  })
  
  fs.writeFileSync("root.json", JSON.stringify(root));
  await fetch("http://localhost:3000/root",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      root
    })
  })
  
  const loadedTree = StandardMerkleTree.load(JSON.parse(fs.readFileSync("tree.json", "utf8")));
  
  for (const [i, v] of loadedTree.entries()) {
      if (v[0] === '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4') {
          const proof = loadedTree.getProof(i);
  
          // Write the proof of given user address into the file
          fs.writeFileSync("proof.json", JSON.stringify(proof));
  
  
          console.log('Value:', v);
          console.log('Proof:', proof);
      }
  }
}

export default MainMerkle


