
import React from 'react';
import classnames from 'classnames';
import { UserCard } from '@teambit/people.user-card';
import { SocialLinksPlugin } from '@teambit/people.plugins.social-links';
import type { SocialLinksProps } from '@teambit/people.ui.social-links';
import { UserInfoPlugin } from '@teambit/people.plugins.user-info';
import { UserInfoProps } from "@teambit/people.ui.user-info";

import styles from './gilad-card.module.scss';

const username = 'shohamgilad';

const userInfo: UserInfoProps["userInfo"] = {
  header: {
    location: "Israel",
    role: "VP R&D@bit",
  },
  scopes: [
    { name: "teambit / dependencies", iconURL: "https://static.bit.dev/scope-icons-selector/graph.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / harmony", iconURL: "https://static.bit.dev/scope-icons-selector/version.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / react", iconURL: "https://static.bit.dev/scope-icons-selector/react.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / workspace", iconURL: "https://static.bit.dev/scope-icons-selector/flag.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / scope", iconURL: "https://static.bit.dev/scope-icons-selector/Folder-open.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / defender", iconURL: "https://static.bit.dev/scope-icons-selector/shield-Protection.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / mdx", iconURL: "https://static.bit.dev/scope-icons-selector/files.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / graph", iconURL: "https://static.bit.dev/scope-icons-selector/graph.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / compositions", iconURL: "https://static.bit.dev/scope-icons-selector/Virus.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / preview", iconURL: "https://static.bit.dev/scope-icons-selector/eye.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / pkg", iconURL: "https://static.bit.dev/scope-icons-selector/package.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / bvm", iconURL: "" },
    { name: "teambit / envs", iconURL: "" },
    { name: "teambit / pipelines", iconURL: "" },
    { name: "teambit / lanes", iconURL: "" },
    { name: "teambit / webpack", iconURL: "" },
    { name: "teambit / html", iconURL: "https://static.bit.dev/scope-icons-selector/code.svg?v=0.2&size=48&w=96&h=96&crop=faces&fit=crop&bg=" },
    { name: "teambit / typescript", iconURL: "" },
    { name: "teambit / graphql", iconURL: "" },
    { name: "teambit / web-components", iconURL: "" },
    { name: "teambit / application", iconURL: "" },
  ],
  previousRole: "Team Leader",
  hobbies: ["Coding", "Home automation", "Table tennis", "Reading", "Chess", "Card magic"],
  skills: ["Bit", "TypeScript", "Node", "React", "GraphQL", "Mongo", "Compilers", "Bundlers", "Testers", "Webpack", "Babel", "AST"],
};

const socialLinks: SocialLinksProps["links"] = [
  { url: "https://github.com/GiladShoham", name: "github" },
  { url: "https://www.linkedin.com/in/shohamgilad/", name: "linkedin" },
  { url: "https://github.com/GiladShoham", name: "website" },
  { url: "https://twitter.com/ShohamGilad", name: "twitter" },
];

export type SocialLink = {
  name: 'twitter' | 'github' | 'linkedin' | 'website';
  url: string;
};

export function GiladUserCard({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <UserCard
      className={classnames(styles.giladUserCard, className)}
      {...rest}
      username={username}
      plugins={[
        new SocialLinksPlugin(socialLinks),
        new UserInfoPlugin(userInfo),
      ]}
    />
  );
}