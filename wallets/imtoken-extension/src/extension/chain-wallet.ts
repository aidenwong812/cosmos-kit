import { ChainRecord, ChainWalletBase, Wallet } from '@cosmos-kit/core';

export class ChainIMTokenExtension extends ChainWalletBase {
  constructor(walletInfo: Wallet, chainInfo: ChainRecord) {
    super(walletInfo, chainInfo);
  }
}
