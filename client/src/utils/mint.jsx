import { useState } from 'react';

import config from '../config';


const MintNFT = ({ Tezos, amount, metadata }) => {
  const [isMinting, setIsMinting] = useState(false);

  const handleMinting = async () => {
    try {
      setIsMinting(true);
      const contract = await Tezos.wallet.at(config.contractAddress);
      let bytes = '';
      for (let i = 0; i < metadata.length; i++) {
        bytes += metadata.charCodeAt(i).toString(16).slice(-4);
      }
      console.log(bytes)
      console.log(contract)
      const op = await contract.methods.mint(amount, bytes).send();
      await op.confirmation();
      setIsMinting(false);
    } catch (error) {
      setIsMinting(false);
      console.log(error);
    }
  };

  return (
    <button className='mt-5 h-8 flex-initial relative rounded-md ml-12 text-[14px] text-white text-center w-2/3   transition ease-in-out delay-150 bg-[#f94449] hover:-translate-y-1 hover:scale-110 hover:bg-[#de0a26] duration-300' onClick={handleMinting} disabled={isMinting}>
      {isMinting ? 'Minting...' : 'Mint NFT'}
    </button>
  );
};

export default MintNFT;