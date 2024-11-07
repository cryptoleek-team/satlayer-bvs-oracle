babylond tx wasm instantiate 77 '{"aggregator": "bbn1peyqh97yv4r529tvdmhtje37dcuz5eejqgylg3", "state_bank": "bbn1h9zjs2zr2xvnpngm9ck8ja7lz2qdt5mcw55ud7wkteycvn7aa4pqpghx2q", "bvs_driver": "bbn18x5lx5dda7896u074329fjk4sflpr65s036gva65m4phavsvs3rqk5e59c"}' --from=bvs-owner --no-admin --label="demo" --gas=auto --gas-prices=1ubbn --gas-adjustment=1.3 --chain-id=sat-bbn-testnet1 -b=sync --yes --log_format=json --node https://rpc.sat-bbn-testnet1.satlayer.net


curl -s -X GET "https://lcd1.sat-bbn-testnet1.satlayer.net/cosmwasm/wasm/v1/code/77/contracts" -H "accept: application/json" | jq -r '.contracts[-1]'


satlayer-cli directory reg-bvs bvs-owner bbn17a0gayn6xner4sv897wjpvnmla8a85kzg36hxc6mtdvvng0jnx7qug4882

Register bvs success. bvs_hash: 0e84e224dec44af724f603d6e11b6c42af4219fe1b7ea4e9a7af8261ad51972c

curl -s https://lcd3.sat-bbn-testnet1.satlayer.net/cosmos/tx/v1beta1/txs/00EAE1C6F4C1D46DAA4FABD8F66A94BC22E92FBCE0AA54A5CA4B0DAE4B12814C | jq '.tx_response.events.[] | select(.type == "wasm").attributes.[] | select(.key == "bvs_hash").value' | sed 's/"//g'


bbn1h4gd6f9fxe0rnc6yn08xew0rtzwvfxwj0kpgxx


babylond tx wasm execute bbn18ru4lx39wmwfjx707uuxyu9mt4sjwjnkjx6a37dyg4eatt9jqx9q0sn2el '{"create_new_task": {"input": 10}}' --from=bvs-user --gas=auto --gas-prices=1ubbn --gas-adjustment=1.3 --chain-id=sat-bbn-testnet1 -b=sync --yes --log_format=json --node https://rpc.sat-bbn-testnet1.satlayer.net

babylond tx wasm execute bbn18ru4lx39wmwfjx707uuxyu9mt4sjwjnkjx6a37dyg4eatt9jqx9q0sn2el '{"respond_to_task": {"task_id": 10, "result": 1}}' --from=bvs-aggregator --gas=auto --gas-prices=1ubbn --gas-adjustment=1.3 --chain-id=sat-bbn-testnet1 -b=sync --yes --log_format=json --node https://rpc.sat-bbn-testnet1.satlayer.net

babylond query wasm contract-state smart bbn18ru4lx39wmwfjx707uuxyu9mt4sjwjnkjx6a37dyg4eatt9jqx9q0sn2el '{"get_task_input": {"task_id": 72}}' --log_format=json --node https://rpc.sat-bbn-testnet1.satlayer.net

babylond query wasm contract-state smart bbn18ru4lx39wmwfjx707uuxyu9mt4sjwjnkjx6a37dyg4eatt9jqx9q0sn2el '{"get_task_result": {"task_id": 29}}' --log_format=json --node https://rpc.sat-bbn-testnet1.satlayer.net




babylond tx bank send bbn1jkke7s84wwwxhk40anxx5th6j4yq7a4n4ag20u bbn1pt626qqx3tmatxf92dvlpayq8ccwt9ypk3r9hx 5bbn --node https://rpc.sat-bbn-testnet1.satlayer.net --chain-id=sat-bbn-testnet1 --fees 2ubbn