const query = `{
        factories {
          poolCount
      }
      pools(orderBy: volumeUSD, orderDirection: desc, first: 1000){
        id
        token0 {
          name
          symbol
          totalSupply
        }
        token1 {
          name
          symbol
          totalSupply
        }
        feeTier
        totalValueLockedToken0
        totalValueLockedToken1
      }
    }`;

export { query };
