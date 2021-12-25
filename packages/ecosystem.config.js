module.exports = {
  apps: [
    {
      name: 'web-commons',
      script: 'dist/listener-commons.js',
      node_args: '--harmony',
      args: [''],
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'web-mempool',
      script: 'dist/listener-mempool.js',
      node_args: '--harmony',
      args: [''],
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'web-confirmation',
      script: 'dist/listener-confirmation.js',
      node_args: '--harmony',
      args: [''],
      watch: true,
      merge_logs: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
