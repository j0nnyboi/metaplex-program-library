//! A Token Fraction program for the Solana blockchain.

pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod processor;
pub mod state;
pub mod utils;
// Export current sdk types for downstream users building with a different sdk version
pub use safecoin_program;

safecoin_program::declare_id!("9sfa9YXCZKvzMcpRFfaW3kudtqoqW4jKTfjsn5Q3fp8N");
