//! A Token Metadata program for the Solana blockchain.

pub mod assertions;
pub mod deprecated_instruction;
pub mod deprecated_processor;
pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod pda;
pub mod processor;
pub mod state;
pub mod utils;
pub mod utils_test;
// Export current sdk types for downstream users building with a different sdk version
pub use safecoin_program;

safecoin_program::declare_id!("WbMTNyvtk8vSMu2AmXV7mKuYrADRNw9GSkNtWKsZ7qe");
