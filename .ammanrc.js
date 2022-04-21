// @ts-check
'use strict';
const path = require('path');

const localDeployDir = path.join(__dirname, 'target', 'deploy');

const programIds = {
  metadata: 'WbMTNyvtk8vSMu2AmXV7mKuYrADRNw9GSkNtWKsZ7qe',
  vault: '9sfa9YXCZKvzMcpRFfaW3kudtqoqW4jKTfjsn5Q3fp8N',
  auction: 'ETy2M4RHk1K9fXtzP5wuvP7iUZPazbsgsTvAWFDigkj4',
  metaplex: '4Mwn4v5KdBGv5KGbjjiVJtKQLjEmTFATmhLv8gHf6LNg',
  fixedPriceSaleToken: 'SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo',
  candyMachine: 'KMQvpFxDaFt58rsPeLc1kPSYbdAHUrpETiBiNUb8SGT'
};

function localDeployPath(programName) {
  return path.join(localDeployDir, `${programName}.so`);
}
const programs = {
  metadata: { programId: programIds.metadata, deployPath: localDeployPath('mpl_token_metadata') },
  vault: { programId: programIds.vault, deployPath: localDeployPath('mpl_token_vault') },
  auction: { programId: programIds.auction, deployPath: localDeployPath('mpl_auction') },
  metaplex: { programId: programIds.metaplex, deployPath: localDeployPath('mpl_metaplex') },
  fixedPriceSaleToken: {
    programId: programIds.fixedPriceSaleToken,
    deployPath: localDeployPath('mpl_fixed_price_sale'),
  },
};

const validator = {
  verifyFees: false,
};

module.exports = {
  programs,
  validator,
};
