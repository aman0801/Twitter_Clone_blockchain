//  const hre = require('hardhat')

// async function main(){
//   const ProfileImageMinterFactory = await hre.ethers.getContractFactory(
//     'ProfileImageNfts',    
//   )
//   // const profileImageContract = await profileImageFactory.deploy()
//   await ProfileImageContract.deployed()

//   console.log(
//    'Profile Image Miner contract deployed to',
//     profileImageContract.address,
//   )
// }

// ;(async()=>{
//   try{
//     await main()
//     process.exit(0)

//   }catch(error){
//      console.error(error)
//     process.exit(1)
//   }
// })()

//Code
const main = async () => {
  const profileImageFactory = await hre.ethers.getContractFactory(
    'ProfileImageNfts',
  )
  const profileImageContract = await profileImageFactory.deploy()

  await profileImageContract.deployed()

  console.log('Profile Image Minter deployed to:', profileImageContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
