import React from 'react';

import { DeckOpening } from '@teambit/slides.templates.deck-opening';
import { TitleOpening } from '@teambit/slides.templates.section-opening';
import { Blank } from '@teambit/slides.templates.blank';
import { PlainSlide } from '@teambit/slides.entities.slide';
import { Title } from '@teambit/slides.layouts.title';
import { TitleAndText } from '@teambit/slides.layouts.title-and-text';
import { ComponentGrid } from '@teambit/slides.layouts.component-grid';
import { ComponentShowcase } from '@teambit/slides.layouts.component-showcase';

import type { ComponentCardProps } from '@teambit/explorer.ui.gallery.component-card';
import { ComponentCardGroup } from '@teambit/explorer.ui.gallery.component-card-group';
import { excludeHighlighterAtt } from '@teambit/react.ui.component-highlighter';
import { CloudProvider } from '@teambit/cloud.cloud-provider';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { Link } from '@teambit/design.ui.navigation.link';

import { mockBubbleGraph } from '@teambit/community.entity.graph.bubble-graph';
import { ComponentDistributionSection } from '@teambit/community.ui.sections.component-distribution';
import { componentsMock } from '@teambit/community.entity.compnent-distribution-graph';
import { FeaturesSection } from '@teambit/community.ui.features.features-section';
import { features } from '@teambit/community.entity.features';

import { ExploreSection } from '@shohamgilad/pr-meetup.slides.ecosystem-compatibility';
import { Hero } from '@shohamgilad/pr-meetup.slides.what-is-bit';
import { SupportedFrameworks } from '@shohamgilad/pr-meetup.slides.supported-frameworks';

import { GiladUserCard } from '@shohamgilad/self.ui.gilad-user-card';

import Intro from './content/intro.mdx';
import Methodology from './content/methodology.mdx';

// import Benefits from './content/benefits.mdx';
import ComponentIndependency from './content/component-independency.mdx';
import ComponentEncapsulation from './content/component-encapsulation.mdx';
import DynamicWorkspaces from './content/dynamic-workspaces.mdx';
import Discoverability from './content/discoverability.mdx';
import Visibility from './content/visibility.mdx';

import styles from './presentation.module.scss';
import { devEnvsMock } from './dev-envs-mock';

const bubbles = mockBubbleGraph();
const distributionComponents = componentsMock();

function ComponentCardPreview({ src }: { src: string }) {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
}

const baseAspectsUrl = 'https://bit.dev/';
const staticBrandsBaseUrl = 'https://static.bit.dev/brands/';
const staticEnvBaseUrl = 'https://static.bit.dev/extensions-icons/';

const examplesData: ComponentCardProps[] = [
  {
    id: 'learn-bit-react.movies/movies/data/hooks/use-search-movies',
    href: `${baseAspectsUrl}learn-bit-react/movies/movies/data/hooks/use-search-movies`,
    description: 'A React Hook that uses Movies to return data from backend.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: (
      <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-react.svg`} />
    ),
  },
  {
    id: 'teambit.slides/entities/slide',
    href: `${baseAspectsUrl}teambit/slides/entities/slide`,
    description: 'Entity component for simplify frontend collaboration flows.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: (
      <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-node.svg`} />
    ),
  },
  {
    id: 'teambit.component/component-descriptor',
    href: `${baseAspectsUrl}teambit/component/component-descriptor`,
    description: 'The Component component.',
    envIcon: `${staticEnvBaseUrl}default.svg`,
    preview: (
      <ComponentCardPreview src={`${staticBrandsBaseUrl}logo-nodejs.svg`} />
    ),
  },
];

export const slides: PlainSlide[] = [
  {
    title: 'Welcome',
    component: <DeckOpening title="Bit by Bit"></DeckOpening>,
  },
  {
    title: 'About Me',
    component: (
      <Blank>
        <h1 style={{ 'font-size': '45px' }}>About me</h1>
        <CloudProvider>
          <GiladUserCard />
        </CloudProvider>
      </Blank>
    ),
  },
  {
    title: 'Intro',
    component: (
      <Blank>
        <Intro />
      </Blank>
    ),
  },
  {
    title: 'What is Bit',
    component: (
      <Blank>
        <Hero bubbles={bubbles} {...excludeHighlighterAtt} />
      </Blank>
    ),
  },
  {
    title: 'Composable software',
    component: (
      <>
        <section>
          <div className={styles.grid}>
            <ComponentDistributionSection
              title="Compose software, don't implement from scratch"
              components={distributionComponents}
            />
          </div>
        </section>
      </>
    ),
  },
  {
    title: 'Composability features',
    component: (
      <Blank>
        <section>
          <div className={styles.grid}>
            <FeaturesSection
              features={features}
              title="Composable software scales better"
            />
          </div>
        </section>
      </Blank>
    ),
  },
  {
    title: 'Methodology',
    component: (
      <Blank>
        <Methodology />
      </Blank>
    ),
  },
  {
    title: 'Technology',
    component: <TitleOpening title={'Technology'} />,
  },
  {
    title: 'Development environments',
    component: (
      <Blank>
        <WideColumn>
          <CloudProvider>
            <ComponentCardGroup
              title="Development environments"
              components={devEnvsMock}
            />
          </CloudProvider>
        </WideColumn>
      </Blank>
    ),
  },
  {
    title: 'Extend Bit',
    component: (
      <Blank>
        <ExploreSection
          heading={<>Integrate Bit with your workflow and tools.</>}
          subtitle="Bit offers a set of pre-built integrations for various tools, or you can build your own custom extensions."
        />
      </Blank>
    ),
  },
  {
    title: 'Challenges',
    component: <TitleOpening title={'Challenges'} />,
  },
  {
    title: 'ComponentIndependency',
    component: (
      <Blank>
        <ComponentIndependency />
      </Blank>
    ),
  },
  {
    title: 'ComponentEncapsulation',
    component: (
      <Blank>
        <ComponentEncapsulation />
      </Blank>
    ),
  },
  {
    title: 'DynamicWorkspaces',
    component: (
      <Blank>
        <DynamicWorkspaces />
      </Blank>
    ),
  },
  {
    title: 'Discoverability',
    component: (
      <Blank>
        <Discoverability />
      </Blank>
    ),
  },
  {
    title: 'Visibility',
    component: (
      <Blank>
        <Visibility />
      </Blank>
    ),
  },
  {
    title: 'More examples',
    component: (
      <Blank>
        <ComponentCardGroup
          title="More Examples"
          components={examplesData}
          data-testid="component-card-group"
        />
      </Blank>
    ),
  },
  {
    title: 'Get started',
    component: (
      <TitleOpening
        title={'Start by building a single component'}
        OpeningComponent={
          <Link href="https://bit.dev/docs" external={true}>
            Go to docs
          </Link>
        }
      />
    ),
  },
];
