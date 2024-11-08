# Fist Babylon SatLayer BVS-enabled Oracle Protocol

## Overview

The **Fist Babylon SatLayer BVS-enabled Oracle Protocol** is the first Bitcoin Validated Service (BVS) oracle protocol built on Babylon, leveraging SatLayer's innovative restaking infrastructure([1](https://docs.satlayer.xyz/)). This implementation demonstrates a fully functional, end-to-end oracle solution that utilizes Bitcoin's security model through Babylon's Proof of Stake system.

### Presentation
[Talk Slides](https://cryptoleek-team.github.io/awesome-presentations/bvs-oracle.html)

## Video DEMO

[![youtube](https://youtu.be/6AAucuG32oA)](https://youtu.be/6AAucuG32oA?si=ezNonaIqCn3BbXuW)

## Github URL
[https://github.com/cryptoleek-team/satlayer-bvs-oracle
](https://github.com/cryptoleek-team/satlayer-bvs-oracle)
## Architecture

![bbl-sat-bvs-oracle.png](https://cdn.dorahacks.io/static/files/1930a18e4ed85788203dbae49e6b6327.png)

The protocol consists of several key components working together to provide secure and reliable oracle services:

### Core Components

- **Task Manager**
  - Initiates and broadcasts oracle tasks
  - Monitors task execution and completion
  - Validates incoming data against consensus rules

- **Offchain Node Network**
  - Decentralized network of validator nodes
  - Executes BVS-specific oracle logic
  - Fetches and validates external price data
  - Ensures data integrity through cross-validation

- **Aggregator Service**
  - Collects validated data points from nodes
  - Implements consensus mechanisms
  - Provides final aggregated results to the network

- **Reward Distribution**
  - Manages reward distribution to stakers([2](https://docs.satlayer.xyz/restakers/sats))
  - Handles Sats² reward calculations

- **Slashing**
  - Manages Slashing Conditions
  - Implements slashing conditions for malicious behavior
  - Handles Sats² slashing calculations

- **Delgation**
  - Manages User Delegation Conditions
  - Implements Delegation for different Operatorsbehavior
  - Handles Delegation Weights Calculations

## Security Model

The protocol leverages SatLayer's security framework which includes:

- **Bitcoin-Backed Security**: Utilizes BTC as slashable collateral
- **Multi-Layer Validation**: Implements both on-chain and off-chain validation
- **Slashing Conditions**: Programmable slashing for incorrect data provision
- **Operator Oversight**: Managed by verified SatLayer operators([3](https://docs.satlayer.xyz/overview/satlayer-architecture))

## Getting Started

### Prerequisites

- Babylon node
- SatLayer operator credentials
- Required development tools

### Installation

```bash
git clone https://github.com/your-org/satlayer-oracle-bvs
cd satlayer-oracle-bvs
make install
```

### Running Tests

```bash
make test
```

### Deployment

Refer to the [deployment guide](./deployment.md) for detailed instructions on:
- Setting up operator nodes
- Configuring the oracle network
- Managing staker delegations
- Monitoring system health

## Technical Documentation

For detailed technical specifications and API documentation, please refer to:
- [Architecture Overview](./docs/architecture.md)
- [API Reference](./docs/api.md)
- [Operator Guide](./docs/operator.md)

## Contributing

We welcome contributions from the community. Please read our [contributing guidelines](./CONTRIBUTING.md) before submitting pull requests.

## Security

This project has undergone security audits by leading firms in the space([4](https://docs.satlayer.xyz/security/audits)). For security concerns or bug reports, please email security@yourdomain.com.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the SatLayer team and the Babylon ecosystem for their support and infrastructure that makes this project possible.
