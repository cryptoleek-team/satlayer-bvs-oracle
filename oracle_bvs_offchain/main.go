package main

import (
	"context"
	"github.com/cryptoleek-team/satlayer-bvs-oracle/oracle_bvs_offchain/node"
)

func main() {
	ctx := context.Background()
	n := node.NewNode()
	n.Run(ctx)
}