// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'doc',
      id: 'stackblitz-gtm', // ✅ This must match your filename (without .md)
      label: 'StackBlitz GTM Plan', // ✅ This is what appears in sidebar
    },
  ],
};

export default sidebars;
