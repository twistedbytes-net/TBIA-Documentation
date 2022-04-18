import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import styles from './index.module.scss';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <img src={require('@site/static/img/logo-228.png').default} alt={"TwistedBytes Logo"} style={{height:'228px'}}/>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/getting-started/introduction">
                        Learn more
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={""}
            description="A complete framework for creating almost any type of interactions contained in an easy-to-use plugin. This plugin can be integrated by either using Blueprints or C++, with high flexibility in making customizations for your own gameplay mechanics.">
            <HomepageHeader/>
            <main>
                {/*<HomepageFeatures/>*/}
            </main>
        </Layout>
    );
}
