/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createPlugin } from '@backstage/core-plugin-api';
import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react';
import { ReportIssueAddon, ReportIssueProps } from './ReportIssue';

/**
 * The TechDocs addons contrib plugin
 *
 * @public
 */

export const techdocsModuleAddonsContribPlugin = createPlugin({
  id: 'techdocsModuleAddonsContrib',
});

/**
 * TechDocs add-on that lets you select text and open GitHub/Gitlab issues.
 *
 * @remarks
 * Before using it, you should set up an `edit_uri` for your pages as explained {@link https://backstage.io/docs/features/techdocs/faqs#is-it-possible-for-users-to-suggest-changes-or-provide-feedback-on-a-techdocs-page | here} and remember, it only works for Github or Gitlab.
 *
 * @example
 * Here's a simple example:
 * ```
 * import {
 *   DefaultTechDocsHome,
 *   TechDocsIndexPage,
 *   TechDocsReaderPage,
 * } from '@backstage/plugin-techdocs';
 * import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
 * import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
 *
 *
 * const AppRoutes = () => {
 *   <FlatRoutes>
 *     // other plugin routes
 *     <Route path="/docs" element={<TechDocsIndexPage />}>
 *       <DefaultTechDocsHome />
 *     </Route>
 *     <Route
 *       path="/docs/:namespace/:kind/:name/*"
 *       element={<TechDocsReaderPage />}
 *     >
 *       <TechDocsAddons>
 *         <ReportIssue />
 *       </TechDocsAddons>
 *     </Route>
 *   </FlatRoutes>;
 * };
 * ```
 *
 * @example
 * Here's an example with `debounceTime` and `templateBuilder` props:
 * ```
 * import {
 *   DefaultTechDocsHome,
 *   TechDocsIndexPage,
 *   TechDocsReaderPage,
 * } from '@backstage/plugin-techdocs';
 * import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
 * import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
 *
 * const templateBuilder = ({ selection }: ReportIssueTemplateBuilder) => (({
 *  title: 'Custom issue title',
 *  body: `Custom issue body: ${selection.toString()}`
 * }))
 *
 * const AppRoutes = () => {
 *   <FlatRoutes>
 *     // other plugin routes
 *     <Route path="/docs" element={<TechDocsIndexPage />}>
 *       <DefaultTechDocsHome />
 *     </Route>
 *     <Route
 *       path="/docs/:namespace/:kind/:name/*"
 *       element={<TechDocsReaderPage />}
 *     >
 *       <TechDocsAddons>
 *         <ReportIssue debounceTime={300} templateBuilder={templateBuilder} />
 *       </TechDocsAddons>
 *     </Route>
 *   </FlatRoutes>;
 * ```
 * @param props - Object that can optionally contain `debounceTime` and `templateBuilder` properties.
 * @public
 */
export const ReportIssue = techdocsModuleAddonsContribPlugin.provide(
  createTechDocsAddonExtension<ReportIssueProps>({
    name: 'ReportIssue',
    location: TechDocsAddonLocations.Content,
    component: ReportIssueAddon,
  }),
);
