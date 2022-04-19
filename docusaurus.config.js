// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const urlTwistedBytesWebsite = "https://twistedbytes.net";
const urlUnrealMarketplaceProduct_TBIA = "https://www.unrealengine.com/marketplace/en-US/product/fd69a887e4894a61b05809916c9ec2b2";
const urlDiscordInviteLink = "https://discordapp.com/invite/CP4uZ69tne";
const urlGitHubRepository = "https://github.com/twistedbytes-net/TBIA-Documentation";
const urlGitHubIssueTracker = `${urlGitHubRepository}/issues`;

const globalRemarkPlugins = [
    require('mdx-mermaid'),
    require('remark-math'),
    require('@akebifiky/remark-simple-plantuml'),
];

const globalRehypePlugins = [
    require('rehype-katex'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "TwistedBytes Interaction System",
    tagline:
        "A complete framework for creating almost any type of interactions contained in an easy-to-use plugin. This plugin can be integrated by either using Blueprints or C++, with high flexibility in making customizations for your own gameplay mechanics.",

    organizationName: "twistedbytes-net", // Usually your GitHub org/user name.
    projectName: "TBIA-Documentation", // Usually your repo name.
    deploymentBranch: "gh-pages",

    url: "https://twistedbytes-net.github.io",
    baseUrl: "/TBIA-Documentation/",

    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",

    plugins: [
        'docusaurus-plugin-sass'
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: ({versionDocsDirPath, docPath}) =>
                        `${urlGitHubRepository}/edit/master/${versionDocsDirPath}/${docPath}`,
                    showLastUpdateTime: false,
                    includeCurrentVersion: false,
                    versions: {
                        "1.0.0-UE_4.26": {
                            banner: "none"
                        },
                    },

                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                pages: {
                    remarkPlugins: globalRemarkPlugins,
                    rehypePlugins: globalRehypePlugins,
                },

                blog: false,

                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            }),
        ],
    ],

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            navbar: {
                title: "TwistedBytes Interaction System",
                logo: {
                    alt: "TwistedBytes Interaction System Logo",
                    src: "img/logo-48.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "getting-started/introduction",
                        label: "Documentation",
                        position: "left",
                    },

                    {type: "docsVersionDropdown", position: "left"},

                    {to: "/changelog", label: "Changelog", position: "right"},

                    {to: "/roadmap", label: "Roadmap", position: "right"},

                    {
                        href: urlDiscordInviteLink,
                        label: "Discord",
                        position: "right",
                    },

                    {
                        href: urlGitHubIssueTracker,
                        label: "Issue Tracker",
                        position: "right",
                    },

                    {
                        href: urlGitHubRepository,
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },

            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {to: "/docs/getting-started/introduction", label: "Getting Started"},

                            {to: "/changelog", label: "Changelog"},

                            {to: "/roadmap", label: "Roadmap"},
                        ],
                    },

                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: urlDiscordInviteLink,
                            },
                        ],
                    },

                    {
                        title: "Unreal Marketplace",
                        items: [
                            {
                                label: "TwistedBytes Interaction System",
                                href: urlUnrealMarketplaceProduct_TBIA,
                            },
                        ],
                    },

                    {
                        title: "More",
                        items: [
                            {
                                label: "TwistedBytes",
                                href: urlTwistedBytesWebsite,
                            },

                            {
                                label: "GitHub",
                                href: urlGitHubRepository,
                            },

                            {
                                label: "Issue Tracker",
                                href: urlGitHubIssueTracker,
                            },
                        ],
                    },
                ],

                copyright: `Copyright © ${new Date().getFullYear()} twistedbytes.net. All Rights Reserved.`,
            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
