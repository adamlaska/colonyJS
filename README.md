<div align="center">
  <img src="media/colonyJS_color.svg" width="600" />
</div>

# colonyJS

colonyJS is a JavaScript library with a simple and predictable interface for application-layer integrations with the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) smart contracts. To learn more about Colony, you can visit [colony.io](https://colony.io/) or read the [White Paper](https://colony.io/whitepaper.pdf).

This software is in ALPHA state. The API is subject to change (but shouldn't really).

## Documentation

The documentation is automatically generated using [TypeDoc](https://github.com/TypeStrong/typedoc). It's pretty alpha right now. You should check out the `getColonyNetworkClient` function in `ColonyNetworkClient` and the docs for the extended colony contracts `clients/Colony/ColonyClientVX`.

## Get Started

```ts
import { getColonyNetworkClient, Network } = from '@colony/colony-js';
import { Wallet } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';

// For local connections (run an Ethereum node on port 8545);
const provider = new JsonRpcProvider();

// Put in your local network address here (deployed ether router address)
const networkAddress = '0xdabbad00';

(async () => {
  // Get a wallet instance
  const wallet = new Wallet(
    // This is a private key that is generated by the colony network ganache instance
    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',
    provider,
  );

  // Check out the logs to see the wallet address
  console.log('Wallet Address:', wallet.address);

  // Get a network client instance
  const networkClient = await getColonyNetworkClient(Network.Local, wallet, networkAddress)

  // Check out the logs to see the network address
  console.log('Network Address:', networkClient.address);

  // Get the colony client for the Meta Colony
  const colonyClient = await networkClient.getColonyClient(1);

  console.log('Meta Colony address:', colonyClient.address);
})()
  .then(() => process.exit())
  .catch(error => console.error(error));

```

## Contributing

We welcome all contributions to colonyJS! See [Contributing](https://github.com/JoinColony/colonyJS/blob/master/CONTRIBUTING.md) for more information.

## Development

### To release a new version

1) First, commit all your changes. Then run the tests:

```bash
npm test #just to be sure
```

2) Adjust the version in `package.json`

3) Let npm adjust the version in `package-lock.json`:

```bash
npm install
```

4) Commit the npm package files. Use the version set in the package.json (**make sure to follow the version pattern**):

```bash
git add pack*
git commit -m '2.0.1' # no `v`!
```

5) Tag the commit:

```bash
git tag v2.0.1 # here we use the `v`!
```

6) Push the changes and tags:

```bash
git push && git push --tags
```

7) Publish on npm:

```
npm publish --access=public 
```

Done 🎊

### To upgrade to a new colonyNetwork version

1) Add the version to `constants.ts` in `ColonyVersion`
2) Change the `CurrentVersion` variable to the one you just added
3) Add the git tag to `scripts/config.ts`
4) If needed: add new contracts that need clients to the `contractsToBuild` array in `scripts/build-contracts.ts`
5) Run
```bash
DISABLE_DOCKER=true npm run build-contracts -- -V=X
```

where `X` is the version number you just added (the incremental integer of the `ColonyVersion` enum).

This will create a new folder: `src/contracts/X` containing all the type definitions you'll need to implement the new colony client.

6) Update the following lines in `ColonyNetworkClient.ts` to reflect the new version:

```ts
import { IColonyNetworkFactory } from '../contracts/X/IColonyNetworkFactory';
import { IColonyNetwork } from '../contracts/X/IColonyNetwork';
```

7) Update all the other contract imports in the non-colony clients, even if they haven't been upgraded (just in case). Then make adjustments to the clients to reflect the contract changes (typescript will tell you, where to make changes). Also add necessary helper functions (e.g. `withProofs` functions) for newly added methods. The newly added methods and their required roles can be found in [this file](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/colony/ColonyAuthority.sol) (and by diffing the generated interface files).


## License

GPL-3.0
