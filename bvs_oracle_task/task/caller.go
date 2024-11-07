package task

import (
	"context"
	"fmt"	
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/satlayer/satlayer-api/chainio/types"
	"github.com/satlayer/satlayer-api/logger"
	transactionprocess "github.com/satlayer/satlayer-api/metrics/indicators/transaction_process"

	"github.com/satlayer/satlayer-api/chainio/io"

	OracleBvsApi "github.com/cryptoleek-team/satlayer-bvs-oracle/oracle_bvs_api"
	"github.com/cryptoleek-team/satlayer-bvs-oracle/bvs_oracle_task/core"
	"github.com/satlayer/satlayer-api/chainio/api"
)

type Caller struct {
	bvsContract string
	chainIO     io.ChainIO
}

// RunCaller runs the caller by creating a new caller and executing its Run method.
//
// No parameters.
// No return.
func RunCaller() {
	c := NewCaller()
	c.Run()
}

// NewCaller creates a new Caller instance.
//
// Returns a pointer to Caller.
func NewCaller() *Caller {
	elkLogger := logger.NewELKLogger("bvs_demo")
	elkLogger.SetLogLevel("info")
	reg := prometheus.NewRegistry()
	metricsIndicators := transactionprocess.NewPromIndicators(reg, "bvs_demo")
	chainIO, err := io.NewChainIO(core.C.Chain.Id, core.C.Chain.Rpc, core.C.Owner.KeyDir, core.C.Owner.Bech32Prefix, elkLogger, metricsIndicators, types.TxManagerParams{
		MaxRetries:             5,
		RetryInterval:          3 * time.Second,
		ConfirmationTimeout:    60 * time.Second,
		GasPriceAdjustmentRate: "1.1",
	})
	if err != nil {
		panic(err)
	}
	client, err := chainIO.SetupKeyring(core.C.Owner.KeyName, core.C.Owner.KeyringBackend)
	if err != nil {
		panic(err)
	}
	txResp, err := api.NewBVSDirectoryImpl(client, core.C.Chain.BvsDirectory).GetBVSInfo(core.C.Chain.BvsHash)
	fmt.Printf("txResp: %+v\n", txResp)
	if err != nil {
		panic(err)
	}
	return &Caller{
		bvsContract: txResp.BVSContract,
		chainIO:     client,
	}
}

// Run runs the caller in an infinite loop, creating a new task with a random number every second.
//
// No parameters.
// No return.
func (c *Caller) Run() {
	oracleBVS := OracleBvsApi.NewOracleBVS(c.chainIO)
	oracleBVS.BindClient(c.bvsContract)

	// Define crypto symbol mapping
	cryptoMap := map[string]int64{
		"BTC": 1,
		"ETH": 2,
		// Add more mappings as needed
	}

	btc, ok := cryptoMap["BTC"]
	if !ok {
		panic("Cryptocurrency symbol not found in mapping")
	}

	resp, err := oracleBVS.CreateNewTask(context.Background(), btc)
	if err != nil {
		panic(err)
	}
	fmt.Printf("resp: %s\n", resp.Hash.String())
}
