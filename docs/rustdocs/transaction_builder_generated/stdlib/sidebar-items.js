initSidebarItems({"enum":[["ScriptCall","Structured representation of a call into a known Move script. `ignore impl ScriptCall {     pub fn encode(self) -> Script { .. }     pub fn decode(&Script) -> Option<ScriptCall> { .. } } `"]],"fn":[["encode_add_currency_to_account_script","Summary Adds a zero `Currency` balance to the sending `account`. This will enable `account` to send, receive, and hold `Libra::Libra<Currency>` coins. This transaction can be successfully sent by any account that is allowed to hold balances (e.g., VASP, Designated Dealer)."],["encode_add_recovery_rotation_capability_script","Summary Stores the sending accounts ability to rotate its authentication key with a designated recovery account. Both the sending and recovery accounts need to belong to the same VASP and both be VASP accounts. After this transaction both the sending account and the specified recovery account can rotate the sender account's authentication key."],["encode_add_to_script_allow_list_script","Summary Adds a script hash to the transaction allowlist. This transaction can only be sent by the Libra Root account. Scripts with this hash can be sent afterward the successful execution of this script."],["encode_add_validator_and_reconfigure_script","Summary Adds a validator account to the validator set, and triggers a reconfiguration of the system to admit the account to the validator set for the system. This transaction can only be successfully called by the Libra Root account."],["encode_burn_script","Summary Burns all coins held in the preburn resource at the specified preburn address and removes them from the system. The sending account must be the Treasury Compliance account. The account that holds the preburn resource will normally be a Designated Dealer, but there are no enforced requirements that it be one."],["encode_burn_txn_fees_script","Summary Burns the transaction fees collected in the `CoinType` currency so that the Libra association may reclaim the backing coins off-chain. May only be sent by the Treasury Compliance account."],["encode_cancel_burn_script","Summary Cancels and returns all coins held in the preburn area under `preburn_address` and returns the funds to the `preburn_address`'s balance. Can only be successfully sent by an account with Treasury Compliance role."],["encode_create_child_vasp_account_script","Summary Creates a Child VASP account with its parent being the sending account of the transaction. The sender of the transaction must be a Parent VASP account."],["encode_create_designated_dealer_script","Summary Creates a Designated Dealer account with the provided information, and initializes it with default mint tiers. The transaction can only be sent by the Treasury Compliance account."],["encode_create_parent_vasp_account_script","Summary Creates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account."],["encode_create_recovery_address_script","Summary Initializes the sending account as a recovery address that may be used by the VASP that it belongs to. The sending account must be a VASP account. Multiple recovery addresses can exist for a single VASP, but accounts in each must be disjoint."],["encode_create_validator_account_script","Summary Creates a Validator account. This transaction can only be sent by the Libra Root account."],["encode_create_validator_operator_account_script","Summary Creates a Validator Operator account. This transaction can only be sent by the Libra Root account."],["encode_freeze_account_script","Summary Freezes the account at `address`. The sending account of this transaction must be the Treasury Compliance account. The account being frozen cannot be the Libra Root or Treasury Compliance account. After the successful execution of this transaction no transactions may be sent from the frozen account, and the frozen account may not send or receive coins."],["encode_mint_lbr_script","Summary Mints LBR from the sending account's constituent coins by depositing in the on-chain LBR reserve. Deposits the newly-minted LBR into the sending account. Can be sent by any account that can hold balances for the constituent currencies for LBR and LBR."],["encode_peer_to_peer_with_metadata_script","Summary Transfers a given number of coins in a specified currency from one account to another. Transfers over a specified amount defined on-chain that are between two different VASPs, or other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has agreed to receive the coins.  This transaction can be sent by any account that can hold a balance, and to any account that can hold a balance. Both accounts must hold balances in the currency being transacted."],["encode_preburn_script","Summary Moves a specified number of coins in a given currency from the account's balance to its preburn area after which the coins may be burned. This transaction may be sent by any account that holds a balance and preburn area in the specified currency."],["encode_publish_shared_ed25519_public_key_script","Summary Rotates the authentication key of the sending account to the newly-specified public key and publishes a new shared authentication key under the sender's account. Any account can send this transaction."],["encode_register_validator_config_script","Summary Updates a validator's configuration. This does not reconfigure the system and will not update the configuration in the validator set that is seen by other validators in the network. Can only be successfully sent by a Validator Operator account that is already registered with a validator."],["encode_remove_validator_and_reconfigure_script","Summary This script removes a validator account from the validator set, and triggers a reconfiguration of the system to remove the validator from the system. This transaction can only be successfully called by the Libra Root account."],["encode_rotate_authentication_key_script","Summary Rotates the transaction sender's authentication key to the supplied new authentication key. May be sent by any account."],["encode_rotate_authentication_key_with_nonce_admin_script","Summary Rotates the specified account's authentication key to the supplied new authentication key. May only be sent by the Libra Root account as a write set transaction."],["encode_rotate_authentication_key_with_nonce_script","Summary Rotates the sender's authentication key to the supplied new authentication key. May be sent by any account that has a sliding nonce resource published under it (usually this is Treasury Compliance or Libra Root accounts)."],["encode_rotate_authentication_key_with_recovery_address_script","Summary Rotates the authentication key of a specified account that is part of a recovery address to a new authentication key. Only used for accounts that are part of a recovery address (see `Script::add_recovery_rotation_capability` for account restrictions)."],["encode_rotate_dual_attestation_info_script","Summary Updates the url used for off-chain communication, and the public key used to verify dual attestation on-chain. Transaction can be sent by any account that has dual attestation information published under it. In practice the only such accounts are Designated Dealers and Parent VASPs."],["encode_rotate_shared_ed25519_public_key_script","Summary Rotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by any account that has previously published a shared ed25519 public key using `Script::publish_shared_ed25519_public_key`."],["encode_set_validator_config_and_reconfigure_script","Summary Updates a validator's configuration, and triggers a reconfiguration of the system to update the validator set with this new validator configuration.  Can only be successfully sent by a Validator Operator account that is already registered with a validator."],["encode_set_validator_operator_script","Summary Sets the validator operator for a validator in the validator's configuration resource \"locally\" and does not reconfigure the system. Changes from this transaction will not picked up by the system until a reconfiguration of the system is triggered. May only be sent by an account with Validator role."],["encode_set_validator_operator_with_nonce_admin_script","Summary Sets the validator operator for a validator in the validator's configuration resource \"locally\" and does not reconfigure the system. Changes from this transaction will not picked up by the system until a reconfiguration of the system is triggered. May only be sent by the Libra Root account as a write set transaction."],["encode_tiered_mint_script","Summary Mints a specified number of coins in a currency to a Designated Dealer. The sending account must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer account."],["encode_unfreeze_account_script","Summary Unfreezes the account at `address`. The sending account of this transaction must be the Treasury Compliance account. After the successful execution of this transaction transactions may be sent from the previously frozen account, and coins may be sent and received."],["encode_unmint_lbr_script","Summary Withdraws a specified amount of LBR from the transaction sender's account, and unstaples the withdrawn LBR into its constituent coins. Deposits each of the constituent coins to the transaction sender's balances. Any account that can hold balances that has the correct balances may send this transaction."],["encode_update_dual_attestation_limit_script","Summary Update the dual attestation limit on-chain. Defined in terms of micro-LBR.  The transaction can only be sent by the Treasury Compliance account.  After this transaction all inter-VASP payments over this limit must be checked for dual attestation."],["encode_update_exchange_rate_script","Summary Update the rough on-chain exchange rate between a specified currency and LBR (as a conversion to micro-LBR). The transaction can only be sent by the Treasury Compliance account. After this transaction the updated exchange rate will be used for normalization of gas prices, and for dual attestation checking."],["encode_update_libra_version_script","Summary Updates the Libra major version that is stored on-chain and is used by the VM.  This transaction can only be sent from the Libra Root account."],["encode_update_minting_ability_script","Summary Script to allow or disallow minting of new coins in a specified currency.  This transaction can only be sent by the Treasury Compliance account.  Turning minting off for a currency will have no effect on coins already in circulation, and coins may still be removed from the system."]]});