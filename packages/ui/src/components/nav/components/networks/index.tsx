import SingleNetwork from '@/components/nav/components/networks/components/single_network';
import useStyles from '@/components/nav/components/networks/styles';
import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';
import lorenzoIconDark from 'shared-utils/assets/icons/lorenzo-dark.svg?url';

const lorenzoChainInfo = {
  name: 'Lorenzo',
  mainnet: [],
  testnet: [
    {
      name: 'Testnet',
      url: 'https://cosmscan-testnet.lorenzo-protocol.xyz',
      chainId: 'lorenzod_83291-1',
    },
  ],
  retired: [],
  other: [],
};
const Networks: FC<ComponentDefault> = ({ className }) => {
  const { networks } = useBigDipperNetworks();
  const { classes } = useStyles();

  return (
    <div className={className}>
      <div className={classes.networkList}>
        <Image
          width={0}
          height={0}
          className={classes.img}
          src={lorenzoIconDark}
          alt="logo"
          unoptimized
        />
        <div className="network">
          <Typography variant="h4">Lorenzo</Typography>
          {lorenzoChainInfo.mainnet.map((network) => (
            <SingleNetwork
              className="mainnet"
              key={network.chainId}
              url={network.url}
              name={network.name}
              chainId={network.chainId}
            />
          ))}
          {lorenzoChainInfo.testnet.map((network) => (
            <SingleNetwork
              className="testnet"
              key={network.chainId}
              url={network.url}
              name={network.name}
              chainId={network.chainId}
            />
          ))}
          {lorenzoChainInfo.retired.map((network) => (
            <SingleNetwork
              className="retired"
              key={network.chainId}
              url={network.url}
              name={network.name}
              chainId={network.chainId}
            />
          ))}
          {lorenzoChainInfo.other.map((network) => (
            <SingleNetwork
              className="other"
              key={network.chainId}
              url={network.url}
              name={network.name}
              chainId={network.chainId}
            />
          ))}
        </div>
      </div>
      {/* {networks.map((x) => (
        <div className={classes.networkList} key={x.name}>
          <Image width={0} height={0} className={classes.img} src={x.logo} alt="logo" unoptimized />
          <div className="network">
            <Typography variant="h4">{x.name}</Typography>
            {x.mainnet.map((network) => (
              <SingleNetwork
                className="mainnet"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.testnet.map((network) => (
              <SingleNetwork
                className="testnet"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.retired.map((network) => (
              <SingleNetwork
                className="retired"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
            {x.other.map((network) => (
              <SingleNetwork
                className="other"
                key={network.chainId}
                url={network.url}
                name={network.name}
                chainId={network.chainId}
              />
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Networks;
