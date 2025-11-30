const ADAPTER_NAME = '@astrojs/netlify';

export default function netlifyAdapter(options = {}) {
  return {
    name: ADAPTER_NAME,
    hooks: {
      'astro:config:setup'({ updateConfig }) {
        updateConfig({ output: 'server' });
      },
      'astro:config:done'({ setAdapter }) {
        setAdapter({
          name: ADAPTER_NAME,
          serverEntrypoint: `${ADAPTER_NAME}/server`,
          exports: ['default'],
          args: options,
          supportedAstroFeatures: {
            staticOutput: 'stable',
            serverOutput: 'stable',
            hybridOutput: 'stable',
            sharpImageService: 'stable'
          }
        });
      }
    }
  };
}
