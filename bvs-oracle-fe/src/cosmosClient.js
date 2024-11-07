const { CosmWasmClient } = require("@cosmjs/cosmwasm-stargate");

class CosmosClient {
  constructor() {
    this.rpcEndpoint = "https://rpc.sat-bbn-testnet1.satlayer.net";
    this.contractAddress = "bbn18ru4lx39wmwfjx707uuxyu9mt4sjwjnkjx6a37dyg4eatt9jqx9q0sn2el";
  }

  async connect() {
    this.client = await CosmWasmClient.connect(this.rpcEndpoint);
  }

  async getTaskResult(taskId) {
    if (!this.client) {
      await this.connect();
    }

    const query = {
      get_task_result: {
        task_id: parseInt(taskId)
      }
    };

    try {
      const result = await this.client.queryContractSmart(
        this.contractAddress,
        query
      );
      return result;
    } catch (error) {
      console.error('Error querying task result:', error);
      throw error;
    }
  }

  async getTaskInput(taskId) {
    if (!this.client) {
      await this.connect();
    }

    const query = {
      get_task_input: {
        task_id: parseInt(taskId)
      }
    };

    try {
      const result = await this.client.queryContractSmart(
        this.contractAddress,
        query
      );
      return result;
    } catch (error) {
      console.error('Error querying task input:', error);
      throw error;
    }
  }
}

module.exports = new CosmosClient();