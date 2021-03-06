// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { assert } from "chai";

import {
  TextAnalyticsClient,
  TextAnalyticsApiKeyCredential,
  DetectLanguageResultCollection,
  DetectLanguageSuccessResult
} from "../src";
import { testEnv } from "./utils/recordedClient";

import { WebResource, HttpOperationResponse, HttpHeaders } from "@azure/core-http";

describe("TextAnalyticsClient Custom PipelineOptions", function() {
  let credential = new TextAnalyticsApiKeyCredential(testEnv.TEXT_ANALYTICS_API_KEY);

  it("use custom HTTPClient", async () => {
    const pipelineTester = new Promise<DetectLanguageResultCollection>((resolve) => {
      const client = new TextAnalyticsClient(testEnv.ENDPOINT, credential, {
        httpClient: {
          sendRequest: async (request: WebResource): Promise<HttpOperationResponse> => ({
            status: 200,
            request,
            bodyAsText: JSON.stringify({
              documents: [
                { id: "0", detectedLanguages: [{ name: "English", iso6391Name: "en", score: 1.0 }] }
              ],
              errors: [],
              modelVersion: "2019-10-01"
            }),
            headers: new HttpHeaders({})
          })
        }
      });

      client.detectLanguage(["Hello!"], "us").then((languages) => resolve(languages));
    });

    const [result] = await pipelineTester;
    assert.ok(result.error === undefined);
    assert.ok((result as DetectLanguageSuccessResult).id === "0");
    assert.ok((result as DetectLanguageSuccessResult).primaryLanguage.iso6391Name === "en");
  });
});
