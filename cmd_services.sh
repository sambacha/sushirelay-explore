#!/usr/env/bin bash


ci() { ts-node ./src/utils/initServer/create-indexes.ts
  return 0
}

it() { ts-node ./src/utils/initServer/init-tokens.ts
  return 0
}

ip() { ts-node ./src/utils/initServer/init-pools.ts
  return 0
}

iw() { ts-node ./src/utils/initServer/init-whales.ts
  return 0
}

lcs() { ts-node-dev ./src/listener-commons.ts
  return 0
}

lm() { ts-node-dev ./src/listener-mempool.ts
  return 0
}

lc() { ts-node-dev ./src/listener-confirmation.ts
  return 0
}

web() { ts-node-dev ./src/_websocket-server.ts
  return 0
}

build() { cd client && yarn build && cd .. && tsc
  return 0
}

set-heroku() { ts-node ./src/utils/initServer/set-heroku.ts
  return 0
}

dev-d-txs() { ts-node ./src/utils/dev-utils/drop-transactions.ts
  return 0
}

dev-r-txs() { ts-node ./src/utils/dev-utils/reset-transactions.ts
  return 0
}

dev-r-txc() { ts-node ./src/utils/dev-utils/reset-transactions-c.ts
  return 0
}

dev-r-txp`() { ts-node ./src/utils/dev-utils/reset-transactions-p.ts
  return 0
}

dev-r-t-h() { ts-node ./src/utils/dev-utils/reset-transactions-t-h.ts
  return 0
}

dev-r-pools() { ts-node ./src/utils/dev-utils/reset-pools.ts
  return 0
}

dev-r-blocks() { ts-node ./src/utils/dev-utils/reset-blocks.ts
  return 0
}

dev-r-tokens() { ts-node ./src/utils/dev-utils/reset-tokens.ts
  return 0
}

pretty() { prettier --config .prettierrc 'src/**/*.ts' --write
  return 0
}

web-worker() { node ./dist/_websocket-server.js
  return 0
}

worker-a() {  node ./dist/listener-commons.js
  return 0
}

worker-b() { node ./dist/listener-mempool.js
  return 0
}

worker-c() { node ./dist/listener-confirmation.js 
  return 0
}