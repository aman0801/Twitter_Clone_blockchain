const hre = require('hardhat')

async function main(){
  const ProfileImageMinterFactory = await hre.ethers.getContractFactory(
    'ProfileImageNFTs',    
  )
  await ProfileImageContract.deployed()

  console.log(
   'Profile Image Miner contract deployed to',
    profileImageContract.address,
  )
}

;(async()=>{
  try{
    await main()
  }catch(error){
     console.error(error)
    process.exit(1)
  }
})()