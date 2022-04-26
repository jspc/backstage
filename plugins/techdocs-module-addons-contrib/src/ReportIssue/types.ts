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

/**
 * Represents the issue template as an object.
 * @public
 */
export type ReportIssueTemplate = {
  /**
   * Value for title field in the new issue form.
   */
  title: string;
  /**
   * Value for description field in the new issue form.
   */
  body: string;
};

/**
 * Definition for a template builder function.
 *
 * @param options - An object containing the text selection.
 * @returns A new issue template object that contains title and body properties.
 * @public
 */
export type ReportIssueTemplateBuilder = ({
  selection,
}: {
  selection: Selection;
}) => ReportIssueTemplate;

export type Repository = {
  type: string;
  name: string;
  owner: string;
  protocol: string;
  resource: string;
};
