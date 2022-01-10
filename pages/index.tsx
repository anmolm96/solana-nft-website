import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { CopyBlock, dracula } from "react-code-blocks";
import { NFT } from "solana-nft";
import { FaGithub, FaCoffee, FaNpm } from "react-icons/fa";
import { IconContext } from "react-icons";

const genCode = () =>
  `// yarn add solana-nft
import { NFT } from "solana-nft"

<NFT id="<token_account_id>" />

// with optional props
<NFT id="<token_account_id>" height={600} width={600} style={{ borderRadius: "50%" }} />
`;

function Card({ title, description, footer, children }) {
  return (
    <div className="border border-accents-1	max-w-3xl w-full p rounded-md m-auto my-8">
      <div className="px-5 py-4">
        <h3 className="text-2xl mb-1 font-medium text-white">{title}</h3>
        <p className="text-accents-5 text-white">{description}</p>
        {children}
      </div>
      <div className="border-t border-accents-1 bg-primary-2 p-4 text-accents-3 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  const [nftToken, setNftToken] = useState(
    "HeVXJCURxNSjkXESJvnofvmxZ3bAziepJWLk5EfqEt3y"
  );
  return (
    <IconContext.Provider value={{ color: "white", size: "24px" }}>
      <Head>
        <title>Solana NFT</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="bg-black">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
              Solana NFT
            </h1>
            <p className="mt-5 text-xl text-accents-6 sm:text-center sm:text-2xl max-w-2xl m-auto">
              A react component to embed NFTs on the Solana chain
            </p>
          </div>
          <div className="p-2">
            <Card
              title="Easy to Integrate"
              description="Install today in 2 lines of code"
              footer={
                <CopyBlock
                  text={genCode()}
                  language="jsx"
                  showLineNumbers={false}
                  theme={dracula}
                  codeBlock={true}
                />
              }
            >
              <div className="mt-2 flex cursor-pointer">
                <a
                  href="https://github.com/anmolm96/solana-nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.npmjs.com/package/solana-nft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaNpm className="ml-8" />
                </a>
                <a
                  href="https://wagmi.bio/anmol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCoffee className="ml-8" />
                </a>
              </div>
            </Card>
          </div>
          <div className="p-2">
            <Card
              title="Try it out"
              description="Enter Solana NFT Token Address ID:"
              footer={
                <div className="flex align-center justify-center">
                  <NFT
                    id={nftToken}
                    height={300}
                    width={300}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
              }
            >
              <input
                value={nftToken}
                onChange={(e) => setNftToken(e.target.value)}
                className="w-full p-1 mt-2"
              />
            </Card>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Home;
